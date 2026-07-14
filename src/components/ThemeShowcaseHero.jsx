import { BrandMark } from './BrandMark'
import { Button } from './Button'
import { ShowcaseSlider } from './ShowcaseSlider'
import heroSurface from '../assets/backgrounds/theme-hero-surface.svg'

export function ThemeShowcaseHero({ content, slides }) {
  return (
    <section className="theme-showcase-hero" id="home" style={{ backgroundImage: `url(${heroSurface})` }}>
      <div className="theme-showcase-hero__copy">
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
          <Button as="a" href={content.secondaryHref} className="button--ghost">
            {content.secondaryCta}
          </Button>
        </div>
      </div>

      <div className="theme-showcase-hero__stage">
        <span className="theme-showcase-hero__script theme-showcase-hero__script--left">{content.scriptText}</span>
        <span className="theme-showcase-hero__script theme-showcase-hero__script--right">{content.scriptText}</span>
        <div className="theme-showcase-hero__badge" aria-hidden="true">
          <span>{content.badgeText}</span>
        </div>
        <ShowcaseSlider
          slides={slides}
          announcementText={content.showcaseAnnouncementText}
          brandLabel={content.showcaseBrandLabel}
          socialHandle={content.showcaseSocialHandle}
        />
      </div>
    </section>
  )
}
