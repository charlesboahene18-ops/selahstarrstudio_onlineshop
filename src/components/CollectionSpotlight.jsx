import { RevealOnScroll } from './RevealOnScroll'

export function CollectionSpotlight({ id, eyebrow, title, items }) {
  return (
    <section className="collection-spotlight section" id={id}>
      <RevealOnScroll className="collection-spotlight__header">
        <span className="collection-spotlight__eyebrow">{eyebrow}</span>
        <h2 className="collection-spotlight__title">{title}</h2>
      </RevealOnScroll>

      <div className="collection-spotlight__grid">
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
