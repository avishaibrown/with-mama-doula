import { siteContent } from '../../data/content.js'
import AnimatedList from '../common/AnimatedList.jsx'
import { Brain, BookOpen, Heart, Sparkles, ShieldCheck, Users } from 'lucide-react'

function Qualifications() {
  const qualifications = siteContent.qualifications
  const expectationIcons = [Heart, BookOpen, Brain, Sparkles, Users, ShieldCheck]

  return (
    <section className="section qualifications-section" id="qualifications">
      <div className="container qualifications-layout">
        <div className="qualifications-top">
          <div className="qualifications-intro">
            <h2>{qualifications.title}</h2>
            <p className="qualifications-intro-copy">{qualifications.intro}</p>
            {qualifications.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="qualifications-expectations qualifications-expectations-top">
            <h3>{qualifications.expectationsIntro}</h3>
            <AnimatedList className="expectation-list" delay={180}>
              {qualifications.expectations.map((item, index) => {
                const Icon = expectationIcons[index] ?? Heart

                return (
                  <article className="expectation-card" key={item}>
                    <Icon className="expectation-card-icon" aria-hidden="true" />
                    <p>{item}</p>
                  </article>
                )
              })}
            </AnimatedList>
          </div>
        </div>

        <div className="qualifications-content">
          <div className="qualifications-credentials">
            <div className="qualifications-eyebrow-row">
              <span className="eyebrow">{qualifications.eyebrow}</span>
            </div>

            <div className="qualifications-affiliations" aria-label="Qualifications">
              <div className="qualification-affiliation qualification-affiliation-badge">
                <img
                  className="qualifications-badge"
                  src="/DNA-member-logo.png"
                  alt="Doula Network Australia badge"
                />
              </div>
              {qualifications.affiliations.slice(1).map((item) => (
                <article
                  className={`qualification-affiliation ${item.logo ? '' : 'qualification-affiliation-text-only'}`.trim()}
                  key={item.label}
                >
                  {item.logo ? <img src={item.logo} alt="" aria-hidden="true" /> : null}
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualifications
