import { siteContent } from '../content/site-content.js'

function MichelleSection() {
  return (
    <section className="section michelle-section" id="michelle">
      <div className="container michelle-layout">
        <div className="michelle-intro">
          <span className="eyebrow">{siteContent.michelle.eyebrow}</span>
          <h2>
            <span className="michelle-title-lead">{siteContent.michelle.titleLead}</span>{' '}
            <span className="michelle-title-body">{siteContent.michelle.titleBody}</span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default MichelleSection
