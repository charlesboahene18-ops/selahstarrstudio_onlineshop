import { useState } from 'react'
import { SectionHeading } from './SectionHeading'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function MembershipForm({ content }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      setStatus('error')
      setMessage(content.emptyMessage)
      return
    }

    if (!emailPattern.test(email.trim())) {
      setStatus('error')
      setMessage(content.invalidMessage)
      return
    }

    setStatus('success')
    setMessage(content.successMessage)
    setEmail('')
  }

  return (
    <section className="membership-form section" id="membership">
      <div className="membership-form__card">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        <form className="membership-form__form" onSubmit={onSubmit} noValidate>
          <label htmlFor="membership-email">Email address</label>
          <div className={`membership-form__input ${status === 'error' ? 'has-error' : ''} ${status === 'success' ? 'has-success' : ''}`}>
            <input
              id="membership-email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (status !== 'idle') {
                  setStatus('idle')
                  setMessage('')
                }
              }}
              placeholder={content.placeholder || 'Enter your email'}
              aria-describedby="membership-feedback"
            />
            <button type="submit" aria-label={content.buttonLabel}>
              {content.buttonLabel}
            </button>
          </div>
          <p id="membership-feedback" className={`membership-form__feedback membership-form__feedback--${status}`}>
            {message || content.idleMessage}
          </p>
        </form>
      </div>
    </section>
  )
}
