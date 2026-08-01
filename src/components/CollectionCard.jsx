import { ArrowUpRight } from 'lucide-react'

export function CollectionCard({ item, tone = 'gold' }) {
  return (
    <a className={`collection-card collection-card--${tone}`} href={item.href}>
      <div className="collection-card__image">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          style={item.imageObjectPosition ? { objectPosition: item.imageObjectPosition } : undefined}
        />
      </div>
      <div className="collection-card__copy">
        <span>{item.label}</span>
        <h3>{item.name}</h3>
      </div>
      <ArrowUpRight size={18} />
    </a>
  )
}
