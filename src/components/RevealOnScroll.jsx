import { useEffect, useRef, useState } from 'react'

export function RevealOnScroll({ as: Tag = 'div', className = '', delay = 0, children, ...props }) {
  const elementRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = elementRef.current
    if (!node) {
      return undefined
    }

    if (typeof window === 'undefined' || typeof window.IntersectionObserver === 'undefined') {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={elementRef}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
