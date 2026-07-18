import { siteContent } from '../../data/content.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img className="footer-logo" src="/with-mama-logo.png" alt={siteContent.brand.name} />
        <p>Quiet birth and postpartum companionship. Inspired by para mama: being with the mother.</p>
        <div className="footer-contact">
          <a href={`tel:${siteContent.brand.phone.replaceAll(' ', '')}`}>{siteContent.brand.phone}</a>
          <a href={`mailto:${siteContent.brand.email}`}>{siteContent.brand.email}</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
