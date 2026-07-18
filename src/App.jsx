import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navigation from './components/common/Navigation.jsx'
import Footer from './components/common/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Philosophy from './components/sections/Philosophy.jsx'
import Services from './components/sections/Services.jsx'
import BirthSettings from './components/sections/BirthSettings.jsx'
import Qualifications from './components/sections/Qualifications.jsx'
import Package from './components/sections/Package.jsx'
import FAQ from './components/sections/FAQ.jsx'
import Contact from './components/sections/Contact.jsx'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <BirthSettings />
        <Qualifications />
        <Package />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
