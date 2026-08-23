import { Image as ImageIcon, ShoppingBag } from 'lucide-react'
import { Button } from './Button'
import { useCart } from '../hooks/useCart'

export function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="product-card">
      <a className="product-card__image" href={product.href}>
        {product.hasPhoto ? (
          <img src={product.images[0].src} alt={product.images[0].alt} loading="lazy" />
        ) : (
          <span className="product-card__image-placeholder" role="img" aria-label={product.images[0].alt}>
            <ImageIcon size={26} strokeWidth={1.5} />
          </span>
        )}
      </a>
      <div className="product-card__copy">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__price">{product.priceLabel}</p>
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
        </div>
      </div>
    </article>
  )
}
