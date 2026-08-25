import { useEffect, useState } from 'react'
import { Instagram, Mail, MessageCircle, X } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { brand } from '../config/brand'
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'
import { toHomeSection } from '../utils/routes'

export function FloatingContactWidget() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const close = () => setOpen(false)

  return (
    <div className={`contact-widget ${open ? 'is-open' : ''}`}>
      <div
        className="contact-widget__panel"
        role="dialog"
        aria-label={`Contact ${brand.name}`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <button
          type="button"
          className="contact-widget__close"
          onClick={close}
          aria-label="Close contact options"
        >
          <X size={16} aria-hidden="true" />
        </button>

        <p className="contact-widget__title">Need help finding a piece? We&rsquo;re here for you.</p>

        <div className="contact-widget__links">
          <a
            className="contact-widget__link"
            href={buildWhatsAppUrl(whatsappMessages.generalEnquiry)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            <WhatsAppIcon size={18} />
            <span>WhatsApp</span>
          </a>
          <a
            className="contact-widget__link"
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            <Instagram size={18} aria-hidden="true" />
            <span>Instagram</span>
          </a>
          <a className="contact-widget__link" href={toHomeSection('contact')} onClick={close}>
            <Mail size={18} aria-hidden="true" />
            <span>Contact Details</span>
          </a>
        </div>
      </div>

      <button
        type="button"
        className="contact-widget__toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
      >
        {open ? <X size={24} aria-hidden="true" /> : <MessageCircle size={24} aria-hidden="true" />}
      </button>
    </div>
  )
}
