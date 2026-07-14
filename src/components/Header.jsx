import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Instagram,
  Menu,
  Search,
  ShoppingBag,
  X,
} from 'lucide-react'
import { BrandMark } from './BrandMark'
import { Button } from './Button'
import { MobileMenu } from './MobileMenu'
import { brand } from '../config/brand'

const socialIcons = {
  instagram: Instagram,
}

export function Header({ navLinks, products, socialLinks }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef(null)
  const searchButtonRef = useRef(null)
  const cartButtonRef = useRef(null)
  const firstLinkRef = useRef(null)
  const searchInputRef = useRef(null)

  const anyOverlayOpen = menuOpen || searchOpen || cartOpen

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!anyOverlayOpen) {
      document.body.style.overflow = ''
      return undefined
    }

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [anyOverlayOpen])

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }

    firstLinkRef.current?.focus()
    return undefined
  }, [menuOpen])

  useEffect(() => {
    if (!searchOpen) {
      return undefined
    }

    searchInputRef.current?.focus()
    return undefined
  }, [searchOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') {
        return
      }

      if (searchOpen) {
        setSearchOpen(false)
        searchButtonRef.current?.focus()
      } else if (cartOpen) {
        setCartOpen(false)
        cartButtonRef.current?.focus()
      } else if (menuOpen) {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [cartOpen, menuOpen, searchOpen])

  const filteredProducts = useMemo(() => {
    if (!query.trim()) {
      return products.slice(0, 4)
    }

    return products.filter((product) =>
      `${product.name} ${product.category} ${product.shortDescription}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
    )
  }, [products, query])

  const openSearch = () => {
    setCartOpen(false)
    setMenuOpen(false)
    setSearchOpen(true)
  }

  const openCart = () => {
    setSearchOpen(false)
    setMenuOpen(false)
    setCartOpen(true)
  }

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="site-header__bar">
          <button
            ref={menuButtonRef}
            type="button"
            className="site-header__menu-button"
            onClick={() => {
              setSearchOpen(false)
              setCartOpen(false)
              setMenuOpen((current) => !current)
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="site-header__social" aria-label="Social links">
            {socialLinks.map(({ icon, label, href, external }) => {
              const Icon = socialIcons[icon]
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </a>
              )
            })}
          </div>

          <a className="site-header__brand" href="#home" aria-label={`${brand.name} home`}>
            <BrandMark compact />
          </a>

          <nav className="site-header__nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <button
              ref={searchButtonRef}
              type="button"
              aria-label="Open search"
              onClick={openSearch}
            >
              <Search size={18} strokeWidth={1.9} />
            </button>
            <button
              ref={cartButtonRef}
              type="button"
              aria-label="Open cart preview"
              onClick={openCart}
            >
              <ShoppingBag size={18} strokeWidth={1.9} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        navLinks={navLinks}
        onClose={() => setMenuOpen(false)}
        firstLinkRef={firstLinkRef}
      />

      <div className={`utility-overlay ${searchOpen || cartOpen ? 'is-visible' : ''}`} aria-hidden={!searchOpen && !cartOpen}>
        <div className="utility-overlay__backdrop" onClick={() => { setSearchOpen(false); setCartOpen(false) }} />

        {searchOpen ? (
          <section className="utility-panel utility-panel--search" role="dialog" aria-modal="true" aria-label="Search products">
            <div className="utility-panel__header">
              <h2>Search the collection</h2>
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">
                <X size={18} />
              </button>
            </div>
            <label className="sr-only" htmlFor="site-search">
              Search products
            </label>
            <input
              id="site-search"
              ref={searchInputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search handmade pieces"
            />
            <div className="utility-panel__results">
              {filteredProducts.length ? (
                filteredProducts.map((product) => (
                  <a key={product.id} href={product.href} onClick={() => setSearchOpen(false)}>
                    <img src={product.images[0].src} alt={product.images[0].alt} />
                    <span>
                      <strong>{product.name}</strong>
                      <small>{product.priceLabel}</small>
                    </span>
                  </a>
                ))
              ) : (
                <p className="utility-panel__empty">No matching pieces yet. Try a broader keyword.</p>
              )}
            </div>
          </section>
        ) : null}

        {cartOpen ? (
          <section className="utility-panel utility-panel--cart" role="dialog" aria-modal="true" aria-label="Cart preview">
            <div className="utility-panel__header">
              <h2>Your saved cart</h2>
              <button type="button" onClick={() => setCartOpen(false)} aria-label="Close cart">
                <X size={18} />
              </button>
            </div>
            <p className="utility-panel__empty">
              Your saved cart is empty in this demo build. Explore the editable Selah Starr Studio mock collection below.
            </p>
            <Button as="a" href="#bestsellers" onClick={() => setCartOpen(false)}>
              Explore featured pieces
            </Button>
          </section>
        ) : null}
      </div>
    </>
  )
}
