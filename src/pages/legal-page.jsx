import { useEffect } from "react";
import { siteContent } from "../content/site-content.js";

const LEGAL_PAGES = {
  privacy: {
    title: "Privacy Policy",
    introduction:
      "With Mama Doula respects your privacy and is committed to handling personal information with care.",
    sections: [
      {
        heading: "Information collected",
        paragraphs: [
          "When you contact With Mama Doula through this website, we may collect your name, email address, phone number, and any information you choose to provide during our communications.",
        ],
      },
      {
        heading: "How information is used",
        paragraphs: [
          "Your information is used to respond to your enquiry, discuss doula services, arrange consultations, and provide support that you request.",
          "With Mama Doula does not sell or rent your personal information.",
        ],
      },
      {
        heading: "Service providers",
        paragraphs: [
          "The website contact form is processed by Formspree. Information submitted through the form is also handled in accordance with Formspree’s privacy practices.",
          "Personal information may be disclosed where required by law, or where necessary to protect the rights, safety, or property of With Mama Doula or others.",
        ],
      },
      {
        heading: "Access, correction, and concerns",
        paragraphs: [
          "You may request access to, or correction of, personal information held about you. You may also raise a privacy concern by contacting With Mama Doula using the details below.",
          "This policy may be updated when information-handling practices change. The current version will always be published on this page.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    introduction:
      "These terms set out the conditions for using the With Mama Doula website.",
    sections: [
      {
        heading: "Website information",
        paragraphs: [
          "The information on this website is general in nature and is intended to describe With Mama Doula’s services. It is not medical, legal, psychological, or emergency advice.",
          "For medical concerns, please contact your midwife, doctor, maternity care provider, or emergency services as appropriate.",
        ],
      },
      {
        heading: "Service enquiries",
        paragraphs: [
          "Submitting an enquiry does not create a client relationship or guarantee availability. Services, fees, and arrangements are confirmed separately in writing.",
        ],
      },
      {
        heading: "Acceptable use",
        paragraphs: [
          "You agree not to misuse this website, interfere with its operation, attempt unauthorised access, or submit false, harmful, or unlawful material through the contact form.",
        ],
      },
      {
        heading: "Intellectual property and links",
        paragraphs: [
          "The website’s content, design, and branding belong to With Mama Doula unless otherwise stated. They may not be reproduced or used without permission.",
          "This website may link to third-party services. With Mama Doula is not responsible for the content, availability, or privacy practices of those services.",
        ],
      },
      {
        heading: "Changes to these terms",
        paragraphs: [
          "These terms may be updated from time to time. Your continued use of the website after an update indicates acceptance of the revised terms.",
        ],
      },
    ],
  },
};

function LegalPage({ page }) {
  const content = LEGAL_PAGES[page];

  useEffect(() => {
    document.title = `${content.title} | ${siteContent.brand.name}`;
  }, [content.title]);

  return (
    <main className="legal-page">
      <div className="container legal-page-inner">
        <header className="legal-page-header">
          <h1>{content.title}</h1>
        </header>

        <article className="legal-page-content">
          <p className="legal-page-introduction">{content.introduction}</p>
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>

        <address className="legal-page-contact">
          <strong>Privacy contact</strong>
          <a href={`mailto:${siteContent.brand.email}`}>
            {siteContent.brand.email}
          </a>
          <a href={`tel:${siteContent.brand.phone.replaceAll(" ", "")}`}>
            {siteContent.brand.phone}
          </a>
        </address>
      </div>
    </main>
  );
}

export default LegalPage;
