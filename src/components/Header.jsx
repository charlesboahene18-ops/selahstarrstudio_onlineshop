import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Menu,
  Search,
  ShoppingBag,
  X,
  Headset,
} from 'lucide-react'
import { MobileMenu } from './MobileMenu'
import { NavigationDropdown } from './NavigationDropdown'
import { brand } from '../config/brand'
import { useCart } from '../hooks/useCart'
import { toCartRoute, toHomeSection } from '../utils/routes'

export function Header({ navLinks, products, socialLinks, overlay = false }) {
  const { itemCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [openDropdownLabel, setOpenDropdownLabel] = useState(null)
  const [query, setQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef(null)
  const desktopSearchButtonRef = useRef(null)
  const mobileSearchButtonRef = useRef(null)
  const lastSearchTriggerRef = useRef(null)
  const firstFocusableRef = useRef(null)
  const mobileMenuPanelRef = useRef(null)
  const searchInputRef = useRef(null)
  const wasMenuOpenRef = useRef(false)

  const anyOverlayOpen = menuOpen || searchOpen

  const closeOverlays = () => {
    setMenuOpen(false)
    setSearchOpen(false)
    setOpenDropdownLabel(null)
  }

  const closeSearch = ({ restoreFocus = false } = {}) => {
    setSearchOpen(false)

    if (restoreFocus) {
      window.requestAnimationFrame(() => {
        lastSearchTriggerRef.current?.focus()
      })
    }
  }

  useEffect(() => {
    const threshold = overlay ? 36 : 12
    const onScroll = () => setIsScrolled(window.scrollY > threshold)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [overlay])

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
    if (menuOpen) {
      wasMenuOpenRef.current = true
      firstFocusableRef.current?.focus()
      return undefined
    }

    if (wasMenuOpenRef.current) {
      menuButtonRef.current?.focus()
      wasMenuOpenRef.current = false
    }

    return undefined
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }

    const panel = mobileMenuPanelRef.current
    if (!panel) {
      return undefined
    }

    const selector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    const onKeyDown = (event) => {
      if (event.key !== 'Tab') {
        return
      }

      const focusableElements = [...panel.querySelectorAll(selector)]

      if (!focusableElements.length) {
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    panel.addEventListener('keydown', onKeyDown)
    return () => panel.removeEventListener('keydown', onKeyDown)
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
        closeSearch({ restoreFocus: true })
      } else if (menuOpen) {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      } else if (openDropdownLabel) {
        setOpenDropdownLabel(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, openDropdownLabel, searchOpen])

  useEffect(() => {
    const onHashChange = () => {
      setMenuOpen(false)
      setSearchOpen(false)
      setOpenDropdownLabel(null)
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
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

  const brandLabel = brand.shortName.toUpperCase()
  const cartLabel = itemCount
    ? `View shopping bag with ${itemCount} items`
    : 'View shopping bag'

  return (
    <>
      <header
        className={[
          'site-header',
          overlay ? 'site-header--overlay' : 'site-header--standard',
          isScrolled ? 'is-scrolled' : '',
        ].join(' ').trim()}
      >
        <div className="site-header__desktop">
          <a className="site-header__brand" href="#home" aria-label={`${brand.name} home`}>
            {brandLabel}
          </a>

          <nav className="site-header__nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavigationDropdown
                key={link.label}
                link={link}
                isOpen={openDropdownLabel === link.label}
                onOpen={() => setOpenDropdownLabel(link.label)}
                onClose={() => {
                  setOpenDropdownLabel((current) => (current === link.label ? null : current))
                }}
              />
            ))}
          </nav>

          <div className="site-header__actions">
            <button
              ref={desktopSearchButtonRef}
              type="button"
              className="site-header__icon-button"
              aria-label="Search"
              onClick={() => {
                lastSearchTriggerRef.current = desktopSearchButtonRef.current
                setMenuOpen(false)
                setOpenDropdownLabel(null)
                setSearchOpen(true)
              }}
            >
              <Search size={19} strokeWidth={1.35} />
            </button>

            <a
              className="site-header__action-link site-header__action-link--support"
              href={toHomeSection('contact')}
              aria-label="Contact Selah Starr Studio support"
              title="Support"
            >
              <Headset size={19} strokeWidth={1.35} />
            </a>

            <a
              className="site-header__action-link site-header__action-link--cart"
              href={toCartRoute()}
              aria-label={cartLabel}
              title="Shopping bag"
            >
              <ShoppingBag size={19} strokeWidth={1.35} />
              {itemCount > 0 ? <span className="site-header__cart-count">{itemCount}</span> : null}
            </a>
          </div>
        </div>

        <div className="site-header__mobile">
          <button
            ref={menuButtonRef}
            type="button"
            className="site-header__icon-button site-header__menu-button"
            onClick={() => {
              setSearchOpen(false)
              setOpenDropdownLabel(null)
              setMenuOpen((current) => !current)
            }}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} strokeWidth={1.4} /> : <Menu size={20} strokeWidth={1.4} />}
          </button>

          <a className="site-header__mobile-brand" href="#home" aria-label={`${brand.name} home`}>
            {brandLabel}
          </a>

          <div className="site-header__mobile-actions">
            <button
              ref={mobileSearchButtonRef}
              type="button"
              className="site-header__icon-button"
              aria-label="Search"
              onClick={() => {
                lastSearchTriggerRef.current = mobileSearchButtonRef.current
                setMenuOpen(false)
                setOpenDropdownLabel(null)
                setSearchOpen(true)
              }}
            >
              <Search size={19} strokeWidth={1.35} />
            </button>

            <a
              className="site-header__action-link site-header__action-link--cart"
              href={toCartRoute()}
              aria-label={cartLabel}
              title="Shopping bag"
            >
              <ShoppingBag size={19} strokeWidth={1.35} />
              {itemCount > 0 ? <span className="site-header__cart-count">{itemCount}</span> : null}
            </a>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        navLinks={navLinks}
        socialLinks={socialLinks}
        onClose={closeOverlays}
        firstFocusableRef={firstFocusableRef}
        panelRef={mobileMenuPanelRef}
      />

        <div className={`utility-overlay ${searchOpen ? 'is-visible' : ''}`} aria-hidden={!searchOpen}>
        <div className="utility-overlay__backdrop" onClick={() => closeSearch()} />

        {searchOpen ? (
          <section className="utility-panel utility-panel--search" role="dialog" aria-modal="true" aria-label="Search products">
            <div className="utility-panel__header">
              <h2>Search the collection</h2>
              <button type="button" onClick={() => closeSearch({ restoreFocus: true })} aria-label="Close search">
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
                  <a key={product.id} href={product.href} onClick={() => closeSearch()}>
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
      </div>
    </>
  )
}
