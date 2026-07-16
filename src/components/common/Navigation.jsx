import { siteContent } from '../../data/content.js'

function Navigation() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label={`${siteContent.brand.name} home`}>
          <img className="brand-logo" src="/with-mama-logo.png" alt="" />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navigation