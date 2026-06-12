import { useState } from "react";
import { Link } from "react-router-dom";
import { company, services } from "../data/siteData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ArrowIcon, CheckIcon, SendIcon } from "../components/icons";
import { HeroSliderBackground } from "../components/common";

export function QuotePage() {
  useDocumentTitle(`Get a Quote - ${company.name}`);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [fileLabel, setFileLabel] = useState("Drop files here or click to browse");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "",
    budget: "",
    location: "",
    desc: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});

  function validateStep(currentStep) {
    const nextErrors = {};
    if (currentStep === 1) {
      if (!form.name.trim()) nextErrors.name = "Required.";
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) nextErrors.email = "Enter a valid email.";
      if (!form.phone.trim()) nextErrors.phone = "Required.";
    }
    if (currentStep === 2) {
      if (!form.type) nextErrors.type = "Please choose a type.";
      if (!form.budget) nextErrors.budget = "Please choose a range.";
      if (!form.desc.trim()) nextErrors.desc = "Please describe your project.";
    }
    if (currentStep === 3 && !form.consent) {
      nextErrors.consent = "Please confirm to continue.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function nextStep() {
    if (!validateStep(step)) return;
    setStep((value) => Math.min(value + 1, 3));
  }

  function prevStep() {
    setStep((value) => Math.max(value - 1, 1));
  }

  function submit(event) {
    event.preventDefault();
    if (!validateStep(3)) return;
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <HeroSliderBackground label="Blueprints and project planning" />
        <div className="container">
          <div className="crumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Get a Quote</span>
          </div>
          <p className="kicker">Free and No Obligation</p>
          <h1>Request your project quote.</h1>
          <p className="lead">Three quick steps. We'll review your details and respond with a tailored proposal within 48 hours.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="card card-pad">
            {!submitted ? (
              <>
                <div className="steps-bar">
                  {[1, 2, 3].map((number) => (
                    <div key={number} className={`step-pip${step === number ? " active" : ""}${step > number ? " done" : ""}`}>
                      <div className="lbl">
                        <span className="n">{`0${number}`}</span>
                        <span>{number === 1 ? "Your Details" : number === 2 ? "Project Info" : "Review"}</span>
                      </div>
                      <div className="bar"><i /></div>
                    </div>
                  ))}
                </div>

                <form onSubmit={submit} noValidate>
                  {step === 1 ? (
                    <div>
                      <h3 style={{ marginBottom: 24 }}>Tell us about you</h3>
                      <div className="grid cols-2" style={{ gap: "0 18px" }}>
                        <div className={`field${errors.name ? " invalid" : ""}`}>
                          <label>Full Name</label>
                          <input className="input" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
                          <div className="field-error">{errors.name}</div>
                        </div>
                        <div className="field">
                          <label>Company</label>
                          <input className="input" value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} />
                        </div>
                        <div className={`field${errors.email ? " invalid" : ""}`}>
                          <label>Email</label>
                          <input className="input" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
                          <div className="field-error">{errors.email}</div>
                        </div>
                        <div className={`field${errors.phone ? " invalid" : ""}`}>
                          <label>Phone</label>
                          <input className="input" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
                          <div className="field-error">{errors.phone}</div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {step === 2 ? (
                    <div>
                      <h3 style={{ marginBottom: 24 }}>About your project</h3>
                      <div className="grid cols-2" style={{ gap: "0 18px" }}>
                        <div className={`field${errors.type ? " invalid" : ""}`}>
                          <label>Project Type</label>
                          <select className="select" value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })}>
                            <option value="">Select...</option>
                            {services.map((service) => (
                              <option key={service.id}>{service.title}</option>
                            ))}
                            <option>Other</option>
                          </select>
                          <div className="field-error">{errors.type}</div>
                        </div>
                        <div className={`field${errors.budget ? " invalid" : ""}`}>
                          <label>Budget Range</label>
                          <select className="select" value={form.budget} onChange={(event) => setForm({ ...form, budget: event.target.value })}>
                            <option value="">Select...</option>
                            <option>Under $50,000</option>
                            <option>$50,000 - $250,000</option>
                            <option>$250,000 - $1M</option>
                            <option>$1M - $5M</option>
                            <option>$5M+</option>
                          </select>
                          <div className="field-error">{errors.budget}</div>
                        </div>
                      </div>
                      <div className="field">
                        <label>Project Location</label>
                        <input className="input" value={form.location} onChange={(event) => setForm({ ...form, location: event.target.value })} />
                      </div>
                      <div className={`field${errors.desc ? " invalid" : ""}`}>
                        <label>Project Description</label>
                        <textarea className="textarea" value={form.desc} onChange={(event) => setForm({ ...form, desc: event.target.value })} />
                        <div className="field-error">{errors.desc}</div>
                      </div>
                      <div className="field">
                        <label>Attach Plans / Documents</label>
                        <label className="file-drop" htmlFor="quote-file">
                          <div>{fileLabel}</div>
                          <p className="form-note" style={{ marginTop: 6 }}>PDF, DWG, JPG, PNG up to 20MB</p>
                        </label>
                        <input
                          id="quote-file"
                          type="file"
                          className="hidden"
                          multiple
                          onChange={(event) => setFileLabel(event.target.files?.length ? `${event.target.files.length} file(s) selected` : "Drop files here or click to browse")}
                        />
                      </div>
                    </div>
                  ) : null}

                  {step === 3 ? (
                    <div>
                      <h3 style={{ marginBottom: 24 }}>Review and submit</h3>
                      <div className="card" style={{ background: "var(--bg)" }}>
                        <div className="card-pad" style={{ padding: 24 }}>
                          {[
                            ["Name", form.name],
                            ["Company", form.company || "-"],
                            ["Email", form.email],
                            ["Phone", form.phone],
                            ["Project Type", form.type],
                            ["Budget", form.budget],
                            ["Location", form.location || "-"],
                            ["Description", form.desc],
                          ].map(([label, value]) => (
                            <div key={label} className="review-row">
                              <div className="review-key">{label}</div>
                              <div>{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={`field${errors.consent ? " invalid" : ""}`} style={{ marginTop: 22 }}>
                        <label style={{ display: "flex", alignItems: "center", gap: 10, textTransform: "none", letterSpacing: 0, fontFamily: "var(--font-body)", fontSize: ".95rem" }}>
                          <input
                            type="checkbox"
                            checked={form.consent}
                            onChange={(event) => setForm({ ...form, consent: event.target.checked })}
                            style={{ width: 18, height: 18, accentColor: "var(--accent)" }}
                          />
                          I confirm the information above is correct and agree to be contacted.
                        </label>
                        <div className="field-error">{errors.consent}</div>
                      </div>
                    </div>
                  ) : null}

                  <div className="steps-nav">
                    <button type="button" className="btn btn-outline" onClick={prevStep} style={{ visibility: step === 1 ? "hidden" : "visible" }}>
                      Back
                    </button>
                    {step < 3 ? (
                      <button type="button" className="btn btn-primary" onClick={nextStep}>
                        Continue
                        <ArrowIcon />
                      </button>
                    ) : (
                      <button type="submit" className="btn btn-primary">
                        Submit Request
                        <SendIcon />
                      </button>
                    )}
                  </div>
                </form>
              </>
            ) : (
              <div className="form-success">
                <CheckIcon />
                <span>Quote request received. Our estimating team will be in touch within 48 hours.</span>
              </div>
            )}
          </div>
          <p className="form-note text-center" style={{ marginTop: 20 }}>
            Prefer to talk? Call <a href={`tel:${company.phone}`} style={{ color: "var(--accent)" }}>{company.phone}</a> or{" "}
            <Link to="/contact" style={{ color: "var(--accent)" }}>contact us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
