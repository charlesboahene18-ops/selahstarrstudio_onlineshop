import { BrandMark } from './BrandMark'
import { Button } from './Button'
import { HomeCarousel } from './HomeCarousel'

export function ThemeShowcaseHero({ content, slides }) {
  return (
    <section className="home-hero" id="home">
      <div className="home-hero__content">
        <BrandMark />
        <p className="theme-showcase-hero__eyebrow">{content.eyebrow}</p>
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

      <div className="home-hero__carousel">
          <HomeCarousel
            slides={slides}
            ariaLabel="Selah Starr Studio featured designs"
          />
      </div>
    </section>
  )
}
