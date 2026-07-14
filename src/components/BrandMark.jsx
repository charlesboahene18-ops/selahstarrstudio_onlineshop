import { brand } from '../config/brand'

export function BrandMark({ compact = false, inverted = false }) {
  return (
    <span className={`brand-mark ${compact ? 'brand-mark--compact' : ''} ${inverted ? 'brand-mark--inverted' : ''}`.trim()}>
      <strong>{compact ? brand.shortName : brand.name}</strong>
      <em>{compact ? brand.wordmarkSuffix : brand.wordmarkTagline}</em>
    </span>
  )
}
