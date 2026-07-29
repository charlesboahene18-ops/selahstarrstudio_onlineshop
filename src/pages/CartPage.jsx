import { Minus, Plus, Trash2 } from 'lucide-react'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { useCart } from '../hooks/useCart'
import { toProductsRoute } from '../utils/routes'

export function CartPage() {
  const {
    cartItems,
    itemCount,
    checkoutHref,
    clearCart,
    removeItem,
    updateQuantity,
  } = useCart()

  if (!cartItems.length) {
    return (
      <section className="page-status section">
        <RevealOnScroll className="page-status__card">
          <span className="section-heading__eyebrow">Saved cart</span>
          <h1>Your shortlist is empty.</h1>
          <p>
            Add pieces from the catalogue to keep a reusable shortlist, then send the full set to
            WhatsApp in one step.
          </p>
          <a className="button" href={toProductsRoute()}>
            <span>Browse all creations</span>
          </a>
        </RevealOnScroll>
      </section>
    )
  }

  return (
    <section className="cart-page section">
      <RevealOnScroll className="page-hero">
        <a className="page-back-link" href={toProductsRoute()}>
          Continue shopping
        </a>
        <span className="section-heading__eyebrow">Saved cart</span>
        <h1>Your Enquiry Shortlist</h1>
        <p>
          Adjust quantities, remove pieces, then send the full shortlist to WhatsApp for
          pricing, availability, and customisation guidance.
        </p>
      </RevealOnScroll>

      <div className="cart-page__layout">
        <div className="cart-page__items">
          {cartItems.map(({ product, quantity }, index) => (
            <RevealOnScroll key={product.id} className="cart-page__item" delay={index * 50}>
              <a className="cart-page__item-image" href={product.href}>
                <img src={product.images[0].src} alt={product.images[0].alt} />
              </a>
              <div className="cart-page__item-copy">
                <a href={product.href}>
                  <h2>{product.name}</h2>
                </a>
                <p>{product.shortDescription}</p>
                <small>{product.priceLabel}</small>
              </div>
              <div className="cart-page__item-actions">
                <div className="cart-page__quantity">
                  <button
                    type="button"
                    aria-label={`Decrease quantity for ${product.name}`}
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                  >
                    <Minus size={14} />
                  </button>
                  <span>{quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase quantity for ${product.name}`}
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  type="button"
                  className="cart-page__remove"
                  onClick={() => removeItem(product.id)}
                >
                  <Trash2 size={14} />
                  Remove
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="cart-page__summary" delay={100}>
          <span className="section-heading__eyebrow">Summary</span>
          <h2>{itemCount} saved item{itemCount > 1 ? 's' : ''}</h2>
          <p>
            Pricing remains conversation-led in this build, so the cart works as a structured
            shortlist rather than a self-checkout flow.
          </p>
          <a
            className="button button--whatsapp"
            href={checkoutHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Send cart on WhatsApp</span>
          </a>
          <button type="button" className="button button--ghost" onClick={clearCart}>
            <span>Clear saved cart</span>
          </button>
        </RevealOnScroll>
      </div>
    </section>
  )
}
