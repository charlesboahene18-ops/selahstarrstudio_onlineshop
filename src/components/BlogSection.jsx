import { BlogCard } from './BlogCard'
import { RevealOnScroll } from './RevealOnScroll'
import { SectionHeading } from './SectionHeading'

export function BlogSection({ content, posts }) {
  return (
    <section className="blog-section section" id="journal">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div className="blog-section__grid">
        {posts.map((post, index) => (
          <RevealOnScroll key={post.title} delay={index * 80}>
            <BlogCard post={post} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
