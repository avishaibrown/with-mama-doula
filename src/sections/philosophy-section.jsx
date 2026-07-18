import { siteContent } from '../content/site-content.js'

function PhilosophySection() {
  return (
    <section className="section philosophy-section" id="philosophy">
      <div className="container philosophy-stack">
        <div className="philosophy-intro">
          <span className="eyebrow">{siteContent.philosophy.eyebrow}</span>
          <h2>{siteContent.philosophy.title}</h2>
          <p className="philosophy-lead">{siteContent.philosophy.intro}</p>
          <ul className="philosophy-benefits">
            {siteContent.philosophy.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="philosophy-copy">
          <span className="eyebrow">{siteContent.philosophy.philosophyLabel}</span>
          <blockquote>{siteContent.philosophy.philosophyLead}</blockquote>
          <div className="philosophy-lines">
            {siteContent.philosophy.philosophyPoints.map((line) => (
              <p key={line} className="philosophy-line">
                {line}
              </p>
            ))}
          </div>
          {siteContent.philosophy.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection
