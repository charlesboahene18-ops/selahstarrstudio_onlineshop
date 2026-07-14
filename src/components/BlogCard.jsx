import { ArrowRight } from 'lucide-react'

export function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <a className="blog-card__image" href={post.href}>
        <img src={post.image} alt={post.imageAlt} loading="lazy" />
      </a>
      <span className="blog-card__category">{post.category}</span>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <a className="blog-card__link" href={post.href}>
        Read more <ArrowRight size={16} />
      </a>
    </article>
  )
}
