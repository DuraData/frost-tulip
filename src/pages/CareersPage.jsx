import { useState } from "react";
import { company, jobs } from "../data/siteData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ArrowIcon, CheckIcon, SendIcon, ShieldIcon } from "../components/icons";
import { PageHero, Placeholder, SectionHead } from "../components/common";

export function CareersPage() {
  useDocumentTitle(`Careers - ${company.name}`);
  const [selectedRole, setSelectedRole] = useState("General Application");
  const [fileLabel, setFileLabel] = useState("Drop your CV or click to browse");
  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState({ name: "", email: "", phone: "", note: "" });
  const [errors, setErrors] = useState({});

  function validate() {
    const nextErrors = {};
    if (!fields.name.trim()) nextErrors.name = "Required.";
    if (!fields.phone.trim()) nextErrors.phone = "Required.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email)) nextErrors.email = "Enter a valid email.";
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
        title="Build your career with us."
        kicker="Join Our Team"
        lead="We're always looking for skilled, safety-minded people who take pride in their work."
        crumbs="Careers"
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <p className="kicker">Our Culture</p>
              <h2 style={{ margin: "18px 0 18px" }}>People build buildings.</h2>
              <p className="lead">
                We hire for attitude and skill, then back our people with training, clear progression and a genuine
                commitment to their safety and wellbeing.
              </p>
              <div className="pill-list" style={{ marginTop: 24 }}>
                {["Safety-first", "Hands-on", "Merit-based growth", "Team-oriented", "Locally rooted"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <Placeholder label="Team on site culture photo" className="wide ticks" />
          </div>
        </div>
      </section>

      <section className="section bg-2">
        <div className="container">
          <SectionHead kicker="Benefits" title="What we offer." />
          <div className="grid cols-4">
            {[
              ["Competitive pay", "Fair, market-related wages reviewed annually and paid reliably."],
              ["Training and growth", "Skills development, certifications and clear paths to advance."],
              ["Safety and wellbeing", "Full PPE, medical aid options and a genuine zero-harm culture."],
              ["Great team", "Supportive colleagues and leadership that values your contribution."],
            ].map(([title, text]) => (
              <div key={title} className="card value-card">
                <div className="vc-top">
                  <span className="vc-icon">
                    <ShieldIcon />
                  </span>
                </div>
                <h3 style={{ fontSize: "1.15rem" }}>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead kicker="Open Positions" title="Current vacancies." />
          <div className="grid" style={{ gap: 14 }}>
            {jobs.map((job) => (
              <div key={job.title} className="card job-card">
                <div>
                  <div className="jt">{job.title}</div>
                  <div className="job-tags">
                    <span>{job.dept}</span>
                    <span>{job.type}</span>
                    <span>{job.loc}</span>
                    <span>{job.level}</span>
                  </div>
                </div>
                <button className="btn btn-outline" type="button" onClick={() => setSelectedRole(job.title)}>
                  Apply
                  <ArrowIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-2">
        <div className="container">
          <SectionHead kicker="Recruitment Process" title="How hiring works." center />
          <div className="grid cols-4">
            {[
              ["01", "Apply", "Submit your details and CV through the form below."],
              ["02", "Screening", "We review applications and shortlist candidates within two weeks."],
              ["03", "Interview", "A conversation and trade test where relevant with our team."],
              ["04", "Offer", "Successful candidates receive an offer and onboarding plan."],
            ].map(([num, title, text]) => (
              <div key={num}>
                <div className="idx">{num}</div>
                <h4 style={{ margin: "14px 0 10px" }}>{title}</h4>
                <p className="muted" style={{ fontSize: ".94rem" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="apply">
        <div className="container" style={{ maxWidth: 760 }}>
          <SectionHead kicker="Apply Now" title="Send us your application." center />
          <div className="card card-pad">
            {submitted ? (
              <div className="form-success">
                <CheckIcon />
                <span>Application received. Thank you. We'll be in touch if there is a fit.</span>
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
                  <div className={`field${errors.phone ? " invalid" : ""}`}>
                    <label>Phone</label>
                    <input className="input" value={fields.phone} onChange={(event) => setFields({ ...fields, phone: event.target.value })} />
                    <div className="field-error">{errors.phone}</div>
                  </div>
                  <div className="field">
                    <label>Position</label>
                    <select className="select" value={selectedRole} onChange={(event) => setSelectedRole(event.target.value)}>
                      <option>General Application</option>
                      {jobs.map((job) => (
                        <option key={job.title}>{job.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>Cover Note</label>
                  <textarea className="textarea" value={fields.note} onChange={(event) => setFields({ ...fields, note: event.target.value })} />
                </div>
                <div className="field">
                  <label>Attach CV</label>
                  <label className="file-drop" htmlFor="cv-file">
                    <div>{fileLabel}</div>
                    <p className="form-note" style={{ marginTop: 6 }}>PDF or DOCX up to 10MB</p>
                  </label>
                  <input
                    id="cv-file"
                    type="file"
                    className="hidden"
                    onChange={(event) => setFileLabel(event.target.files?.[0]?.name || "Drop your CV or click to browse")}
                  />
                </div>
                <button className="btn btn-primary btn-block btn-lg" type="submit">
                  Submit Application
                  <SendIcon />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
