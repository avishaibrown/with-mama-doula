import { siteContent } from '../../data/content.js'

function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-photo" role="img" aria-label="Documentary portrait of motherhood" />
        <div className="about-copy">
          <span className="eyebrow">{siteContent.about.eyebrow}</span>
          <h2>{siteContent.about.title}</h2>
          {siteContent.about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About