import { Header } from './Header'
import { Button } from './Button'
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
        <div className="home-hero__content-inner">
          <div className="home-hero__eyebrow-stack" aria-label={content.eyebrow}>
            {content.introLines.map((line, index) => (
              <span key={`${line}-${index}`}>{line}</span>
            ))}
          </div>

          <h1>
            <span className="theme-showcase-hero__serif">{content.serifTitle}</span>
            <span className="theme-showcase-hero__sans">{content.sansTitle}</span>
          </h1>
          <p className="theme-showcase-hero__description">{content.description}</p>
          <div className="theme-showcase-hero__actions">
            <Button as="a" href={content.primaryHref}>
              {content.primaryCta}
            </Button>
            <Button
              as="a"
              href={content.secondaryHref}
              target={content.secondaryExternal ? '_blank' : undefined}
              rel={content.secondaryExternal ? 'noopener noreferrer' : undefined}
              className="button--ghost button--whatsapp"
            >
              {content.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
