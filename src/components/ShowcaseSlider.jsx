import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Search, ShoppingBag } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { Button } from './Button'
import { DeviceMockup } from './DeviceMockup'
import { useReducedMotion } from '../hooks/useReducedMotion'

function DesktopPreview({ slide, announcementText, socialHandle }) {
  return (
    <div className={`showcase-preview showcase-preview--${slide.key}`}>
      <div className="showcase-preview__announcement">{announcementText}</div>
      <div className="showcase-preview__header">
        <div className="showcase-preview__header-icons">
          <Search size={14} />
        </div>
        <BrandMark compact />
        <div className="showcase-preview__header-icons">
          <ShoppingBag size={14} />
        </div>
      </div>

      {slide.type === 'launch' ? (
        <div className="showcase-preview__launch">
          <div className="showcase-preview__three-up">
            {slide.images.map((image) => (
              <img key={image.alt} src={image.src} alt={image.alt} />
            ))}
          </div>
          <div className="showcase-preview__text">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
            <Button as="div" className="button--small">
              {slide.cta}
            </Button>
          </div>
        </div>
      ) : null}

      {slide.type === 'collection' ? (
        <div className="showcase-preview__collection">
          <h3>{slide.title}</h3>
          <div className="showcase-preview__collection-grid">
            {slide.items.map((item) => (
              <article key={item.name}>
                <img src={item.image} alt={item.imageAlt} />
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {slide.type === 'bestsellers' ? (
        <div className="showcase-preview__bestsellers">
          <h3>{slide.title}</h3>
          <div className="showcase-preview__product-grid">
            {slide.items.slice(0, 4).map((item) => (
              <article key={item.id}>
                <img src={item.images[0].src} alt={item.images[0].alt} />
                <span>{item.name}</span>
              </article>
            ))}
          </div>
          <Button as="div" className="button--small">
            {slide.cta}
          </Button>
        </div>
      ) : null}

      {slide.type === 'mission' ? (
        <div className="showcase-preview__mission">
          <div className="showcase-preview__mission-grid">
            {slide.images.map((image) => (
              <img key={image.alt} src={image.src} alt={image.alt} />
            ))}
          </div>
          <div className="showcase-preview__mission-copy">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      ) : null}

      {slide.type === 'social' ? (
        <div className="showcase-preview__social">
          <div className="showcase-preview__social-head">
            <span>follow us</span>
            <small>{socialHandle}</small>
          </div>
          <div className="showcase-preview__social-grid">
            {slide.images.map((image) => (
              <img key={image.alt} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function MobilePreview({ slide, brandLabel }) {
  return (
    <div className={`showcase-mobile showcase-mobile--${slide.key}`}>
      <div className="showcase-mobile__topbar">
        <span className="showcase-mobile__dot" />
        <span className="showcase-mobile__label">{brandLabel}</span>
        <ShoppingBag size={13} />
      </div>
      <h3>{slide.mobileTitle}</h3>
      <p>{slide.mobileDescription}</p>
      <img src={slide.mobileImage.src} alt={slide.mobileImage.alt} />
      <Button as="div" className="button--small button--stacked">
        {slide.cta}
      </Button>
    </div>
  )
}

export function ShowcaseSlider({ slides, announcementText, brandLabel, socialHandle }) {
  const reducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const currentSlide = slides[activeIndex]
  const miniSlide = useMemo(() => slides[(activeIndex + 2) % slides.length], [activeIndex, slides])

  useEffect(() => {
    if (reducedMotion || paused) {
      return undefined
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 3800)

    return () => window.clearInterval(interval)
  }, [paused, reducedMotion, slides.length])

  const goNext = () => setActiveIndex((current) => (current + 1) % slides.length)
  const goPrevious = () => setActiveIndex((current) => (current - 1 + slides.length) % slides.length)

  return (
    <div
      className="showcase-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') {
          goNext()
        } else if (event.key === 'ArrowLeft') {
          goPrevious()
        }
      }}
      tabIndex={0}
      aria-label="Studio showcase slider"
    >
      <DeviceMockup variant="desktop" className="showcase-slider__desktop">
        {slides.map((slide, index) => (
          <div key={slide.key} className={`showcase-slider__layer ${index === activeIndex ? 'is-active' : ''}`}>
            <DesktopPreview
              slide={slide}
              announcementText={announcementText}
              socialHandle={socialHandle}
            />
          </div>
        ))}
      </DeviceMockup>

      <DeviceMockup variant="mobile" className="showcase-slider__mobile">
        {slides.map((slide, index) => (
          <div key={slide.key} className={`showcase-slider__layer ${index === activeIndex ? 'is-active' : ''}`}>
            <MobilePreview slide={slide} brandLabel={brandLabel} />
          </div>
        ))}
      </DeviceMockup>

      <div className="showcase-slider__mini-card" aria-hidden="true">
        <span>{miniSlide.title}</span>
        <div className="showcase-slider__mini-grid">
          {miniSlide.miniImages.map((image) => (
            <img key={image.alt} src={image.src} alt="" />
          ))}
        </div>
      </div>

      <div className="showcase-slider__controls">
        <button type="button" onClick={goPrevious} aria-label="Previous showcase slide">
          <ChevronLeft size={16} />
        </button>
        <div className="showcase-slider__pagination" aria-label="Showcase pagination">
          {slides.map((slide, index) => (
            <button
              key={slide.key}
              type="button"
              className={index === activeIndex ? 'is-active' : ''}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${slide.label}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
        <button type="button" onClick={goNext} aria-label="Next showcase slide">
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="showcase-slider__status">
        <strong>{currentSlide.title}</strong>
        <span>{paused || reducedMotion ? 'Paused' : 'Autoplaying'}</span>
      </div>
    </div>
  )
}
