import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react'
import { BrandMark } from './BrandMark'
import { Button } from './Button'
import { MobileMenu } from './MobileMenu'
import { SocialLinks } from './SocialLinks'
import { brand } from '../config/brand'
import { useCart } from '../hooks/useCart'
import { toCartRoute } from '../utils/routes'

export function Header({ navLinks, products, socialLinks }) {
  const {
    cartItems,
    itemCount,
    checkoutHref,
    removeItem,
    updateQuantity,
  } = useCart()
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
  const closeOverlays = () => {
    setMenuOpen(false)
    setSearchOpen(false)
    setCartOpen(false)
  }

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

  useEffect(() => {
    window.addEventListener('hashchange', closeOverlays)
    return () => window.removeEventListener('hashchange', closeOverlays)
  }, [])

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
    closeOverlays()
    setSearchOpen(true)
  }

  const openCart = () => {
    closeOverlays()
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

          <SocialLinks links={socialLinks} className="site-header__social" />

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
              className="site-header__cart-button"
            >
              <ShoppingBag size={18} strokeWidth={1.9} />
              {itemCount ? <span className="site-header__cart-count">{itemCount}</span> : null}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        navLinks={navLinks}
        socialLinks={socialLinks}
        onClose={() => setMenuOpen(false)}
        firstLinkRef={firstLinkRef}
      />

      <div className={`utility-overlay ${searchOpen || cartOpen ? 'is-visible' : ''}`} aria-hidden={!searchOpen && !cartOpen}>
        <div className="utility-overlay__backdrop" onClick={closeOverlays} />

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
            {cartItems.length ? (
              <>
                <div className="utility-panel__cart-list">
                  {cartItems.map(({ product, quantity }) => (
                    <article key={product.id} className="utility-panel__cart-item">
                      <a href={product.href} onClick={() => setCartOpen(false)}>
                        <img src={product.images[0].src} alt={product.images[0].alt} />
                      </a>
                      <div className="utility-panel__cart-copy">
                        <a href={product.href} onClick={() => setCartOpen(false)}>
                          <strong>{product.name}</strong>
                        </a>
                        <small>{product.priceLabel}</small>
                        <div className="utility-panel__cart-controls">
                          <button
                            type="button"
                            aria-label={`Decrease quantity for ${product.name}`}
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span>{quantity}</span>
                          <button
                            type="button"
                            aria-label={`Increase quantity for ${product.name}`}
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            type="button"
                            aria-label={`Remove ${product.name} from cart`}
                            onClick={() => removeItem(product.id)}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="utility-panel__cart-actions">
                  <Button as="a" href={toCartRoute()} onClick={() => setCartOpen(false)}>
                    View full cart
                  </Button>
                  <Button
                    as="a"
                    href={checkoutHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button--ghost button--whatsapp"
                    onClick={closeOverlays}
                  >
                    Send cart on WhatsApp
                  </Button>
                </div>
              </>
            ) : (
              <>
                <p className="utility-panel__empty">
                  Your saved cart is empty. Add pieces from the collection to build a shortlist before you enquire.
                </p>
                <Button as="a" href="#/products" onClick={() => setCartOpen(false)}>
                  Explore all pieces
                </Button>
              </>
            )}
          </section>
        ) : null}
      </div>
    </>
  )
}
