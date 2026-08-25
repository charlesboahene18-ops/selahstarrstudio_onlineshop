import { Button } from './Button'
import { RevealOnScroll } from './RevealOnScroll'

export function LaunchHero({ content }) {
  return (
    <section className="launch-hero section" id="launch">
      <div className="launch-hero__grid">
        <RevealOnScroll className="launch-hero__copy">
          <span className="section-heading__eyebrow">{content.eyebrow}</span>
          <h2>
            <span>{content.title}</span>
            <em>{content.accent}</em>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll className="launch-hero__visual" delay={120}>
          <div className="launch-hero__stack">
            {content.images.map((image, index) => (
              <figure key={image.alt} className={`launch-hero__card launch-hero__card--${index + 1}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  style={{ objectPosition: image.objectPosition || 'center' }}
                />
              </figure>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="launch-hero__details" delay={60}>
          <p>{content.description}</p>
          <Button
            as="a"
            href={content.href}
            target={content.external ? '_blank' : undefined}
            rel={content.external ? 'noopener noreferrer' : undefined}
            className={content.external ? 'button--whatsapp' : ''}
          >
            {content.cta}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  )
}
