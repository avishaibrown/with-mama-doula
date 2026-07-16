import { Mail, MapPin, Phone } from 'lucide-react'
import { siteContent } from '../../data/content.js'

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div className="contact-panel">
          <span className="eyebrow">Contact</span>
          <h2>Begin with a conversation.</h2>
          <p>Share what season you are in, what kind of birth or postpartum support you are seeking, and what you already know you do not want.</p>
          <ul className="contact-list">
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${siteContent.brand.email}`}>{siteContent.brand.email}</a>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href={`tel:${siteContent.brand.phone.replaceAll(' ', '')}`}>{siteContent.brand.phone}</a>
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>{siteContent.brand.location}</span>
            </li>
          </ul>
        </div>
        <form className="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="form-row split-row">
            <div>
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div>
              <label htmlFor="due-date">Due date or month</label>
              <input id="due-date" name="due-date" type="text" />
            </div>
          </div>
          <div className="form-row split-row">
            <div>
              <label htmlFor="suburb">Suburb / location</label>
              <input id="suburb" name="suburb" type="text" />
            </div>
            <div>
              <label htmlFor="setting">Planned birth setting</label>
              <input id="setting" name="setting" type="text" />
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="message">What would you like support with?</label>
            <textarea id="message" name="message" required />
          </div>
          <button className="button button-primary" type="submit">Send enquiry</button>
        </form>
      </div>
    </section>
  )
}

export default Contact