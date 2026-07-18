import { siteContent } from '../../data/content.js'

function BirthSettings() {
  return (
    <section className="section about-me-section" id="about-me">
      <div className="container about-me-layout">
        <div className="about-me-intro">
          <span className="eyebrow">{siteContent.aboutMe.eyebrow}</span>
          <h2>
            <span className="about-me-title-lead">{siteContent.aboutMe.titleLead}</span>{' '}
            <span className="about-me-title-body">{siteContent.aboutMe.titleBody}</span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default BirthSettings
