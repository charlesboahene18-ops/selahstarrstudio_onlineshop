export function Button({ as: Tag = 'button', className = '', children, ...props }) {
  return (
    <Tag className={`button ${className}`.trim()} {...props}>
      <span>{children}</span>
    </Tag>
  )
}
