import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export function NavigationDropdown({ link, isOpen, onOpen, onClose }) {
  const triggerRef = useRef(null)
  const firstItemRef = useRef(null)
  const hasItems = Array.isArray(link.items) && link.items.length > 0

  const focusFirstItem = () => {
    firstItemRef.current?.focus()
  }

  return (
    <div
      className={`site-header__nav-item ${isOpen ? 'is-open' : ''}`}
      onMouseEnter={hasItems ? onOpen : undefined}
      onMouseLeave={hasItems ? onClose : undefined}
      onFocusCapture={hasItems ? onOpen : undefined}
      onBlurCapture={
        hasItems
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
        aria-haspopup={hasItems ? 'true' : undefined}
        aria-expanded={hasItems ? isOpen : undefined}
        onKeyDown={(event) => {
          if (!hasItems) {
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
        {hasItems ? <ChevronDown size={14} aria-hidden="true" /> : null}
      </a>

      {hasItems ? (
        <div
          className="site-header__dropdown"
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
          {link.items.map((item, index) => (
            <a
              key={item.href}
              ref={index === 0 ? firstItemRef : undefined}
              className="site-header__dropdown-link"
              href={item.href}
            >
              <strong>{item.label}</strong>
              {item.description ? <span>{item.description}</span> : null}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  )
}
