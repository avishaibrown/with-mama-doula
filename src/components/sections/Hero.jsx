import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { siteContent } from '../../data/content.js'

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{siteContent.hero.eyebrow}</span>
          <h1>{siteContent.hero.title}</h1>
          {Array.isArray(siteContent.hero.body) ? (
            siteContent.hero.body.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>{siteContent.hero.body}</p>
          )}
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#contact">
              Book a free discovery call <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#package">
              View birth support package
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Care principles">
          <span className="eyebrow">Care is</span>
          <ul>
            {siteContent.hero.highlights.map((item) => (
              <li key={item}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Hero