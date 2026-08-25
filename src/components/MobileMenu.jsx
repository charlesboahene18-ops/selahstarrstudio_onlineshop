import { useEffect, useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Instagram } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { brand } from '../config/brand'
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'

const TOP_SECTIONS = [
  { key: 'shop', label: 'Shop' },
  { key: 'collections', label: 'Collections' },
  { key: 'about', label: 'About' },
]

function MobileMenuGroup({ title, links, onNavigate }) {
  return (
    <section className="mobile-menu-group">
      <h3 className="mobile-menu-group__title">{title}</h3>
      <div>
        {links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className="mobile-menu-link"
            onClick={onNavigate}
          >
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

function MobileMenuDetail({ menu, showViewAll, onNavigate }) {
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
  const [helperOpen, setHelperOpen] = useState(false)
  const activeMenu = navLinks.find((link) => link.label.toLowerCase() === activeSection) ?? null

  useEffect(() => {
    if (!open) {
      setHelperOpen(false)
    }
  }, [open])

  const goBack = () => {
    if (activeSection) {
      onSectionToggle(activeSection)
    }
  }

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
          <div className="mobile-menu__screen">
            <div
              className={[
                'mobile-menu__level',
                'mobile-menu__level--top',
                activeSection ? 'is-hidden' : '',
              ].join(' ').trim()}
              aria-hidden={!!activeSection}
              inert={activeSection ? true : undefined}
            >
              <div className="mobile-menu__links">
                {TOP_SECTIONS.map((section, index) => (
                  <button
                    key={section.key}
                    ref={index === 0 ? firstFocusableRef : undefined}
                    type="button"
                    className="mobile-menu-toplink"
                    onClick={() => onSectionToggle(section.key)}
                  >
                    <span>{section.label}</span>
                    <ChevronRight size={18} aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>

            <div
              className={[
                'mobile-menu__level',
                'mobile-menu__level--detail',
                activeSection ? 'is-visible' : '',
              ].join(' ').trim()}
              aria-hidden={!activeSection}
              inert={!activeSection ? true : undefined}
            >
              <button type="button" className="mobile-menu-back" onClick={goBack}>
                <ChevronLeft size={18} aria-hidden="true" />
                <span>Back</span>
              </button>

              <div className="mobile-menu__links">
                <MobileMenuDetail
                  menu={activeMenu}
                  showViewAll={activeSection === 'shop'}
                  onNavigate={onClose}
                />
              </div>
            </div>
          </div>
        </nav>

        <div className="mobile-menu__footer">
          <button
            type="button"
            className="mobile-menu__footer-toggle"
            onClick={() => setHelperOpen((value) => !value)}
            aria-expanded={helperOpen}
            aria-controls="mobile-menu-footer-panel"
          >
            <span>Need help finding a piece?</span>
            <ChevronDown
              size={18}
              aria-hidden="true"
              className={[
                'mobile-menu__footer-chevron',
                helperOpen ? 'mobile-menu__footer-chevron--open' : '',
              ].join(' ').trim()}
            />
          </button>

          <div
            id="mobile-menu-footer-panel"
            className={[
              'mobile-menu__footer-panel',
              helperOpen ? 'mobile-menu__footer-panel--open' : '',
            ].join(' ').trim()}
            aria-hidden={!helperOpen}
            inert={!helperOpen ? true : undefined}
          >
            <div className="mobile-menu__footer-panel-inner">
              <a
                className="mobile-menu__footer-link"
                href={buildWhatsAppUrl(whatsappMessages.generalEnquiry)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
              >
                <WhatsAppIcon size={18} />
                <span>Enquire on WhatsApp</span>
              </a>
              <a
                className="mobile-menu__footer-link"
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
              >
                <Instagram size={18} aria-hidden="true" />
                <span>Message us on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
