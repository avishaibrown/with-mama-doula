import { siteContent } from '../../content/site-content.js'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const isLegalPage = typeof window !== 'undefined' && window.location.pathname !== '/'
  const homeHref = isLegalPage ? '/#top' : '#top'

  const getNavHref = (href) => (isLegalPage ? `/${href}` : href)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href={homeHref} aria-label={`${siteContent.brand.name} home`}>
          <img
            className="brand-logo"
            src="/images/branding/with-mama-logo.png"
            alt=""
            width="720"
            height="300"
          />
        </a>
        <div className="nav-desktop">
          <nav className="nav-links" aria-label="Primary navigation">
            {siteContent.nav.map((item) => (
              <a key={item.href} href={getNavHref(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="nav-mobile">
          <button
            className="nav-menu-button"
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={30} aria-hidden="true" /> : <Menu size={30} aria-hidden="true" />}
          </button>
          {isOpen ? (
            <nav className="nav-mobile-menu" id="mobile-nav" aria-label="Mobile navigation">
              {siteContent.nav.map((item) => (
                <a
                  key={item.href}
                  href={getNavHref(item.href)}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
