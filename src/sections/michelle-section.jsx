import { siteContent } from '../content/site-content.js'

function MichelleSection() {
  return (
    <section className="section michelle-section" id="michelle">
      <div className="container michelle-layout">
        <picture className="michelle-portrait">
          <source
            type="image/jpeg"
            srcSet="/images/michelle/michelle-portrait-900.jpg 691w, /images/michelle/michelle-portrait-1400.jpg 1075w"
            sizes="(max-width: 860px) calc(100vw - 2rem), 42vw"
          />
          <img
            src="/images/michelle/michelle-portrait-1400.jpg"
            alt="Michelle from With Mama Doula seated at a table holding a cup"
            width="1075"
            height="1400"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="michelle-intro">
          <span className="eyebrow">{siteContent.michelle.eyebrow}</span>
          <h2>{siteContent.michelle.titleLead}</h2>
          <p>{siteContent.michelle.titleBody}</p>
        </div>
      </div>
    </section>
  )
}

export default MichelleSection
