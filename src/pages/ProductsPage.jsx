import { useMemo, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { toHomeSection } from '../utils/routes'

export function ProductsPage({ products }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category))],
    [products],
  )

  const visibleProducts = useMemo(() => {
    if (activeCategory === 'All') {
      return products
    }

    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory, products])

  return (
    <section className="catalog-page section">
      <RevealOnScroll className="page-hero">
        <a className="page-back-link" href={toHomeSection('collections')}>
          Back to home
        </a>
        <span className="section-heading__eyebrow">Studio catalogue</span>
        <h1>Browse All Creations</h1>
        <p>
          Explore the full Selah Starr Studio mock catalogue, filter by category, save pieces
          to your cart, and move into WhatsApp only when you are ready to enquire.
        </p>
      </RevealOnScroll>

      <RevealOnScroll className="catalog-page__filters" delay={80}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? 'is-active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </RevealOnScroll>

      <div className="catalog-page__grid product-grid-section__grid">
        {visibleProducts.map((product, index) => (
          <RevealOnScroll key={product.id} delay={index * 40}>
            <ProductCard product={product} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
