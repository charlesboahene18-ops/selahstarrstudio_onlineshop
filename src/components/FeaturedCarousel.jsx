import { useRef } from 'react'
import { ChevronRight, ShoppingBag } from 'lucide-react'
import { Button } from './Button'
import { SectionHeading } from './SectionHeading'
import { RevealOnScroll } from './RevealOnScroll'
import { useCart } from '../hooks/useCart'

export function FeaturedCarousel({
  id,
  eyebrow,
  title,
  description,
  products,
  cta,
  ctaHref,
  ctaExternal = false,
}) {
  const trackRef = useRef(null)
  const { addItem } = useCart()

  const handleNext = () => {
    const track = trackRef.current
    if (!track) return

    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8
    if (atEnd) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' })
  }

  return (
    <section className="featured-carousel section" id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <RevealOnScroll className="featured-carousel__frame" delay={80}>
        <div className="featured-carousel__track" ref={trackRef}>
          {products.map((product) => (
            <div key={product.id} className="featured-carousel__panel">
              <a
                className="featured-carousel__panel-link"
                href={product.href}
                aria-label={`View ${product.name}, ${product.priceLabel}`}
              >
                <img src={product.images[0].src} alt={product.images[0].alt} loading="lazy" />
                <span className="featured-carousel__overlay" aria-hidden="true" />
                <span className="featured-carousel__content">
                  <span className="featured-carousel__category">{product.category}</span>
                  <span className="featured-carousel__title">{product.name}</span>
                  <span className="featured-carousel__price">{product.priceLabel}</span>
                  <span className="featured-carousel__shop">{product.shopLabel}</span>
                </span>
              </a>
              <button
                type="button"
                className="featured-carousel__cart-button"
                onClick={() => addItem(product.id)}
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingBag size={20} strokeWidth={1.6} />
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="featured-carousel__nav"
          onClick={handleNext}
          aria-label="Show next featured pieces"
        >
          <ChevronRight size={20} strokeWidth={1.75} />
        </button>
      </RevealOnScroll>

      <RevealOnScroll className="product-grid-section__cta" delay={200}>
        <Button
          as="a"
          href={ctaHref}
          target={ctaExternal ? '_blank' : undefined}
          rel={ctaExternal ? 'noopener noreferrer' : undefined}
          className={ctaExternal ? 'button--whatsapp' : ''}
        >
          {cta}
        </Button>
      </RevealOnScroll>
    </section>
  )
}
