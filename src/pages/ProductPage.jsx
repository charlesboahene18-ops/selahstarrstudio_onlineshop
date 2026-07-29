import { ArrowRight, ShoppingBag } from 'lucide-react'
import { ProductCard } from '../components/ProductCard'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { useCart } from '../hooks/useCart'
import { toProductsRoute } from '../utils/routes'

export function ProductPage({ product, products }) {
  const { addItem } = useCart()

  if (!product) {
    return (
      <section className="page-status section">
        <RevealOnScroll className="page-status__card">
          <span className="section-heading__eyebrow">Product unavailable</span>
          <h1>That piece could not be found.</h1>
          <p>Return to the full catalogue to continue browsing.</p>
          <a className="button" href={toProductsRoute()}>
            <span>Browse all creations</span>
          </a>
        </RevealOnScroll>
      </section>
    )
  }

  const relatedProducts = products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 3)

  return (
    <section className="product-page section">
      <RevealOnScroll className="product-page__layout">
        <div className="product-page__media">
          <a className="page-back-link" href={toProductsRoute()}>
            Back to catalogue
          </a>
          <img src={product.images[0].src} alt={product.images[0].alt} />
        </div>

        <div className="product-page__copy">
          <span className="section-heading__eyebrow">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-page__price">{product.priceLabel}</p>
          <p>{product.description}</p>

          <div className="page-chip-row">
            {product.isMockData ? <span>Mock data</span> : null}
            {product.madeToOrder ? <span>Made to order</span> : null}
            {product.customisable ? <span>Customisable</span> : null}
          </div>

          <dl className="product-page__details">
            <div>
              <dt>Colours</dt>
              <dd>{product.colours.join(', ')}</dd>
            </div>
            <div>
              <dt>Sizes</dt>
              <dd>{product.sizes.join(', ')}</dd>
            </div>
            <div>
              <dt>Material direction</dt>
              <dd>{product.material}</dd>
            </div>
            <div>
              <dt>Care</dt>
              <dd>{product.careInstructions}</dd>
            </div>
          </dl>

          <div className="product-page__actions">
            <button
              type="button"
              className="button"
              onClick={() => addItem(product.id)}
            >
              <span>
                <ShoppingBag size={16} />
                Add to cart
              </span>
            </button>
            <a
              className="button button--ghost button--whatsapp"
              href={product.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{product.whatsappLabel}</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {relatedProducts.length ? (
        <>
          <RevealOnScroll className="page-related-heading" delay={120}>
            <span className="section-heading__eyebrow">Related pieces</span>
            <h2>More In This Direction</h2>
            <a className="page-inline-link" href={toProductsRoute()}>
              Browse all creations <ArrowRight size={16} />
            </a>
          </RevealOnScroll>
          <div className="product-grid-section__grid">
            {relatedProducts.map((item, index) => (
              <RevealOnScroll key={item.id} delay={index * 50}>
                <ProductCard product={item} />
              </RevealOnScroll>
            ))}
          </div>
        </>
      ) : null}
    </section>
  )
}
