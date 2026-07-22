import { Button } from './Button'
import { HomeCarousel } from './HomeCarousel'
import selahStarrWatermark from '../assets/Image Jul 21, 2026 at 07_59_05 PM.png'

export function ThemeShowcaseHero({ content, slides }) {
  return (
    <section
      className="home-hero"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(250, 247, 241, 0.91), rgba(250, 247, 241, 0.91)), url("${selahStarrWatermark}")`,
      }}
    >
      <div className="home-hero__inner">
        <div className="home-hero__content">
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
      </div>
    </section>
  )
}
