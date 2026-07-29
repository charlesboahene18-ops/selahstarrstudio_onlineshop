import { Eye, ShoppingBag } from 'lucide-react'
import { Button } from './Button'
import { useCart } from '../hooks/useCart'

export function ProductCard({ product }) {
  const { addItem } = useCart()

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
        <div className="product-card__actions">
          <Button
            as="button"
            type="button"
            className="button--small"
            onClick={() => addItem(product.id)}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={14} />
            Add to cart
          </Button>
          <Button
            as="a"
            href={product.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="button--small button--whatsapp"
            aria-label={`${product.whatsappLabel} for ${product.name}`}
          >
            {product.whatsappLabel}
          </Button>
        </div>
      </div>
    </article>
  )
}
