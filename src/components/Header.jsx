import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ChevronDown,
  Headset,
  Menu,
  Search,
  ShoppingBag,
  X,
} from 'lucide-react'
import { DesktopMegaMenu } from './DesktopMegaMenu'
import { MobileMenu } from './MobileMenu'
import { brand } from '../config/brand'
import { useCart } from '../hooks/useCart'
import { toCartRoute, toHomeSection } from '../utils/routes'

export function Header({ navLinks, products, socialLinks, overlay = false }) {
  const { itemCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeMenuLabel, setActiveMenuLabel] = useState(null)
  const [query, setQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [shouldFocusFirstMenuItem, setShouldFocusFirstMenuItem] = useState(false)
  const menuButtonRef = useRef(null)
  const desktopSearchButtonRef = useRef(null)
  const mobileSearchButtonRef = useRef(null)
  const lastSearchTriggerRef = useRef(null)
  const firstFocusableRef = useRef(null)
  const mobileMenuPanelRef = useRef(null)
  const searchInputRef = useRef(null)
  const wasMenuOpenRef = useRef(false)
  const desktopHeaderRef = useRef(null)
  const desktopFirstMenuLinkRef = useRef(null)
  const activeMenuTriggerRef = useRef(null)
  const closeTimerRef = useRef(null)

  const anyOverlayOpen = menuOpen
  const activeMenu = navLinks.find((link) => link.label === activeMenuLabel) ?? null

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const closeDesktopMenu = ({ restoreFocus = false } = {}) => {
    clearCloseTimer()
    setActiveMenuLabel(null)
    setShouldFocusFirstMenuItem(false)

    if (restoreFocus) {
      window.requestAnimationFrame(() => {
        activeMenuTriggerRef.current?.focus()
      })
    }
  }

  const openDesktopMenu = (label, { trigger = null, focusFirstItem = false } = {}) => {
    clearCloseTimer()
    setSearchOpen(false)

    if (trigger) {
      activeMenuTriggerRef.current = trigger
    }

    setActiveMenuLabel(label)
    setShouldFocusFirstMenuItem(focusFirstItem)
  }

  const scheduleDesktopMenuClose = () => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMenuLabel(null)
      setShouldFocusFirstMenuItem(false)
      closeTimerRef.current = null
    }, 160)
  }

  const cancelDesktopMenuClose = () => {
    clearCloseTimer()
  }

  const closeOverlays = () => {
    setMenuOpen(false)
    setSearchOpen(false)
    closeDesktopMenu()
  }

  const closeSearch = ({ restoreFocus = false } = {}) => {
    setSearchOpen(false)

    if (restoreFocus) {
      window.requestAnimationFrame(() => {
        lastSearchTriggerRef.current?.focus()
      })
    }
  }

  const openSearch = (triggerRef) => {
    lastSearchTriggerRef.current = triggerRef
    setMenuOpen(false)
    closeDesktopMenu()
    setSearchOpen(true)
  }

  const toggleSearch = (triggerRef) => {
    if (searchOpen) {
      closeSearch({ restoreFocus: true })
      return
    }

    openSearch(triggerRef)
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

    const selector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

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
    if (!activeMenuLabel || !shouldFocusFirstMenuItem) {
      return undefined
    }

    window.requestAnimationFrame(() => {
      desktopFirstMenuLinkRef.current?.focus()
      setShouldFocusFirstMenuItem(false)
    })

    return undefined
  }, [activeMenuLabel, shouldFocusFirstMenuItem])

  useEffect(() => {
    if (!activeMenuLabel) {
      return undefined
    }

    const onPointerDown = (event) => {
      if (!desktopHeaderRef.current?.contains(event.target)) {
        clearCloseTimer()
        setActiveMenuLabel(null)
        setShouldFocusFirstMenuItem(false)
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [activeMenuLabel])

  useEffect(() => {
    if (!searchOpen) {
      return undefined
    }

    const onPointerDown = (event) => {
      if (!desktopHeaderRef.current?.contains(event.target)) {
        closeSearch()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [searchOpen])

  useEffect(() => () => clearCloseTimer(), [])

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
      } else if (activeMenuLabel) {
        clearCloseTimer()
        setActiveMenuLabel(null)
        setShouldFocusFirstMenuItem(false)
        window.requestAnimationFrame(() => {
          activeMenuTriggerRef.current?.focus()
        })
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeMenuLabel, menuOpen, searchOpen])

  useEffect(() => {
    const onHashChange = () => {
      setMenuOpen(false)
      setSearchOpen(false)
      clearCloseTimer()
      setActiveMenuLabel(null)
      setShouldFocusFirstMenuItem(false)
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const filteredProducts = useMemo(() => {
    if (!query.trim()) {
      return []
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

  const handleSearchSubmit = (event) => {
    event.preventDefault()

    const normalizedQuery = query.trim()

    if (!normalizedQuery) {
      return
    }

    setQuery(normalizedQuery)
  }

  return (
    <>
      <header
        ref={desktopHeaderRef}
        className={[
          'site-header',
          overlay ? 'site-header--overlay' : 'site-header--standard',
          isScrolled ? 'is-scrolled' : '',
          activeMenuLabel ? 'site-header--menu-open' : '',
          searchOpen ? 'site-header--search-open' : '',
        ].join(' ').trim()}
        onMouseEnter={activeMenuLabel ? cancelDesktopMenuClose : undefined}
        onMouseLeave={activeMenuLabel ? scheduleDesktopMenuClose : undefined}
        onBlurCapture={
          activeMenuLabel
            ? (event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  closeDesktopMenu()
                }
              }
            : undefined
        }
      >
        <div className="site-header__desktop">
          <a className="site-header__brand" href="#home" aria-label={`${brand.name} home`}>
            {brandLabel}
          </a>

          <nav className="site-header__nav" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeMenuLabel === link.label

              return (
                <button
                  key={link.label}
                  type="button"
                  className={`site-header__nav-trigger ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={(event) =>
                    openDesktopMenu(link.label, { trigger: event.currentTarget })
                  }
                  onFocus={(event) =>
                    openDesktopMenu(link.label, { trigger: event.currentTarget })
                  }
                  onClick={(event) =>
                    openDesktopMenu(link.label, { trigger: event.currentTarget })
                  }
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowDown') {
                      event.preventDefault()
                      if (searchOpen) {
                        setSearchOpen(false)
                      }
                      openDesktopMenu(link.label, {
                        trigger: event.currentTarget,
                        focusFirstItem: true,
                      })
                    }
                  }}
                  aria-expanded={isActive}
                  aria-controls="desktop-mega-menu"
                >
                  <span>{link.label}</span>
                  <ChevronDown size={14} aria-hidden="true" />
                </button>
              )
            })}
          </nav>

          <div className="site-header__actions">
            <button
              ref={desktopSearchButtonRef}
              type="button"
              className="site-header__icon-button"
              aria-label={searchOpen ? 'Close search' : 'Open search'}
              aria-expanded={searchOpen}
              aria-controls="header-search-panel"
              onClick={() => toggleSearch(desktopSearchButtonRef.current)}
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

        {activeMenu ? (
          <DesktopMegaMenu
            id="desktop-mega-menu"
            menu={activeMenu}
            firstLinkRef={desktopFirstMenuLinkRef}
            onMouseEnter={cancelDesktopMenuClose}
            onMouseLeave={scheduleDesktopMenuClose}
            onClose={() => closeDesktopMenu()}
          />
        ) : null}

        {searchOpen ? (
          <div className="header-search" id="header-search-panel">
            <form className="header-search__form" onSubmit={handleSearchSubmit}>
              <label className="sr-only" htmlFor="header-search-input">
                Search Selah Starr Studio
              </label>
              <input
                ref={searchInputRef}
                id="header-search-input"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="What can we help you find?"
                className="header-search__input"
                autoComplete="off"
              />
              <button
                type="button"
                className="header-search__close"
                aria-label="Close search"
                onClick={() => closeSearch({ restoreFocus: true })}
              >
                <X aria-hidden="true" />
              </button>
            </form>

            {query.trim() ? (
              <div className="header-search__results">
                {filteredProducts.length ? (
                  filteredProducts.map((product) => (
                    <a
                      key={product.id}
                      href={product.href}
                      className="header-search__result"
                      onClick={() => closeSearch()}
                    >
                      <img src={product.images[0].src} alt={product.images[0].alt} />
                      <span>
                        <strong>{product.name}</strong>
                        <small>{product.priceLabel}</small>
                      </span>
                    </a>
                  ))
                ) : (
                  <p className="header-search__empty">No matching pieces yet. Try a broader keyword.</p>
                )}
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="site-header__mobile">
          <button
            ref={menuButtonRef}
            type="button"
            className="site-header__icon-button site-header__menu-button"
            onClick={() => {
              setSearchOpen(false)
              closeDesktopMenu()
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
              aria-label={searchOpen ? 'Close search' : 'Open search'}
              aria-expanded={searchOpen}
              aria-controls="header-search-panel"
              onClick={() => toggleSearch(mobileSearchButtonRef.current)}
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

      {menuOpen ? (
        <MobileMenu
          open={menuOpen}
          navLinks={navLinks}
          socialLinks={socialLinks}
          onClose={closeOverlays}
          firstFocusableRef={firstFocusableRef}
          panelRef={mobileMenuPanelRef}
        />
      ) : null}

    </>
  )
}
