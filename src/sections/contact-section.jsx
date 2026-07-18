import { useEffect, useRef, useState } from 'react'
import ShinyButton from '../components/ui/shiny-button.jsx'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdaqeqbe'
const SUBMISSION_COOLDOWN_MS = 60_000
const REQUEST_TIMEOUT_MS = 15_000
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const NAME_PATTERN = /^[\p{L}][\p{L}\p{M}\s.'-]{1,79}$/u
const PHONE_PATTERN = /^[0-9+().\s-]{8,25}$/
const HONEYPOT_STYLE = {
  height: 1,
  left: '-10000px',
  overflow: 'hidden',
  position: 'absolute',
  top: 'auto',
  width: 1,
}

// React escapes rendered values; this additionally removes control characters and HTML delimiters
// before validation or transmission to reduce unsafe payloads in downstream integrations.
function sanitizeText(value) {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/[<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function getFieldError({ name, email, phone }) {
  if (!NAME_PATTERN.test(name)) {
    return {
      field: 'name',
      message: 'Enter your full name using letters, spaces, apostrophes, or hyphens.',
    }
  }

  if (!email && !phone) {
    return {
      field: 'email',
      message: 'Please provide either an email address or a phone number.',
    }
  }

  if (email && (!EMAIL_PATTERN.test(email) || email.length > 254)) {
    return { field: 'email', message: 'Enter a valid email address.' }
  }

  const phoneDigits = phone.replace(/\D/g, '')
  if (phone && (!PHONE_PATTERN.test(phone) || phoneDigits.length < 8)) {
    return { field: 'phone', message: 'Enter a valid phone number.' }
  }

  return null
}

function ContactSection() {
  const formRef = useRef(null)
  const [submissionState, setSubmissionState] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [cooldownUntil, setCooldownUntil] = useState(0)
  const [cooldownSeconds, setCooldownSeconds] = useState(0)

  // Keep the cooldown text accurate without leaving an interval running after it expires.
  useEffect(() => {
    if (!cooldownUntil) return undefined

    const updateCooldown = () => {
      const remaining = Math.max(0, Math.ceil((cooldownUntil - Date.now()) / 1_000))
      setCooldownSeconds(remaining)

      if (remaining === 0) {
        setCooldownUntil(0)
      }
    }

    updateCooldown()
    const intervalId = window.setInterval(updateCooldown, 1_000)
    return () => window.clearInterval(intervalId)
  }, [cooldownUntil])

  const clearFieldError = (event) => {
    event.currentTarget.setCustomValidity('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = formRef.current
    if (!form || submissionState === 'submitting' || cooldownUntil > Date.now()) return

    const nameInput = form.elements.namedItem('name')
    const emailInput = form.elements.namedItem('email')
    const phoneInput = form.elements.namedItem('phone')
    const honeypotInput = form.elements.namedItem('_gotcha')

    if (
      !(nameInput instanceof HTMLInputElement) ||
      !(emailInput instanceof HTMLInputElement) ||
      !(phoneInput instanceof HTMLInputElement) ||
      !(honeypotInput instanceof HTMLInputElement)
    ) {
      setSubmissionState('error')
      setStatusMessage('The form could not be prepared. Please refresh and try again.')
      return
    }

    // Bots often fill hidden inputs. Do not submit or reveal the honeypot check.
    if (honeypotInput.value) return

    const values = {
      name: sanitizeText(nameInput.value),
      email: sanitizeText(emailInput.value).toLowerCase(),
      phone: sanitizeText(phoneInput.value),
    }

    nameInput.value = values.name
    emailInput.value = values.email
    phoneInput.value = values.phone
    nameInput.setCustomValidity('')
    emailInput.setCustomValidity('')
    phoneInput.setCustomValidity('')

    const validationError = getFieldError(values)
    if (validationError) {
      const input = form.elements.namedItem(validationError.field)
      if (input instanceof HTMLInputElement) {
        input.setCustomValidity(validationError.message)
        input.reportValidity()
      }
      return
    }

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setSubmissionState('submitting')
    setStatusMessage('Sending your enquiry…')

    const controller = new AbortController()
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
    const payload = new FormData()
    payload.set('name', values.name)
    payload.set('email', values.email)
    payload.set('phone', values.phone)
    payload.set('_subject', 'New With Mama Doula enquiry')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      })

      if (!response.ok) throw new Error('Formspree rejected the submission.')

      form.reset()
      setSubmissionState('success')
      setStatusMessage('Thank you for your enquiry! Michelle will be in touch soon.')
    } catch {
      setSubmissionState('error')
      setStatusMessage('We could not send your enquiry. Please try again shortly.')
    } finally {
      window.clearTimeout(timeoutId)
      setCooldownUntil(Date.now() + SUBMISSION_COOLDOWN_MS)
    }
  }

  const isSubmitDisabled = submissionState === 'submitting' || cooldownSeconds > 0
  const submitLabel = submissionState === 'submitting'
    ? 'Sending…'
    : cooldownSeconds > 0
      ? `Please wait ${cooldownSeconds}s`
      : 'Send Enquiry'

  return (
    <section className="section" id="contact">
      <div className="container contact-layout">
        <div className="contact-image-panel" aria-hidden="true">
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/contact/contact-800.png" width="800" height="782" />
            <img src="/images/contact/contact-1200.png" alt="" width="1200" height="1174" loading="lazy" decoding="async" />
          </picture>
        </div>

        <div className="contact-content">
          <div className="contact-intro">
            <span className="eyebrow">Get in touch</span>
            <h2>Let’s talk about your birth</h2>
            <p>Whether you have questions or would simply like to meet for a chat, I&apos;d love to hear from you.</p>
          </div>

          <form ref={formRef} className="contact-form" action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleSubmit} noValidate>
            {/* Honeypot: hidden from people and assistive technology, but attractive to basic bots. */}
            <div aria-hidden="true" style={HONEYPOT_STYLE}>
              <label htmlFor="company">Company</label>
              <input id="company" name="_gotcha" type="text" tabIndex="-1" autoComplete="off" />
            </div>

            <div className="form-row">
              <label htmlFor="name">Your Name *</label>
              <input id="name" name="name" type="text" autoComplete="name" required minLength="2" maxLength="80" pattern="[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ .'-]{1,79}" placeholder="Jane Smith" onInput={clearFieldError} />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" autoComplete="email" inputMode="email" maxLength="254" placeholder="jane@example.com" onInput={clearFieldError} />
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" minLength="8" maxLength="25" pattern="[0-9+(). -]{8,25}" placeholder="0400 000 000" onInput={clearFieldError} />
            </div>

            <ShinyButton className="contact-submit" type="submit" disabled={isSubmitDisabled} aria-disabled={isSubmitDisabled}>
              {submitLabel}
            </ShinyButton>

            <p className={`contact-form-status is-${submissionState}`} role="status" aria-live="polite">
              {statusMessage}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
