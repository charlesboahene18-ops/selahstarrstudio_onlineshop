import { useState } from 'react'
import { BrandMark } from './BrandMark'
import { SocialLinks } from './SocialLinks'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Footer({ content, groups }) {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterFeedback, setNewsletterFeedback] = useState('')

  const onNewsletterSubmit = (event) => {
    event.preventDefault()
    if (!emailPattern.test(newsletterEmail.trim())) {
      setNewsletterFeedback(content.newsletter.invalidMessage)
      return
    }

    setNewsletterFeedback(content.newsletter.successMessage)
    setNewsletterEmail('')
  }

  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__section">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <BrandMark inverted />
            <p>{content.description}</p>
            <form className="site-footer__signup" onSubmit={onNewsletterSubmit}>
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
              <button type="submit" className="site-footer__cta">
                {content.newsletter.buttonLabel}
              </button>
            </form>
            <p className="site-footer__feedback">
              {newsletterFeedback || content.newsletter.idleMessage}
            </p>
            <SocialLinks links={content.socialLinks} className="site-footer__social" iconSize={18} />
          </div>

          {groups.map((group) => (
            <section key={group.title} className="site-footer__column">
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
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__bottom-text">
          <small>{content.copyright}</small>
          <small>{content.originNote}</small>
        </div>
      </div>
    </footer>
  )
}
