import { Button } from './Button'
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'
import { SocialLinks } from './SocialLinks'

export function MobileMenu({ open, navLinks, socialLinks, onClose, firstLinkRef }) {
  return (
    <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <nav className="mobile-menu__panel" id="mobile-menu" aria-label="Mobile">
        {navLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            ref={index === 0 ? firstLinkRef : undefined}
            onClick={onClose}
          >
            {link.label}
          </a>
        ))}
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
