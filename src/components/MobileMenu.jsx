import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { Button } from './Button'
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'
import { SocialLinks } from './SocialLinks'
import { toCartRoute } from '../utils/routes'

export function MobileMenu({ open, navLinks, socialLinks, onClose, firstFocusableRef, panelRef }) {
  const [activePanelLabel, setActivePanelLabel] = useState(null)
  const activePanel = navLinks.find((link) => link.label === activePanelLabel) ?? null

  useEffect(() => {
    if (!open) {
      setActivePanelLabel(null)
    }
  }, [open])

  return (
    <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <nav
        ref={panelRef}
        className="mobile-menu__panel"
        id="mobile-menu"
        aria-label="Mobile"
        aria-modal="true"
        role="dialog"
      >
        <div className="mobile-menu__header">
          <a href="#home" aria-label="Selah Starr Studio home" onClick={onClose}>
            <BrandMark compact />
          </a>
          <button
            ref={firstFocusableRef}
            type="button"
            className="mobile-menu__close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mobile-menu__viewport">
          <div className={`mobile-menu__views ${activePanel ? 'is-secondary-active' : ''}`}>
            <div
              className="mobile-menu__view mobile-menu__view--primary"
              aria-hidden={Boolean(activePanel)}
              inert={activePanel ? '' : undefined}
            >
              <div className="mobile-menu__links">
                {navLinks.map((link) => {
                  const hasColumns = Array.isArray(link.columns) && link.columns.length > 0

                  if (!hasColumns) {
                    return (
                      <a key={link.href} href={link.href} onClick={onClose}>
                        {link.label}
                      </a>
                    )
                  }

                  return (
                    <button
                      key={link.label}
                      type="button"
                      className="mobile-menu__primary-link"
                      onClick={() => setActivePanelLabel(link.label)}
                      aria-label={`Open ${link.label} menu`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight size={18} aria-hidden="true" />
                    </button>
                  )
                })}
              </div>

              <a href={toCartRoute()} onClick={onClose}>
                Saved cart
              </a>
              <SocialLinks
                links={socialLinks}
                className="mobile-menu__social"
                ariaLabel="Mobile social links"
              />
              <Button
                as="a"
                href={buildWhatsAppUrl(whatsappMessages.customOrder)}
                target="_blank"
                rel="noopener noreferrer"
                className="button--small button--stacked button--whatsapp"
                onClick={onClose}
              >
                Start a custom order on WhatsApp
              </Button>
            </div>

            <div
              className="mobile-menu__view mobile-menu__view--secondary"
              aria-hidden={!activePanel}
              inert={activePanel ? undefined : ''}
            >
              {activePanel ? (
                <>
                  <button
                    type="button"
                    className="mobile-menu__back"
                    onClick={() => setActivePanelLabel(null)}
                  >
                    <ChevronLeft size={18} aria-hidden="true" />
                    <span>Back</span>
                  </button>

                  <div className="mobile-menu__secondary-header">
                    <span>{activePanel.label}</span>
                    <a href={activePanel.href} onClick={onClose}>
                      View all
                    </a>
                  </div>

                  <div className="mobile-menu__secondary-groups">
                    {activePanel.columns.map((column) => (
                      <section key={`${activePanel.label}-${column.title}`} className="mobile-menu__secondary-group">
                        <header>{column.title}</header>
                        <div className="mobile-menu__secondary-links">
                          {column.links.map((item) => (
                            <a key={item.href} href={item.href} onClick={onClose}>
                              <strong>{item.label}</strong>
                              {item.description ? <span>{item.description}</span> : null}
                            </a>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
