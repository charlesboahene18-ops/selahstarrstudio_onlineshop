export function AnnouncementMarquee({ messages }) {
  const sourceMessages = Array.isArray(messages) ? messages : [messages]
  const items = Array.from({ length: 4 }, (_, index) =>
    sourceMessages.map((message, messageIndex) => ({
      key: `${index}-${messageIndex}`,
      message,
    })),
  ).flat()

  return (
    <section className="announcement-marquee" aria-label="Studio announcements">
      <div className="announcement-marquee__track">
        {items.map((item) => (
          <span key={item.key}>{item.message}</span>
        ))}
      </div>
    </section>
  )
}
