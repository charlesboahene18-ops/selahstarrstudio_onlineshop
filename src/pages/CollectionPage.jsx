import { ProductCard } from '../components/ProductCard'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { toHomeSection, toProductsRoute } from '../utils/routes'

export function CollectionPage({ collection, products }) {
  if (!collection) {
    return (
      <section className="page-status section">
        <RevealOnScroll className="page-status__card">
          <span className="section-heading__eyebrow">Collection unavailable</span>
          <h1>That collection could not be found.</h1>
          <p>Return to the catalogue to keep browsing.</p>
          <a className="button" href={toProductsRoute()}>
            <span>Browse all creations</span>
          </a>
        </RevealOnScroll>
      </section>
    )
  }

  const collectionProducts = products.filter((product) =>
    collection.productCategories.includes(product.category),
  )

  return (
    <section className="collection-page section">
      <RevealOnScroll className="page-hero page-hero--split">
        <div>
          <a className="page-back-link" href={toHomeSection(collection.homeSectionId || 'collections')}>
            Back to home
          </a>
          <span className="section-heading__eyebrow">{collection.label}</span>
          <h1>{collection.name}</h1>
          <p>{collection.longDescription}</p>
          <div className="page-chip-row">
            <span>{collectionProducts.length} saved concepts</span>
            <span>Contact for pricing</span>
            <span>Custom-friendly</span>
          </div>
        </div>
        <div className="page-hero__media">
          <img src={collection.image} alt={collection.imageAlt} />
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="page-intro" delay={80}>
        <p>{collection.description}</p>
        <a className="page-inline-link" href={toProductsRoute()}>
          View the full catalogue
        </a>
      </RevealOnScroll>

      <div className="product-grid-section__grid">
        {collectionProducts.map((product, index) => (
          <RevealOnScroll key={product.id} delay={index * 40}>
            <ProductCard product={product} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
