import { siteContent } from '../../content/site-content.js'
import { Mail, Phone } from 'lucide-react'

function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img
          className="footer-logo"
          src="/images/branding/with-mama-footer-logo.png"
          alt={siteContent.brand.name}
          width="720"
          height="300"
          loading="lazy"
          decoding="async"
        />
        <div className="footer-divider" aria-hidden="true" />

        <div className="footer-contact">
          <a href={`mailto:${siteContent.brand.email}`}>
            <Mail aria-hidden="true" size={18} />
            {siteContent.brand.email}
          </a>
          <a href={`tel:${siteContent.brand.phone.replaceAll(' ', '')}`}>
            <Phone aria-hidden="true" size={18} />
            {siteContent.brand.phone}
          </a>
        </div>

        <img
          className="footer-badge"
          src="/images/branding/doula-network-badge.png"
          alt="Doula Network Australia member badge"
          width="256"
          height="256"
          loading="lazy"
          decoding="async"
        />

        <div className="footer-details">
          <p>© {currentYear} {siteContent.brand.name}. All rights reserved.</p>
          <p>Professional doula services · Melbourne, Victoria, Australia</p>
        </div>

        <nav className="footer-legal" aria-label="Legal">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
        </nav>
      </div>
    </footer>
  )
}

export default SiteFooter
