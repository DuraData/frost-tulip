import { useState } from "react";
import { Link } from "react-router-dom";
import { company } from "../data/siteData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { CheckIcon, ClockIcon, MailIcon, MapPinIcon, PhoneIcon, SendIcon, WhatsAppIcon } from "../components/icons";
import { PageHero, Placeholder } from "../components/common";

export function ContactPage() {
  useDocumentTitle(`Contact - ${company.name}`);
  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});

  function validate() {
    const nextErrors = {};
    if (!fields.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email)) nextErrors.email = "Enter a valid email.";
    if (!fields.message.trim()) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        title="Let's talk about your project."
        kicker="Get In Touch"
        lead="Reach out by form, phone or WhatsApp. Our team typically responds within one business day."
        crumbs="Contact"
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: "flex-start" }}>
            <div>
              <div className="card card-pad">
                <h3 style={{ marginBottom: 8 }}>Send us a message</h3>
                <p className="muted" style={{ marginBottom: 26, fontSize: ".95rem" }}>
                  Fill in the form and we'll get back to you.
                </p>
                {submitted ? (
                  <div className="form-success">
                    <CheckIcon />
                    <span>Thanks. Your message has been received. We'll be in touch shortly.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid cols-2" style={{ gap: "0 18px" }}>
                      <div className={`field${errors.name ? " invalid" : ""}`}>
                        <label>Full Name</label>
                        <input className="input" value={fields.name} onChange={(event) => setFields({ ...fields, name: event.target.value })} />
                        <div className="field-error">{errors.name}</div>
                      </div>
                      <div className={`field${errors.email ? " invalid" : ""}`}>
                        <label>Email</label>
                        <input className="input" value={fields.email} onChange={(event) => setFields({ ...fields, email: event.target.value })} />
                        <div className="field-error">{errors.email}</div>
                      </div>
                      <div className="field">
                        <label>Phone</label>
                        <input className="input" value={fields.phone} onChange={(event) => setFields({ ...fields, phone: event.target.value })} />
                      </div>
                      <div className="field">
                        <label>Subject</label>
                        <input className="input" value={fields.subject} onChange={(event) => setFields({ ...fields, subject: event.target.value })} />
                      </div>
                    </div>
                    <div className={`field${errors.message ? " invalid" : ""}`}>
                      <label>Message</label>
                      <textarea className="textarea" value={fields.message} onChange={(event) => setFields({ ...fields, message: event.target.value })} />
                      <div className="field-error">{errors.message}</div>
                    </div>
                    <button className="btn btn-primary btn-block btn-lg" type="submit">
                      Send Message
                      <SendIcon />
                    </button>
                    <p className="form-note" style={{ marginTop: 14 }}>
                      By submitting you agree to be contacted about your enquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>

            <div>
              <div className="grid" style={{ gap: 14 }}>
                <div className="card info-tile">
                  <span className="it-icon"><MapPinIcon /></span>
                  <div>
                    <h4>Head Office</h4>
                    <p>{company.address}</p>
                  </div>
                </div>
                <div className="card info-tile">
                  <span className="it-icon"><PhoneIcon /></span>
                  <div>
                    <h4>Call Us</h4>
                    <p>
                      <a href={`tel:${company.phone}`}>{company.phone}</a>
                      <br />
                      <a href={`tel:${company.phoneAlt}`}>{company.phoneAlt}</a>
                    </p>
                  </div>
                </div>
                <div className="card info-tile">
                  <span className="it-icon"><MailIcon /></span>
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href={`mailto:${company.email}`}>{company.email}</a>
                      <br />
                      <a href={`mailto:${company.projectsEmail}`}>{company.projectsEmail}</a>
                    </p>
                  </div>
                </div>
                <div className="card info-tile">
                  <span className="it-icon"><ClockIcon /></span>
                  <div>
                    <h4>Office Hours</h4>
                    <p>Mon - Fri: 08:00 - 17:00<br />Sat: 08:00 - 13:00<br />Sun and Public Holidays: Closed</p>
                  </div>
                </div>
                <a className="btn btn-primary btn-block btn-lg" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" style={{ background: "#25d366" }}>
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="map-wrap">
            <Placeholder label="Interactive map Harare Zimbabwe" />
            <div className="map-pin">
              <MapPinIcon />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
