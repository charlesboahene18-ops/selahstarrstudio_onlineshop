import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { RevealOnScroll } from './RevealOnScroll'
import { SectionHeading } from './SectionHeading'

export function FAQAccordion({ content, items }) {
  const [openQuestion, setOpenQuestion] = useState(items[0]?.question ?? '')

  return (
    <section className="faq-accordion section" id="faq">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />
      <div className="faq-accordion__list">
        {items.map((item, index) => {
          const isOpen = item.question === openQuestion
          return (
            <RevealOnScroll key={item.question} delay={index * 50}>
              <article className={`faq-accordion__item ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenQuestion(isOpen ? '' : item.question)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                </h3>
                <div className="faq-accordion__answer">
                  <p>{item.answer}</p>
                </div>
              </article>
            </RevealOnScroll>
          )
        })}
      </div>
    </section>
  )
}
