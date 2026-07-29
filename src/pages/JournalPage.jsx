import { BlogCard } from '../components/BlogCard'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { toHomeSection } from '../utils/routes'

export function JournalPage({ posts }) {
  return (
    <section className="journal-page section">
      <RevealOnScroll className="page-hero">
        <a className="page-back-link" href={toHomeSection('journal')}>
          Back to home
        </a>
        <span className="section-heading__eyebrow">Studio journal</span>
        <h1>Draft Stories Behind The Beadwork</h1>
        <p>
          These longer reads turn the home-page editorial teasers into usable pages, giving the
          brand room for care notes, styling advice, and custom-order guidance.
        </p>
      </RevealOnScroll>

      <div className="blog-section__grid">
        {posts.map((post, index) => (
          <RevealOnScroll key={post.slug} delay={index * 60}>
            <BlogCard post={post} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
