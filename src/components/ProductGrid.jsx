import { Button } from './Button'
import { ProductCard } from './ProductCard'
import { RevealOnScroll } from './RevealOnScroll'
import { SectionHeading } from './SectionHeading'

export function ProductGrid({ id, eyebrow, title, description, products, cta, ctaHref, ctaExternal = false }) {
  return (
    <section className="product-grid-section section" id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="product-grid-section__grid">
        {products.map((product, index) => (
          <RevealOnScroll key={product.id} delay={index * 60}>
            <ProductCard product={product} />
          </RevealOnScroll>
        ))}
      </div>
      <RevealOnScroll className="product-grid-section__cta" delay={220}>
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
