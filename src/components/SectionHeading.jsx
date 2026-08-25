import { RevealOnScroll } from './RevealOnScroll'

export function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  return (
    <RevealOnScroll className={`section-heading section-heading--${align}`}>
      {eyebrow ? <span className="section-heading__eyebrow">{eyebrow}</span> : null}
      {title ? <h2>{title}</h2> : null}
      {description ? <p>{description}</p> : null}
    </RevealOnScroll>
  )
}
