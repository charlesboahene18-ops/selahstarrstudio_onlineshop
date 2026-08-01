export function AnnouncementMarquee({ messages }) {
  const sourceMessages = Array.isArray(messages) ? messages : [messages]

  return (
    <section className="announcement-marquee" aria-label="Studio announcements">
      <div className="announcement-marquee__track">
        {sourceMessages.map((message, index) => (
          <span key={`${message}-${index}`}>
            {message}
            {index < sourceMessages.length - 1 ? <i aria-hidden="true">·</i> : null}
          </span>
        ))}
      </div>
    </section>
  )
}
