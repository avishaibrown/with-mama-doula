import { siteContent } from '../../data/content.js'

function Testimonials() {
  return (
    <section className="section section-alt" id="testimonials">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Notes</span>
            <h2>Statements to return to.</h2>
          </div>
          <p>Until there are client stories ready to share, this space can hold the practice principles in plain language.</p>
        </div>
        <div className="testimonial-grid">
          {siteContent.testimonials.map((testimonial) => (
            <figure className="testimonial" key={testimonial.quote}>
              <p>{testimonial.quote}</p>
              <cite>{testimonial.author}</cite>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials