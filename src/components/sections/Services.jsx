import { siteContent } from '../../data/content.js'

function Services() {
  const service = siteContent.services[0]
  const movingItems = [...service.items, ...service.items]

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading section-heading-full">
          <span className="eyebrow">{service.eyebrow}</span>
          <h2>{service.title}</h2>
          <p>{service.body}</p>
        </div>

        <p className="support-intro">{service.intro}</p>

        <div className="infinite-cards" aria-label="Supported birth settings and paths">
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

        <div className="support-fallback" aria-label="Supported birth settings and paths">
          {service.items.map((item) => (
            <span className="support-chip" key={item}>
              {item}
            </span>
          ))}
        </div>

        <p className="support-note">{service.body}</p>
      </div>
    </section>
  )
}

export default Services
