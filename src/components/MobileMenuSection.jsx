import { ChevronDown } from 'lucide-react'

export function MobileMenuSection({
  id,
  label,
  isOpen,
  onToggle,
  buttonRef,
  children,
}) {
  return (
    <section className="mobile-menu-section">
      <button
        ref={buttonRef}
        type="button"
        className="mobile-menu-section__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span>{label}</span>
        <ChevronDown
          aria-hidden="true"
          className={[
            'mobile-menu-section__chevron',
            isOpen ? 'mobile-menu-section__chevron--open' : '',
          ].join(' ').trim()}
        />
      </button>

      <div
        id={id}
        className={[
          'mobile-menu-section__panel',
          isOpen ? 'mobile-menu-section__panel--open' : '',
        ].join(' ').trim()}
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
      >
        <div className="mobile-menu-section__panel-inner">
          <div
            className={[
              'mobile-menu-section__content',
              isOpen ? 'mobile-menu-section__content--open' : '',
            ].join(' ').trim()}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
