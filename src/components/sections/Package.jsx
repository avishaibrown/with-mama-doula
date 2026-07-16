import { Check } from 'lucide-react'
import { siteContent } from '../../data/content.js'

function Package() {
  return (
    <section className="section section-alt package-section" id="package">
      <div className="container package-grid">
        <div>
          <span className="eyebrow">{siteContent.package.eyebrow}</span>
          <h2>{siteContent.package.title}</h2>
        </div>
        <article className="package-panel">
          <div className="package-price">{siteContent.package.price}</div>
          <p>{siteContent.package.note}</p>
          <h3>Includes</h3>
          <ul>
            {siteContent.package.includes.map((item) => (
              <li key={item}>
                <Check size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a className="button button-primary" href="#contact">Inquire first</a>
        </article>
      </div>
    </section>
  )
}

export default Package