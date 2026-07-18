import { ArrowRight, ChevronDown } from 'lucide-react'
import { siteContent } from '../../data/content.js'

function Hero() {
  const heroWords = siteContent.hero.title.split(' ')

  return (
    <section className="hero-section" id="top">
      <picture className="hero-media">
        <source
          type="image/jpeg"
          srcSet="/hero/hero-800.jpg 800w, /hero/hero-1200.jpg 1200w, /hero/hero-1600.jpg 1600w"
          sizes="(max-width: 860px) 100vw, 100vw"
        />
        <img
          src="/hero/hero-1600.jpg"
          alt="A ceremonial birth ritual arranged on a pink woven mat with candles, flowers, and natural elements"
          decoding="async"
        />
      </picture>
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title" aria-label={siteContent.hero.title}>
            {heroWords.map((word, index) => (
              <span
                className="hero-title-word"
                key={`${word}-${index}`}
                style={{ '--word-delay': `${index * 85}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>
          {Array.isArray(siteContent.hero.body) ? (
            siteContent.hero.body.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>{siteContent.hero.body}</p>
          )}
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#contact">
              Book a free discovery call <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#offerings">
              View offerings
            </a>
          </div>
          <a className="hero-scroll" href="#philosophy" aria-label="Scroll to the next section">
            <ChevronDown size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
