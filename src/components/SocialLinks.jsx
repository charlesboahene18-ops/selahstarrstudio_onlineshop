import { Instagram } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'

const socialIcons = {
  instagram: Instagram,
  whatsapp: WhatsAppIcon,
}

export function SocialLinks({ links, className = '', ariaLabel = 'Social links', iconSize = 16 }) {
  return (
    <div className={className} aria-label={ariaLabel}>
      {links.map(({ icon, label, ariaLabel: itemAriaLabel, href, external, title }) => {
        const Icon = socialIcons[icon]

        if (!Icon) {
          return null
        }

        return (
          <a
            key={`${icon}-${label}`}
            href={href}
            aria-label={itemAriaLabel ?? label}
            title={title ?? label}
            data-social-network={icon}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
          >
            <Icon size={iconSize} />
          </a>
        )
      })}
    </div>
  )
}
