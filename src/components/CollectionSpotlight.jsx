import { useEffect, useRef } from 'react'
import { RevealOnScroll } from './RevealOnScroll'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function CollectionSpotlight({ id, eyebrow, title, items }) {
  const gridRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || items.length <= 1) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      const grid = gridRef.current
      if (!grid || grid.scrollWidth <= grid.clientWidth) {
        return
      }

      const atEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 8
      if (atEnd) {
        grid.scrollTo({ left: 0, behavior: 'smooth' })
        return
      }

      const firstItem = grid.querySelector('.collection-spotlight__item')
      const itemWidth = firstItem?.getBoundingClientRect().width ?? grid.clientWidth
      grid.scrollBy({ left: itemWidth, behavior: 'smooth' })
    }, 3500)

    return () => window.clearInterval(intervalId)
  }, [items.length, reducedMotion])

  return (
    <section className="collection-spotlight section" id={id}>
      <RevealOnScroll className="collection-spotlight__header">
        <span className="collection-spotlight__eyebrow">{eyebrow}</span>
        <h2 className="collection-spotlight__title">{title}</h2>
      </RevealOnScroll>

      <div className="collection-spotlight__grid" ref={gridRef}>
        {items.map((item, index) => (
          <RevealOnScroll
            key={item.name}
            delay={index * 70}
            as="a"
            href={item.href}
            className="collection-spotlight__item"
          >
            <img
              src={item.image}
              alt={item.imageAlt}
              className="collection-spotlight__image"
              loading="lazy"
              style={
                item.imageObjectPosition
                  ? { objectPosition: item.imageObjectPosition }
                  : undefined
              }
            />

            <div className="collection-spotlight__overlay">
              <h3>{item.name}</h3>
              <p>{item.spotlightDescription ?? item.label}</p>
              <span className="collection-spotlight__cta">Shop now</span>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
