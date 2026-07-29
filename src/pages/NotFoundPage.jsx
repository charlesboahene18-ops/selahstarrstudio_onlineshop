import { RevealOnScroll } from '../components/RevealOnScroll'
import { toHomeSection, toProductsRoute } from '../utils/routes'

export function NotFoundPage() {
  return (
    <section className="page-status section">
      <RevealOnScroll className="page-status__card">
        <span className="section-heading__eyebrow">Page not found</span>
        <h1>That page does not exist in this build.</h1>
        <p>Use the links below to return to the home page or continue browsing the catalogue.</p>
        <div className="page-status__actions">
          <a className="button" href={toHomeSection('home')}>
            <span>Return home</span>
          </a>
          <a className="button button--ghost" href={toProductsRoute()}>
            <span>Browse all creations</span>
          </a>
        </div>
      </RevealOnScroll>
    </section>
  )
}
