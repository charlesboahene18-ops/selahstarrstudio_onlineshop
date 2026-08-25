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
  const isPopNavigationRef = useRef(false)
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
    routeRef.current = route
  }, [route])

  useEffect(() => {
    // Back/forward through session history fires `popstate` just before
    // `hashchange` for same-document navigations; a link click or
    // `location.hash = ...` assignment fires only `hashchange`. This is the
    // only reliable way to tell the two apart in a hash router.
    const onPopState = () => {
      isPopNavigationRef.current = true
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
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
    const wasPopNavigation = isPopNavigationRef.current
    isPopNavigationRef.current = false

    const isFirstRender = !hasMountedRef.current
    hasMountedRef.current = true

    // Returning to Home via Back/Forward: restore the exact position the user
    // scrolled to before leaving, applied synchronously (before paint) so
    // there's no visible jump to the top first.
    if (route.name === 'home' && wasPopNavigation) {
      scrollInstantTo(readStoredHomeScrollY())
      return
    }

    // On first mount (fresh load or a manual refresh), leave the scroll
    // position exactly as the browser already placed it instead of forcing
    // it to the top.
    if (isFirstRender && (route.name !== 'home' || !route.sectionId || route.sectionId === 'home')) {
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
