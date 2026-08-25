import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { AnnouncementMarquee } from './components/AnnouncementMarquee'
import { FloatingContactWidget } from './components/FloatingContactWidget'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { CartProvider } from './context/CartContext'
import { allCollections } from './data/collectionData'
import {
  allProducts,
  announcementMessages,
  blogPosts,
  footerContent,
  footerLinkGroups,
  headerSocialLinks,
  navLinks,
} from './data/storefrontContent'
import { CartPage } from './pages/CartPage'
import { CollectionPage } from './pages/CollectionPage'
import { HomePage } from './pages/HomePage'
import { JournalPage } from './pages/JournalPage'
import { JournalPostPage } from './pages/JournalPostPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductPage } from './pages/ProductPage'
import { ProductsPage } from './pages/ProductsPage'
import { parseHashRoute } from './utils/routes'

// A stale section-anchor hash (e.g. `#contact`, left over from an earlier
// in-app nav click) makes the browser's native "scroll to fragment" behavior
// jump straight to that element on a hard refresh — before our own scroll
// logic below even gets a say. Strip it from the URL bar before React mounts
// so there's nothing left for the browser to jump to. Real SPA routes
// (`#/products`, `#/cart`, ...) are left untouched so refreshing on those
// still works.
if (typeof window !== 'undefined') {
  const { hash } = window.location
  if (hash && hash !== '#' && !hash.startsWith('#/')) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
  }
}

const HOME_SCROLL_STORAGE_KEY = 'sss:home-scroll-y'

function readStoredHomeScrollY() {
  try {
    const raw = sessionStorage.getItem(HOME_SCROLL_STORAGE_KEY)
    const value = raw == null ? null : Number(raw)
    return Number.isFinite(value) ? value : 0
  } catch {
    return 0
  }
}

function storeHomeScrollY(value) {
  try {
    sessionStorage.setItem(HOME_SCROLL_STORAGE_KEY, String(value))
  } catch {
    // sessionStorage unavailable (e.g. private browsing) — restoration falls back to top
  }
}

// `behavior: 'auto'` on scrollTo/scrollIntoView means "defer to the element's
// CSS `scroll-behavior`", not "instant" — and global.css sets `html { scroll-
// behavior: smooth }`. Without an explicit override, every one of these calls
// was quietly animating over ~1-2s instead of jumping, which is the "brief
// lag" users saw on every navigation. `behavior: 'instant'` bypasses CSS and
// jumps immediately.
function scrollInstantTo(top) {
  window.scrollTo({ top, left: 0, behavior: 'instant' })
}

export default function App() {
  const [route, setRoute] = useState(() => parseHashRoute(window.location.hash))
  const isHomeRoute = route.name === 'home'
  const routeRef = useRef(route)
  const hasMountedRef = useRef(false)

  const scrollToTop = () => {
    scrollInstantTo(0)
  }

  // Let the browser own scroll restoration by default; we only step in for the
  // home-section-anchor and back/forward cases below, which it can't handle alone
  // in a single-document hash router.
  useEffect(() => {
    window.history.scrollRestoration = 'auto'
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      if (routeRef.current.name === 'home') {
        storeHomeScrollY(window.scrollY)
      }
      setRoute(parseHashRoute(window.location.hash))
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useLayoutEffect(() => {
    // `routeRef` still holds the previous route here — this layout effect runs
    // before the plain effect below that syncs it to the latest value.
    const previousRoute = routeRef.current

    const isFirstRender = !hasMountedRef.current
    hasMountedRef.current = true

    // Coming back to Home from another page (Back/Forward, or a Home/logo
    // link click) restores the exact position the user scrolled to before
    // leaving, applied synchronously (before paint) so there's no visible
    // jump to the top first. We detect this from the route transition itself
    // rather than the `popstate` event — browsers fire `popstate` for every
    // same-document hash navigation here, not just history traversal, so it
    // can't reliably distinguish "came back to Home" from "clicked a section
    // link while already on Home".
    if (!isFirstRender && route.name === 'home' && previousRoute.name !== 'home') {
      scrollInstantTo(readStoredHomeScrollY())
      return
    }

    // On first mount (fresh load or a manual refresh), leave the scroll
    // position exactly as the browser already placed it instead of forcing
    // it to the top or jumping to whatever section a stale `#hash` (e.g.
    // `#contact`) still in the URL bar happens to point at.
    if (isFirstRender) {
      return
    }

    if (route.name !== 'home') {
      scrollToTop()
      return
    }

    window.requestAnimationFrame(() => {
      if (!route.sectionId || route.sectionId === 'home') {
        scrollToTop()
        return
      }

      const target = document.getElementById(route.sectionId)
      if (target) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'instant' : 'smooth',
          block: 'start',
        })
      }
    })
  }, [route])

  useEffect(() => {
    routeRef.current = route
  }, [route])

  const productBySlug = useMemo(
    () => new Map(allProducts.map((product) => [product.slug, product])),
    [],
  )
  const collectionBySlug = useMemo(
    () => new Map(allCollections.map((collection) => [collection.slug, collection])),
    [],
  )
  const postBySlug = useMemo(
    () => new Map(blogPosts.map((post) => [post.slug, post])),
    [],
  )

  let page = <HomePage />

  if (route.name === 'products') {
    page = <ProductsPage products={allProducts} />
  } else if (route.name === 'product') {
    page = (
      <ProductPage
        product={productBySlug.get(route.slug)}
        products={allProducts}
      />
    )
  } else if (route.name === 'collection') {
    page = (
      <CollectionPage
        collection={collectionBySlug.get(route.slug)}
        products={allProducts}
      />
    )
  } else if (route.name === 'journal') {
    page = <JournalPage posts={blogPosts} />
  } else if (route.name === 'journal-post') {
    page = (
      <JournalPostPage
        post={postBySlug.get(route.slug)}
        posts={blogPosts}
      />
    )
  } else if (route.name === 'cart') {
    page = <CartPage />
  } else if (route.name === 'not-found') {
    page = <NotFoundPage />
  }

  return (
    <CartProvider products={allProducts}>
      <div className="site-page">
        <AnnouncementMarquee messages={announcementMessages} />
        {isHomeRoute ? null : (
          <Header navLinks={navLinks} products={allProducts} socialLinks={headerSocialLinks} />
        )}
        <main>{page}</main>
        <Footer content={footerContent} groups={footerLinkGroups} />
        <FloatingContactWidget />
      </div>
    </CartProvider>
  )
}
