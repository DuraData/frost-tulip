import { Link } from "react-router-dom";
import { awards, company, strengths, values } from "../data/siteData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ArrowIcon, ShieldIcon } from "../components/icons";
import { CTA, CheckList, PageHero, Placeholder, SectionHead, StatsGrid } from "../components/common";

export function AboutPage() {
  useDocumentTitle(`About Us - ${company.name}`);

  return (
    <>
      <PageHero
        title="A construction partner built on trust."
        kicker="Who We Are"
        lead="For over fifteen years, Frost Tulip Construction has delivered durable, high-quality builds across Zimbabwe."
        label="Frost Tulip team on site"
        crumbs="About"
      />

      <section className="section" id="profile">
        <div className="container">
          <div className="split">
            <div>
              <p className="kicker">Company Overview</p>
              <h2 style={{ margin: "18px 0 22px" }}>Founded in Harare. Building across Zimbabwe.</h2>
              <p className="lead">
                Frost Tulip Construction is a full-service building and civil contractor headquartered in Harare. We
                undertake residential, commercial and infrastructure projects of all scales.
              </p>
              <p className="muted" style={{ marginTop: 18 }}>
                Our strength lies in a hands-on management team, a deep bench of skilled tradespeople and reliable
                supplier relationships.
              </p>
              <div className="btn-row" style={{ marginTop: 30 }}>
                <Link className="btn btn-primary" to="/contact">
                  Get in Touch
                  <ArrowIcon />
                </Link>
              </div>
            </div>
            <div>
              <StatsGrid
                items={[
                  { value: "2009", label: "Year Founded" },
                  { value: "240", suffix: "+", label: "Projects Delivered" },
                  { value: "180", suffix: "+", label: "Skilled Workers" },
                  { value: "8", label: "Provinces Served" },
                ]}
              />
              <div className="card card-pad" style={{ marginTop: 24 }}>
                <p className="kicker">Tagline</p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, marginTop: 14 }}>
                  "{company.tagline}."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-2">
        <div className="container">
          <div className="grid cols-2">
            <div className="card card-pad" style={{ borderTop: "3px solid var(--accent)" }}>
              <p className="kicker">Our Vision</p>
              <h3 style={{ margin: "18px 0 14px" }}>Zimbabwe's most trusted builder.</h3>
              <p className="lead">
                To become one of Zimbabwe's leading construction companies recognised for quality, integrity and lasting
                value.
              </p>
            </div>
            <div className="card card-pad" style={{ borderTop: "3px solid var(--brand-300)" }}>
              <p className="kicker">Our Mission</p>
              <h3 style={{ margin: "18px 0 14px" }}>Professional service, every project.</h3>
              <p className="lead">
                To provide professional construction services that exceed client expectations through craftsmanship,
                efficient delivery and transparent communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead kicker="Core Values" title="The principles we build on." />
          <div className="grid cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="card value-card">
                <div className="vc-top">
                  <span className="vc-icon">
                    <ShieldIcon />
                  </span>
                  <span className="idx">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-2">
        <div className="container">
          <SectionHead kicker="Company Strengths" title="Why clients keep coming back." />
          <div className="grid cols-3">
            {strengths.map((strength) => (
              <div key={strength} className="card value-card">
                <div className="vc-top">
                  <span className="vc-icon">
                    <ArrowIcon />
                  </span>
                </div>
                <h3 style={{ fontSize: "1.2rem" }}>{strength}</h3>
                <p>
                  Disciplined delivery, experienced teams and transparent communication keep every build moving with
                  confidence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <p className="kicker">Our Journey</p>
              <h2 style={{ margin: "18px 0 18px" }}>Fifteen years of building.</h2>
              <p className="lead">
                From a small team taking on residential renovations to a multi-disciplinary contractor delivering across
                the country.
              </p>
              <Placeholder label="Founders and early project archive" className="wide ticks" />
            </div>
            <div className="timeline">
              {[
                ["2009", "Founded in Harare", "Frost Tulip begins with residential renovations and a commitment to doing honest work well."],
                ["2013", "First commercial contract", "Delivery of our first office block marks the move into commercial construction."],
                ["2017", "Civil works division launched", "We expand into roads, drainage and bulk earthworks to serve developers end-to-end."],
                ["2021", "ISO 9001 certification", "Formal quality management certification cements our process-driven approach."],
                ["2025", "240+ projects delivered", "Now operating across eight provinces with a team of more than 180 skilled people."],
              ].map(([year, title, text]) => (
                <div key={year} className="tl-item">
                  <div className="yr">{year}</div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand">
        <div className="container">
          <div className="split rev">
            <div className="split-media">
              <Placeholder label="Solar and sustainable building feature" className="tall" />
            </div>
            <div>
              <p className="kicker" style={{ color: "var(--accent-300)" }}>Sustainability and Innovation</p>
              <h2 style={{ margin: "18px 0 20px" }}>Building responsibly for the long term.</h2>
              <p className="lead" style={{ color: "#c4d2e4" }}>
                We design and build with the future in mind, reducing waste and integrating energy- and
                water-efficient systems into our projects.
              </p>
              <CheckList
                light
                items={[
                  "Solar-ready electrical and rainwater harvesting designs",
                  "Locally sourced materials to cut transport emissions",
                  "On-site waste segregation and recycling programmes",
                  "Modern methods of construction to improve efficiency",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead kicker="Awards and Certifications" title="Accredited and recognised." center />
          <div className="logo-strip">
            {awards.map((award) => (
              <div key={award} className="logo-cell">
                <span className="lg">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Let's build something that lasts."
        text="Partner with a team that treats your project like its own."
        primaryTo="/quote"
        primaryLabel="Start a Project"
        secondaryTo="/projects"
        secondaryLabel="See Our Work"
      />
    </>
  );
}
