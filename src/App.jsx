import { useEffect, useMemo, useState } from 'react'
import { AnnouncementMarquee } from './components/AnnouncementMarquee'
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

export default function App() {
  const [route, setRoute] = useState(() => parseHashRoute(window.location.hash))

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHashRoute(window.location.hash))
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
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
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
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
        <Header navLinks={navLinks} products={allProducts} socialLinks={headerSocialLinks} />
        <main>{page}</main>
        <Footer content={footerContent} groups={footerLinkGroups} />
      </div>
    </CartProvider>
  )
}
