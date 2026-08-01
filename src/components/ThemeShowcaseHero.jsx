import { Header } from './Header'
import heroImage from '../assets/Image Aug 1, 2026 at 01_39_24 PM.png'

export function ThemeShowcaseHero({ content, navLinks, products, socialLinks }) {
  return (
    <section className="home-hero" id="home">
      <img
        src={heroImage}
        alt="Selah Starr Studio handcrafted jewellery collection"
        className="home-hero__image"
        loading="eager"
        fetchPriority="high"
      />
      <div className="home-hero__top-gradient" aria-hidden="true" />

      <Header
        overlay
        navLinks={navLinks}
        products={products}
        socialLinks={socialLinks}
      />

      <div className="home-hero__content">
        <h1 className="home-hero__title">{content.title}</h1>
        <p className="home-hero__promotion">{content.promotion}</p>
        <a href={content.shopHref} className="home-hero__shop-link">
          {content.shopLabel}
        </a>
      </div>
    </section>
  )
}
