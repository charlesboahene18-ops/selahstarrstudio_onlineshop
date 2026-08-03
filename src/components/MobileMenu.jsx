import { MobileMenuSection } from './MobileMenuSection'

function MobileMenuGroup({ title, links, onNavigate }) {
  return (
    <section className="mobile-menu-group">
      <h3 className="mobile-menu-group__title">{title}</h3>
      <div>
        {links.map((item) => (
          <a key={item.href} href={item.href} className="mobile-menu-link" onClick={onNavigate}>
            {item.label}
            {item.description ? (
              <span className="mobile-menu-link__description">{item.description}</span>
            ) : null}
          </a>
        ))}
      </div>
    </section>
  )
}

function MobileMenuContent({ menu, onNavigate, showViewAll = false }) {
  if (!menu) {
    return null
  }

  return (
    <>
      {showViewAll ? (
        <a href={menu.href} className="mobile-menu-link mobile-menu-link--all" onClick={onNavigate}>
          View all {menu.label}
        </a>
      ) : null}

      {menu.columns.map((column) => (
        <MobileMenuGroup
          key={`${menu.label}-${column.title}`}
          title={column.title}
          links={column.links}
          onNavigate={onNavigate}
        />
      ))}
    </>
  )
}

export function MobileMenu({
  open,
  navLinks,
  onClose,
  onSectionToggle,
  activeSection,
  firstFocusableRef,
  panelRef,
  topOffset,
}) {
  const shopMenu = navLinks.find((link) => link.label === 'Shop') ?? null
  const collectionsMenu = navLinks.find((link) => link.label === 'Collections') ?? null
  const aboutMenu = navLinks.find((link) => link.label === 'About') ?? null

  return (
    <div
      className={`mobile-menu ${open ? 'is-open' : ''}`}
      aria-hidden={!open}
      style={{ '--mobile-menu-offset': `${topOffset}px` }}
    >
      <div className="mobile-menu__overlay" onClick={onClose} aria-hidden="true" />

      <div
        ref={panelRef}
        className="mobile-menu__panel"
        aria-label="Navigation menu"
        aria-modal="true"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        role="dialog"
      >
        <nav
          id="mobile-navigation"
          className={`mobile-navigation ${open ? 'mobile-navigation--open' : ''}`}
          aria-label="Mobile navigation"
        >
          <div className="mobile-menu__links">
            <MobileMenuSection
              id="mobile-shop-menu"
              label="SHOP"
              isOpen={activeSection === 'shop'}
              onToggle={() => onSectionToggle('shop')}
              buttonRef={firstFocusableRef}
            >
              <MobileMenuContent menu={shopMenu} onNavigate={onClose} showViewAll />
            </MobileMenuSection>

            <MobileMenuSection
              id="mobile-collections-menu"
              label="COLLECTIONS"
              isOpen={activeSection === 'collections'}
              onToggle={() => onSectionToggle('collections')}
            >
              <MobileMenuContent menu={collectionsMenu} onNavigate={onClose} />
            </MobileMenuSection>

            <MobileMenuSection
              id="mobile-about-menu"
              label="ABOUT"
              isOpen={activeSection === 'about'}
              onToggle={() => onSectionToggle('about')}
            >
              <MobileMenuContent menu={aboutMenu} onNavigate={onClose} />
            </MobileMenuSection>
          </div>
        </nav>
      </div>
    </div>
  )
}
