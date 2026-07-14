import { CollectionCard } from './CollectionCard'
import { SectionHeading } from './SectionHeading'
import { RevealOnScroll } from './RevealOnScroll'

export function CollectionGrid({ id, eyebrow, title, description, items, tone = 'gold' }) {
  return (
    <section className="collection-grid-section section" id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="collection-grid-section__grid">
        {items.map((item, index) => (
          <RevealOnScroll key={item.name} delay={index * 70}>
            <CollectionCard item={item} tone={tone} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
