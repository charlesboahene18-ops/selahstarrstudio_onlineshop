import { useEffect, useState } from 'react'
import { Minus, Plus, X } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { Button } from './Button'
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'
import { SocialLinks } from './SocialLinks'
import { toCartRoute } from '../utils/routes'

export function MobileMenu({ open, navLinks, socialLinks, onClose, firstFocusableRef, panelRef }) {
  const [openSections, setOpenSections] = useState({})

  useEffect(() => {
    if (!open) {
      setOpenSections({})
    }
  }, [open])

  const toggleSection = (label) => {
    setOpenSections((current) => ({
      ...current,
      [label]: !current[label],
    }))
  }

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

        <div className="mobile-menu__links">
          {navLinks.map((link) => {
            const hasItems = Array.isArray(link.items) && link.items.length > 0
            const isExpanded = Boolean(openSections[link.label])
            const sectionId = `mobile-group-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

            if (!hasItems) {
              return (
                <a key={link.href} href={link.href} onClick={onClose}>
                  {link.label}
                </a>
              )
            }

            return (
              <div key={link.label} className="mobile-menu__group">
                <div className="mobile-menu__group-header">
                  <a href={link.href} onClick={onClose}>
                    {link.label}
                  </a>
                  <button
                    type="button"
                    className="mobile-menu__toggle"
                    onClick={() => toggleSection(link.label)}
                    aria-expanded={isExpanded}
                    aria-controls={sectionId}
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${link.label}`}
                  >
                    {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                  </button>
                </div>

                {isExpanded ? (
                  <div id={sectionId} className="mobile-menu__submenu is-open">
                    {link.items.map((item) => (
                      <a key={item.href} href={item.href} onClick={onClose}>
                        <strong>{item.label}</strong>
                        {item.description ? <span>{item.description}</span> : null}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
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
      </nav>
    </div>
  )
}
