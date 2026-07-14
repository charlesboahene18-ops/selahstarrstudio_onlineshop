export function DeviceMockup({ variant = 'desktop', className = '', children }) {
  return (
    <div className={`device-mockup device-mockup--${variant} ${className}`.trim()}>
      <div className="device-mockup__screen">{children}</div>
    </div>
  )
}
