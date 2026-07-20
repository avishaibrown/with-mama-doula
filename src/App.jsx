import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import SiteHeader from './components/layout/site-header.jsx'
import SiteFooter from './components/layout/site-footer.jsx'
import HeroSection from './sections/hero-section.jsx'
import PhilosophySection from './sections/philosophy-section.jsx'
import SupportSection from './sections/support-section.jsx'
import MichelleSection from './sections/michelle-section.jsx'
import QualificationsSection from './sections/qualifications-section.jsx'
import OfferingsSection from './sections/offerings-section.jsx'
import FaqSection from './sections/faq-section.jsx'
import ContactSection from './sections/contact-section.jsx'
import LegalPage from './pages/legal-page.jsx'

const LEGAL_PATHS = {
  '/privacy-policy': 'privacy',
  '/terms': 'terms',
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const legalPage = LEGAL_PATHS[path]

  if (legalPage) {
    return (
      <>
        <SiteHeader />
        <LegalPage page={legalPage} />
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </>
    )
  }

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <MichelleSection />
        <PhilosophySection />
        <SupportSection />
        <QualificationsSection />
        <OfferingsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
