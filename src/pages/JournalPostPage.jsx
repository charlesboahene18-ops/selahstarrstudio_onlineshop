import { ArrowLeft, ArrowRight } from 'lucide-react'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { toJournalRoute } from '../utils/routes'

export function JournalPostPage({ post, posts }) {
  if (!post) {
    return (
      <section className="page-status section">
        <RevealOnScroll className="page-status__card">
          <span className="section-heading__eyebrow">Article unavailable</span>
          <h1>That journal entry could not be found.</h1>
          <p>Return to the journal index to keep reading.</p>
          <a className="button" href={toJournalRoute()}>
            <span>Open the journal</span>
          </a>
        </RevealOnScroll>
      </section>
    )
  }

  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 2)

  return (
    <article className="journal-post section">
      <RevealOnScroll className="journal-post__hero">
        <a className="page-back-link" href={toJournalRoute()}>
          <ArrowLeft size={16} />
          Back to journal
        </a>
        <span className="section-heading__eyebrow">{post.category}</span>
        <h1>{post.title}</h1>
        <p>{post.introduction}</p>
        <small>{post.readingTime}</small>
        <img src={post.image} alt={post.imageAlt} />
      </RevealOnScroll>

      <div className="journal-post__body">
        {post.sections.map((section, index) => (
          <RevealOnScroll key={section.heading} className="journal-post__section" delay={index * 70}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </RevealOnScroll>
        ))}
      </div>

      {relatedPosts.length ? (
        <RevealOnScroll className="journal-post__related" delay={120}>
          <div>
            <span className="section-heading__eyebrow">Continue reading</span>
            <h2>Related journal notes</h2>
          </div>
          <div className="journal-post__related-links">
            {relatedPosts.map((relatedPost) => (
              <a key={relatedPost.slug} href={relatedPost.href}>
                <span>{relatedPost.category}</span>
                <strong>{relatedPost.title}</strong>
                <ArrowRight size={16} />
              </a>
            ))}
          </div>
        </RevealOnScroll>
      ) : null}
    </article>
  )
}
