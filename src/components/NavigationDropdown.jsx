import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export function NavigationDropdown({ link, isOpen, onOpen, onClose }) {
  const triggerRef = useRef(null)
  const firstItemRef = useRef(null)
  const hasColumns = Array.isArray(link.columns) && link.columns.length > 0
  const hasFeatureCards = Array.isArray(link.featureCards) && link.featureCards.length > 0

  const focusFirstItem = () => {
    firstItemRef.current?.focus()
  }

  return (
    <div
      className={`site-header__nav-item ${isOpen ? 'is-open' : ''}`}
      onMouseEnter={hasColumns ? onOpen : undefined}
      onMouseLeave={hasColumns ? onClose : undefined}
      onFocusCapture={hasColumns ? onOpen : undefined}
      onBlurCapture={
        hasColumns
          ? (event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                onClose()
              }
            }
          : undefined
      }
    >
      <a
        ref={triggerRef}
        className="site-header__nav-link"
        href={link.href}
        aria-haspopup={hasColumns ? 'true' : undefined}
        aria-expanded={hasColumns ? isOpen : undefined}
        onKeyDown={(event) => {
          if (!hasColumns) {
            return
          }

          if (event.key === 'ArrowDown') {
            event.preventDefault()
            onOpen()
            window.requestAnimationFrame(() => focusFirstItem())
          }

          if (event.key === 'Escape') {
            event.preventDefault()
            onClose()
            triggerRef.current?.focus()
          }
        }}
      >
        <span>{link.label}</span>
        {hasColumns ? <ChevronDown size={14} aria-hidden="true" /> : null}
      </a>

      {hasColumns && isOpen ? (
        <div
          className={`site-header__dropdown ${hasFeatureCards ? 'site-header__dropdown--mega' : ''}`}
          aria-label={`${link.label} submenu`}
          onKeyDown={(event) => {
            if (event.key !== 'Escape') {
              return
            }

            event.preventDefault()
            onClose()
            triggerRef.current?.focus()
          }}
        >
          <div className="site-header__dropdown-columns">
            {link.columns.map((column, columnIndex) => (
              <section key={`${link.label}-${column.title}`} className="site-header__dropdown-group">
                <header>{column.title}</header>
                <div className="site-header__dropdown-list">
                  {column.links.map((item, itemIndex) => (
                    <a
                      key={item.href}
                      ref={columnIndex === 0 && itemIndex === 0 ? firstItemRef : undefined}
                      className="site-header__dropdown-link"
                      href={item.href}
                    >
                      <strong>{item.label}</strong>
                      {item.description ? <span>{item.description}</span> : null}
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {hasFeatureCards ? (
            <div className="site-header__dropdown-featureCards">
              {link.featureCards.map((card) => (
                <a key={card.href} href={card.href} className="site-header__dropdown-card">
                  <img src={card.image} alt={card.imageAlt} loading="lazy" />
                  <div className="site-header__dropdown-card-copy">
                    <strong>{card.title}</strong>
                    <p>{card.description}</p>
                    <span>{card.ctaLabel}</span>
                  </div>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
