import { Button } from './Button'
import { RevealOnScroll } from './RevealOnScroll'

export function GiftBanner({ content }) {
  return (
    <section className="gift-banner section" id="gifts">
      <div className="gift-banner__media" style={{ backgroundImage: `url(${content.background})` }}>
        <RevealOnScroll className="gift-banner__content">
          <span className="section-heading__eyebrow">{content.eyebrow}</span>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <Button as="a" href={content.href}>
            {content.cta}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  )
}
