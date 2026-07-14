import { Button } from './Button'

export function MobileMenu({ open, navLinks, onClose, firstLinkRef }) {
  return (
    <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <nav className="mobile-menu__panel" aria-label="Mobile">
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
        <Button as="a" href="#custom-order-form" className="button--small" onClick={onClose}>
          Start a custom order
        </Button>
      </nav>
    </div>
  )
}
