import { ArrowRight, ChevronDown } from 'lucide-react'
import { siteContent } from '../content/site-content.js'

function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <picture className="hero-media">
        <source
          type="image/jpeg"
          srcSet="/images/hero/birth-ritual-800.jpg 800w, /images/hero/birth-ritual-1200.jpg 1200w, /images/hero/birth-ritual-1600.jpg 1600w"
          sizes="(max-width: 860px) 100vw, 100vw"
        />
        <img
          src="/images/hero/birth-ritual-1600.jpg"
          alt="A ceremonial birth ritual arranged on a pink woven mat with candles, flowers, and natural elements"
          width="1600"
          height="1200"
          decoding="async"
        />
      </picture>
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">{siteContent.hero.title}</h1>
          {Array.isArray(siteContent.hero.body) ? (
            siteContent.hero.body.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>{siteContent.hero.body}</p>
          )}
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#contact">
              Book a connection call <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#offerings">
              View offerings
            </a>
          </div>
          <a className="hero-scroll" href="#michelle" aria-label="Scroll to the next section">
            <ChevronDown size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
