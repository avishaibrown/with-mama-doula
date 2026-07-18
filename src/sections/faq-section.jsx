import { siteContent } from '../content/site-content.js'

function FaqSection() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div className="faq-intro">
          <span className="eyebrow">FAQ</span>
          <h2>Questions before the first conversation.</h2>
        </div>
        <div className="faq-list">
          {siteContent.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
