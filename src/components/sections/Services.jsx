import { Heart, Shield, Users } from 'lucide-react'
import { siteContent } from '../../data/content.js'

const icons = {
  heart: Heart,
  users: Users,
  shield: Shield,
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Doula support</span>
            <h2>Pregnancy, birth, and postpartum care.</h2>
          </div>
          <p>Compassionate, continuous support through pregnancy, birth, and postpartum, so you feel informed, held, and supported every step of the way.</p>
        </div>
        <div className="card-grid">
          {siteContent.services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <article className="card" key={service.title}>
                <span className="card-icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services