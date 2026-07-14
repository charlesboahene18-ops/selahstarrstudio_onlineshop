import { Eye } from 'lucide-react'

export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <a className="product-card__image" href={product.href}>
        <img src={product.images[0].src} alt={product.images[0].alt} loading="lazy" />
        <span className="product-card__quick-action">
          <Eye size={16} />
          View details
        </span>
      </a>
      <div className="product-card__copy">
        <span>{product.isMockData ? `${product.category} · Mock` : product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.priceLabel}</p>
      </div>
    </article>
  )
}
