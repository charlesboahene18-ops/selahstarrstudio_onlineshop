import { ArrowUpRight, Instagram } from 'lucide-react'
import { RevealOnScroll } from './RevealOnScroll'
import { SocialLinks } from './SocialLinks'

export function SocialCollage({ content }) {
  return (
    <section className="social-collage section" id="social">
      <RevealOnScroll className="social-collage__panel">
        <div className="social-collage__heading">
          <Instagram size={64} strokeWidth={1.4} />
          <div>
            <span className="section-heading__eyebrow">{content.eyebrow}</span>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <SocialLinks
              links={content.socialLinks}
              className="social-collage__social"
              ariaLabel="Follow and contact Selah Starr Studio"
            />
          </div>
        </div>
        <div className="social-collage__grid">
          {content.images.map((image) => (
            <a
              key={image.alt}
              href={content.ctaHref}
              className="social-collage__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span>
                View post <ArrowUpRight size={16} />
              </span>
            </a>
          ))}
        </div>
        <a
          className="social-collage__cta"
          href={content.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.ctaLabel}
        </a>
      </RevealOnScroll>
    </section>
  )
}
