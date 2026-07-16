import { siteContent } from '../../data/content.js'

function Philosophy() {
  return (
    <section className="section philosophy-section" id="philosophy">
      <div className="container philosophy-grid">
        <div>
          <span className="eyebrow">{siteContent.philosophy.eyebrow}</span>
          <h2>{siteContent.philosophy.title}</h2>
        </div>
        <div className="editorial-copy">
          <blockquote>{siteContent.philosophy.quote}</blockquote>
          {siteContent.philosophy.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Philosophy