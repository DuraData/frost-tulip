import { Link } from "react-router-dom";
import { company, safetyPillars } from "../data/siteData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ArrowIcon, ShieldIcon } from "../components/icons";
import { CheckList, PageHero, Placeholder, SectionHead, StatsGrid } from "../components/common";

export function SafetyPage() {
  useDocumentTitle(`Health and Safety - ${company.name}`);

  return (
    <>
      <PageHero
        title="Everyone goes home safe."
        kicker="Health, Safety and Environment"
        lead="Safety is not a department at Frost Tulip. It is how every site runs."
        crumbs="Health and Safety"
      />

      <section className="section-sm">
        <div className="container">
          <StatsGrid
            items={[
              { value: "0", label: "Lost-time incidents '25" },
              { value: "100", suffix: "%", label: "PPE compliance" },
              { value: "2400", suffix: "+", label: "Safety hours trained" },
              { value: "100", suffix: "%", label: "Sites with HSE officer" },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <p className="kicker">Our Commitment</p>
              <h2 style={{ margin: "18px 0 20px" }}>A culture of zero harm.</h2>
              <p className="lead">
                We believe every incident is preventable. That conviction drives a proactive safety culture where
                hazards are identified early and everyone is empowered to stop unsafe work.
              </p>
              <p className="muted" style={{ marginTop: 18 }}>
                Our HSE management system aligns with best practice and is overseen by qualified safety officers on
                every active site.
              </p>
            </div>
            <Placeholder label="Toolbox talk and safety briefing" className="wide ticks" />
          </div>
        </div>
      </section>

      <section className="section bg-2">
        <div className="container">
          <SectionHead kicker="How We Keep Sites Safe" title="Six pillars of our HSE programme." />
          <div className="grid cols-3">
            {safetyPillars.map((pillar, index) => (
              <div key={pillar} className="card value-card">
                <div className="vc-top">
                  <span className="vc-icon">
                    <ShieldIcon />
                  </span>
                  <span className="idx">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 style={{ fontSize: "1.25rem" }}>{pillar}</h3>
                <p>
                  Clear procedures, training and reporting create a disciplined, accountable site environment from day
                  one.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split rev">
            <div className="split-media">
              <Placeholder label="PPE helmet hi-vis boots gloves" className="tall" />
            </div>
            <div>
              <p className="kicker">PPE Standards</p>
              <h2 style={{ margin: "18px 0 18px" }}>No PPE, no entry.</h2>
              <p className="lead">
                Personal protective equipment is mandatory and enforced on every site. We supply, inspect and replace
                PPE to ensure our teams and visitors are always protected.
              </p>
              <div className="pill-list" style={{ marginTop: 24 }}>
                {["Hard hats", "Hi-vis clothing", "Safety boots", "Eye protection", "Gloves", "Hearing protection", "Harnesses", "Respirators"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand">
        <div className="container">
          <div className="split">
            <div>
              <p className="kicker" style={{ color: "var(--accent-300)" }}>Environmental Responsibility</p>
              <h2 style={{ margin: "18px 0 20px" }}>Building with care for the environment.</h2>
              <p className="lead" style={{ color: "#c4d2e4" }}>
                We manage our environmental impact through responsible waste handling, dust and noise control, spill
                prevention and protection of surrounding communities.
              </p>
              <CheckList
                light
                items={[
                  "Site waste management and recycling plans",
                  "Dust, noise and runoff control measures",
                  "Compliance with EMA regulations",
                ]}
              />
            </div>
            <Placeholder label="Environmental site management" className="tall" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead kicker="Standards and Compliance" title="Accredited, audited, accountable." center />
          <div className="logo-strip">
            {["OHSAS Aligned", "NSSA Compliant", "EMA Registered", "OSHEMAC", "ISO 9001:2015"].map((item) => (
              <div key={item} className="logo-cell">
                <span className="lg">{item}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 60 }}>
            <div className="cta-banner">
              <Placeholder label="Construction backdrop" />
              <h2>Safety is everyone's project.</h2>
              <p>Ask us for our full HSE policy and method statements for your project.</p>
              <div className="btn-row">
                <Link className="btn btn-primary btn-lg" to="/contact">
                  Request HSE Policy
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
