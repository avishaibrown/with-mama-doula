import { Check, ChevronDown } from 'lucide-react'
import { siteContent } from '../content/site-content.js'
import { BentoCard, BentoGrid } from '../components/ui/bento-grid.jsx'

function OfferingsSection() {
  const offerings = siteContent.offerings

  return (
    <section className="section section-alt offerings-section" id="offerings">
      <div className="container offerings-layout">
        <div className="offerings-intro-block">
          <span className="eyebrow">{offerings.eyebrow}</span>
          <h2>{offerings.title}</h2>
          <p className="offerings-intro">{offerings.intro}</p>
        </div>
        <BentoGrid className="offerings-grid">
          {offerings.sections.map((section, index) => (
            <BentoCard
              className={`offerings-card offerings-card-${index} ${index === 0 ? 'offerings-span-7' : index === 1 ? 'offerings-span-5' : 'offerings-span-12'}`}
              key={section.title}
            >
              <h3>{section.title}</h3>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <details className="offering-details">
                <summary>
                  <span>{section.label}</span>
                  <ChevronDown className="offering-chevron" size={22} aria-hidden="true" />
                </summary>
                <ul className="offering-list">
                  {section.items.map((item) => (
                    <li key={item}>
                      <Check size={18} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </BentoCard>
          ))}

          <BentoCard className="offerings-card offerings-card-intro offerings-span-12">
            <h3>{offerings.priceTitle}</h3>
            <div className="offerings-price">{offerings.price}</div>
            <p>{offerings.note}</p>
            <p>{offerings.extraNote}</p>
            <a className="button button-primary" href="#contact">
              Inquire first
            </a>
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  )
}

export default OfferingsSection
