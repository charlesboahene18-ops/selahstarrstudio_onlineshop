import { Button } from './Button'
import { RevealOnScroll } from './RevealOnScroll'

export function MissionCollage({ content }) {
  return (
    <section className="mission-collage section" id="mission">
      <div className="mission-collage__grid">
        <RevealOnScroll className="mission-collage__media">
          {content.images.map((image, index) => (
            <figure key={image.alt} className={`mission-collage__figure mission-collage__figure--${index + 1}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </RevealOnScroll>

        <RevealOnScroll className="mission-collage__copy" delay={120}>
          <span className="section-heading__eyebrow">{content.eyebrow}</span>
          <h2>
            <span>{content.title}</span>
            <em>{content.accent}</em>
          </h2>
          <p>{content.description}</p>
          <Button as="a" href={content.href}>
            {content.cta}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  )
}
