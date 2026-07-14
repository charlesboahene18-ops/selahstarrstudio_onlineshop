import { useState } from 'react'
import { Instagram } from 'lucide-react'
import { BrandMark } from './BrandMark'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const socialIcons = {
  instagram: Instagram,
}

const initialCustomRequest = {
  name: '',
  contact: '',
  details: '',
}

export function Footer({ content, groups }) {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterFeedback, setNewsletterFeedback] = useState('')
  const [customRequest, setCustomRequest] = useState(initialCustomRequest)
  const [customFeedback, setCustomFeedback] = useState('')

  const onNewsletterSubmit = (event) => {
    event.preventDefault()
    if (!emailPattern.test(newsletterEmail.trim())) {
      setNewsletterFeedback(content.newsletter.invalidMessage)
      return
    }

    setNewsletterFeedback(content.newsletter.successMessage)
    setNewsletterEmail('')
  }

  const onCustomSubmit = (event) => {
    event.preventDefault()
    if (!customRequest.contact.trim() || !customRequest.details.trim()) {
      setCustomFeedback(content.customOrder.validationMessage)
      return
    }

    setCustomFeedback(content.customOrder.successMessage)
    setCustomRequest(initialCustomRequest)
  }

  return (
    <footer className="site-footer section" id="contact">
      <div className="site-footer__brand">
        <BrandMark />
        <p>{content.description}</p>
        <a
          className="site-footer__instagram-link"
          href={content.contactHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.contactCta}
        </a>
        <div className="site-footer__social">
          {content.socialLinks.map(({ icon, label, href, external }) => {
            const Icon = socialIcons[icon]
            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>

      <div className="site-footer__links">
        {groups.map((group) => (
          <section key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="site-footer__newsletter">
        <section className="site-footer__panel" id="custom-order-form">
          <h2>{content.customOrder.title}</h2>
          <p>{content.customOrder.description}</p>
          <form className="site-footer__stacked-form" onSubmit={onCustomSubmit}>
            <label htmlFor="custom-order-name" className="sr-only">
              {content.customOrder.fields.name}
            </label>
            <input
              id="custom-order-name"
              type="text"
              value={customRequest.name}
              onChange={(event) => {
                setCustomRequest((current) => ({ ...current, name: event.target.value }))
                if (customFeedback) {
                  setCustomFeedback('')
                }
              }}
              placeholder={content.customOrder.fields.name}
            />

            <label htmlFor="custom-order-contact" className="sr-only">
              {content.customOrder.fields.contact}
            </label>
            <input
              id="custom-order-contact"
              type="text"
              value={customRequest.contact}
              onChange={(event) => {
                setCustomRequest((current) => ({ ...current, contact: event.target.value }))
                if (customFeedback) {
                  setCustomFeedback('')
                }
              }}
              placeholder={content.customOrder.fields.contact}
            />

            <label htmlFor="custom-order-details" className="sr-only">
              {content.customOrder.fields.details}
            </label>
            <textarea
              id="custom-order-details"
              value={customRequest.details}
              onChange={(event) => {
                setCustomRequest((current) => ({ ...current, details: event.target.value }))
                if (customFeedback) {
                  setCustomFeedback('')
                }
              }}
              placeholder={content.customOrder.fields.details}
              rows="4"
            />

            <button type="submit">{content.customOrder.buttonLabel}</button>
          </form>
          <p className="site-footer__feedback">
            {customFeedback || content.customOrder.idleMessage}
          </p>
        </section>

        <section className="site-footer__panel">
          <h2>{content.newsletter.title}</h2>
          <p>{content.newsletter.description}</p>
          <form onSubmit={onNewsletterSubmit}>
            <label htmlFor="footer-newsletter" className="sr-only">
              {content.newsletter.inputLabel}
            </label>
            <input
              id="footer-newsletter"
              type="email"
              value={newsletterEmail}
              onChange={(event) => {
                setNewsletterEmail(event.target.value)
                if (newsletterFeedback) {
                  setNewsletterFeedback('')
                }
              }}
              placeholder={content.newsletter.placeholder}
            />
            <button type="submit">{content.newsletter.buttonLabel}</button>
          </form>
          <p className="site-footer__feedback">
            {newsletterFeedback || content.newsletter.idleMessage}
          </p>
        </section>

        <small>{content.copyright}</small>
      </div>
    </footer>
  )
}
