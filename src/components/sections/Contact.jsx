import { useRef } from "react";
import ShinyButton from "../common/ShinyButton.jsx";

function Contact() {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    const form = formRef.current;
    if (!form) return;

    const email = form.elements.namedItem("email");
    const phone = form.elements.namedItem("phone");

    if (
      email instanceof HTMLInputElement &&
      phone instanceof HTMLInputElement
    ) {
      const hasEmail = email.value.trim().length > 0;
      const hasPhone = phone.value.trim().length > 0;

      email.setCustomValidity("");
      phone.setCustomValidity("");

      if (!hasEmail && !hasPhone) {
        const message =
          "Please provide either an email address or a phone number.";
        email.setCustomValidity(message);
        phone.setCustomValidity(message);
        email.reportValidity();
        event.preventDefault();
        return;
      }
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-layout">
        <div className="contact-image-panel" aria-hidden="true">
          <img
            src="/contact.png"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="contact-content">
          <div className="contact-intro">
            <span className="eyebrow">Get in touch</span>
            <h2>Let’s talk about your birth</h2>
            <p>
              Whether you have questions or would simply like to meet for a chat,
              I'd love to hear from you.
            </p>
          </div>

          <form
            ref={formRef}
            className="contact-form"
            action="https://formspree.io/f/your-form-id"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <label htmlFor="name">Your Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Jane Smith"
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="jane@example.com"
              />
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="0400 000 000"
              />
            </div>

            <ShinyButton className="contact-submit" type="submit">
              Send Enquiry
            </ShinyButton>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
