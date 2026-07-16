import { siteContent } from '../../data/content.js'

function BirthSettings() {
  return (
    <section className="section setting-section" id="birth-settings">
      <div className="container setting-grid">
        <div>
          <span className="eyebrow">{siteContent.settings.eyebrow}</span>
          <h2>{siteContent.settings.title}</h2>
        </div>
        <div className="setting-copy">
          <p>{siteContent.settings.body}</p>
          <ul className="setting-list">
            {siteContent.settings.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BirthSettings