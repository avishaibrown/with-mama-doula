import { siteContent } from '../../data/content.js'

function Process() {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Path</span>
            <h2>From first conversation to postnatal reflection.</h2>
          </div>
          <p>The structure is simple enough to feel calm and specific enough to hold you through preparation, labour, and the return home.</p>
        </div>
        <ol className="process-list">
          {siteContent.process.map((step) => (
            <li className="process-item" key={step.title}>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process