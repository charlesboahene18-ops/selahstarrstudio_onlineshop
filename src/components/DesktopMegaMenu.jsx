export function DesktopMegaMenu({
  id,
  menu,
  firstLinkRef,
  onMouseEnter,
  onMouseLeave,
  onClose,
}) {
  if (!menu) {
    return null
  }

  return (
    <div
      id={id}
      className="desktop-mega-menu"
      aria-label={`${menu.label} mega menu`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="desktop-mega-menu__inner">
        {menu.columns.map((column, columnIndex) => (
          <section key={`${menu.label}-${column.title}`} className="mega-menu-column">
            <h3>{column.title}</h3>

            <div className="mega-menu-column__links">
              {column.links.map((item, itemIndex) => (
                <a
                  key={item.href}
                  ref={columnIndex === 0 && itemIndex === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  className="mega-menu-column__link"
                  onClick={onClose}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </section>
        ))}

        {menu.featureCards?.map((card) => (
          <a key={card.href} href={card.href} className="mega-menu-feature" onClick={onClose}>
            <div className="mega-menu-feature__image-wrapper">
              <img
                src={card.image}
                alt={card.imageAlt}
                className="mega-menu-feature__image"
                loading="lazy"
              />
            </div>

            <p className="mega-menu-feature__caption">{card.description}</p>
            <span className="mega-menu-feature__link">{card.ctaLabel}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
