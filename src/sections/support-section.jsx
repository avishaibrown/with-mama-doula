import { siteContent } from '../content/site-content.js'

function SupportSection() {
  const support = siteContent.support
  const movingItems = [...support.items, ...support.items]

  return (
    <section className="section" id="support">
      <div className="container">
        <div className="section-heading section-heading-full">
          <span className="eyebrow">{support.eyebrow}</span>
          <h2>{support.title}</h2>
        </div>

        <p className="support-intro">{support.intro}</p>

        <div className="infinite-cards" aria-label="Supported birth experiences">
          <div className="infinite-track">
            {movingItems.map((item, index) => (
              <article className="moving-card" key={`${item}-${index}`}>
                <p>{item}</p>
              </article>
            ))}
          </div>
          <div className="infinite-track" aria-hidden="true">
            {movingItems.map((item, index) => (
              <article className="moving-card" key={`${item}-${index}-clone`}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="support-fallback" aria-label="Supported birth experiences">
          {support.items.map((item) => (
            <span className="support-chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SupportSection
