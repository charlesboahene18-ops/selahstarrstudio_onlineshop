import { useEffect, useRef, useState } from 'react'
import { Button } from './Button'
import { RevealOnScroll } from './RevealOnScroll'

export function MissionCollage({ content }) {
  const mediaRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const media = mediaRef.current
    if (!media) {
      return undefined
    }

    const onScroll = () => {
      if (media.clientWidth === 0) {
        return
      }
      setActiveIndex(Math.round(media.scrollLeft / media.clientWidth))
    }

    media.addEventListener('scroll', onScroll, { passive: true })
    return () => media.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToIndex = (index) => {
    const media = mediaRef.current
    if (!media) {
      return
    }
    media.scrollTo({ left: index * media.clientWidth, behavior: 'smooth' })
  }

  return (
    <section className="mission-collage section" id="mission">
      <div className="mission-collage__grid">
        <RevealOnScroll className="mission-collage__copy">
          <span className="section-heading__eyebrow">{content.eyebrow}</span>
          <h2>
            <span>{content.title}</span>
            <em>{content.accent}</em>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll className="mission-collage__visual" delay={80}>
          <div className="mission-collage__media" ref={mediaRef}>
            {content.images.map((image, index) => (
              <figure key={image.alt} className={`mission-collage__figure mission-collage__figure--${index + 1}`}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>

          {content.images.length > 1 ? (
            <div className="mission-collage__dots" role="tablist" aria-label="Brand story images">
              {content.images.map((image, index) => (
                <button
                  key={image.alt}
                  type="button"
                  className={`mission-collage__dot ${index === activeIndex ? 'is-active' : ''}`}
                  aria-label={`Show image ${index + 1} of ${content.images.length}`}
                  aria-current={index === activeIndex}
                  onClick={() => scrollToIndex(index)}
                />
              ))}
            </div>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll className="mission-collage__details" delay={140}>
          <p>{content.description}</p>
          <Button as="a" href={content.href}>
            {content.cta}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  )
}
