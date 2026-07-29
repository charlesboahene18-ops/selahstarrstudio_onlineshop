import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './Button'
import { useReducedMotion } from '../hooks/useReducedMotion'

const AUTOPLAY_DELAY_MS = 5000
const SWIPE_THRESHOLD_PX = 36

function hasOverlayContent(slide) {
  return Boolean(
    slide.label
    || slide.title
    || slide.description
    || (slide.buttonText && slide.buttonLink),
  )
}

export function HomeCarousel({ slides = [], ariaLabel = 'Selah Starr Studio featured designs' }) {
  const reducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocusWithin, setIsFocusWithin] = useState(false)
  const touchStartXRef = useRef(null)
  const touchDeltaXRef = useRef(0)

  const slideCount = slides.length
  const autoplayPaused = reducedMotion || isHovered || isFocusWithin || slideCount <= 1
  const activeSlide = slideCount ? slides[activeIndex] : null
  const overlayVisible = useMemo(
    () => (activeSlide ? hasOverlayContent(activeSlide) : false),
    [activeSlide],
  )

  useEffect(() => {
    if (!slideCount) {
      return undefined
    }

    setActiveIndex((currentIndex) => (currentIndex < slideCount ? currentIndex : 0))
    return undefined
  }, [slideCount])

  useEffect(() => {
    if (autoplayPaused) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slideCount)
    }, AUTOPLAY_DELAY_MS)

    return () => window.clearTimeout(timeoutId)
  }, [activeIndex, autoplayPaused, slideCount])

  if (!slideCount) {
    return null
  }

  const showSlide = (index) => {
    setActiveIndex(index)
  }

  const showPreviousSlide = () => {
    showSlide((activeIndex - 1 + slideCount) % slideCount)
  }

  const showNextSlide = () => {
    showSlide((activeIndex + 1) % slideCount)
  }

  return (
    <section
      className="home-carousel"
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocusWithin(false)
        }
      }}
    >
      <div
        className="home-carousel__viewport"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') {
            event.preventDefault()
            showPreviousSlide()
          } else if (event.key === 'ArrowRight') {
            event.preventDefault()
            showNextSlide()
          }
        }}
        onTouchStart={(event) => {
          touchStartXRef.current = event.changedTouches[0]?.clientX ?? null
          touchDeltaXRef.current = 0
        }}
        onTouchMove={(event) => {
          if (touchStartXRef.current === null) {
            return
          }

          touchDeltaXRef.current = (event.changedTouches[0]?.clientX ?? 0) - touchStartXRef.current
        }}
        onTouchEnd={() => {
          if (touchStartXRef.current === null) {
            return
          }

          if (touchDeltaXRef.current <= -SWIPE_THRESHOLD_PX) {
            showNextSlide()
          } else if (touchDeltaXRef.current >= SWIPE_THRESHOLD_PX) {
            showPreviousSlide()
          }

          touchStartXRef.current = null
          touchDeltaXRef.current = 0
        }}
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex

          return (
            <article
              key={`${slide.alt}-${index}`}
              className={`home-carousel__slide ${isActive ? 'is-active' : ''}`}
              aria-hidden={!isActive}
              aria-label={`Slide ${index + 1} of ${slideCount}`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="home-carousel__image"
                style={{ objectPosition: slide.objectPosition || 'center' }}
                loading={index === 0 || isActive ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </article>
          )
        })}

        {overlayVisible ? (
          <div
            className={`home-carousel__scrim home-carousel__scrim--${activeSlide.overlayStrength || 'medium'}`}
            aria-hidden="true"
          />
        ) : null}

        {overlayVisible ? (
          <div className={`home-carousel__content home-carousel__content--${activeSlide.textAlignment || 'left'}`}>
            {activeSlide.label ? <span className="home-carousel__label">{activeSlide.label}</span> : null}
            {activeSlide.title ? <h2>{activeSlide.title}</h2> : null}
            {activeSlide.description ? <p>{activeSlide.description}</p> : null}
            {activeSlide.buttonText && activeSlide.buttonLink ? (
              <Button as="a" href={activeSlide.buttonLink}>
                {activeSlide.buttonText}
              </Button>
            ) : null}
          </div>
        ) : null}

        {slideCount > 1 ? (
          <>
            <button
              type="button"
              className="home-carousel__arrow home-carousel__arrow--previous"
              aria-label="Previous slide"
              onClick={showPreviousSlide}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="home-carousel__arrow home-carousel__arrow--next"
              aria-label="Next slide"
              onClick={showNextSlide}
            >
              <ChevronRight size={20} />
            </button>
            <div className="home-carousel__dots" aria-label="Carousel slide indicators">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.alt}-dot-${index}`}
                  type="button"
                  className={`home-carousel__dot ${index === activeIndex ? 'is-active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => showSlide(index)}
                >
                  <span />
                </button>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}
