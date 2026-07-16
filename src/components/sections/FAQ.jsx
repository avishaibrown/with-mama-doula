import { siteContent } from '../../data/content.js'

function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div>
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

export default FAQ