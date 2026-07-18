import { siteContent } from '../../data/content.js'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label={`${siteContent.brand.name} home`}>
          <img className="brand-logo" src="/with-mama-logo.png" alt="" />
        </a>
        <div className="nav-desktop">
          <nav className="nav-links" aria-label="Primary navigation">
            {siteContent.nav.map((item) => (
              <a key={item.href} href={item.href}>
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
                <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
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

export default Navigation
