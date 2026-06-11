import { useState } from "react";
import { Link } from "react-router-dom";
import { company, services } from "../data/siteData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ArrowIcon } from "../components/icons";
import { CheckList, PageHero, Placeholder, SectionHead } from "../components/common";

export function ServicesPage() {
  useDocumentTitle(`Services - ${company.name}`);
  const [activeService, setActiveService] = useState(services[0].id);

  function scrollToService(id) {
    setActiveService(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <>
      <PageHero
        title="Five disciplines. One accountable team."
        kicker="What We Do"
        lead="Whatever the scope, we bring the same engineering rigour, transparent management and quality finish to every project."
        label="Construction services montage"
        crumbs="Services"
      />

      <section className="section-sm sticky-nav" style={{ paddingBlock: 18 }}>
        <div className="container">
          <div className="filters">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                className={`filter-chip${activeService === service.id ? " active" : ""}`}
                onClick={() => scrollToService(service.id)}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          className={`section${index % 2 === 1 ? " bg-2" : ""}`}
          id={service.id}
          style={{ scrollMarginTop: 150 }}
        >
          <div className="container">
            <div className={`split${index % 2 === 1 ? " rev" : ""}`}>
              <div className="split-media ticks">
                <Placeholder label={service.banner} className="tall" />
                <div className="split-badge">
                  <div className="n">{String(index + 1).padStart(2, "0")}</div>
                  <div className="t">Service</div>
                </div>
              </div>
              <div>
                <p className="kicker">{`${String(index + 1).padStart(2, "0")} / Service`}</p>
                <h2 style={{ margin: "16px 0 18px" }}>{service.title}</h2>
                <p className="lead">{service.desc}</p>
                <CheckList items={service.items} />
                <p className="kicker" style={{ marginTop: 30 }}>Key Benefits</p>
                <div className="pill-list" style={{ marginTop: 22 }}>
                  {service.benefits.map((benefit) => (
                    <span key={benefit}>{benefit}</span>
                  ))}
                </div>
                <div className="btn-row" style={{ marginTop: 30 }}>
                  <Link className="btn btn-primary" to="/quote">
                    Request This Service
                    <ArrowIcon />
                  </Link>
                  <Link className="btn btn-outline" to="/projects">
                    See Examples
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section bg-2">
        <div className="container">
          <SectionHead kicker="How We Work" title="A clear path from brief to handover." center />
          <div className="grid cols-4">
            {[
              ["01", "Consult and Quote", "We listen to your goals, assess the site and return a clear, itemised proposal."],
              ["02", "Plan and Procure", "Detailed programme, budget and material procurement are locked in before we break ground."],
              ["03", "Build and Report", "Disciplined site delivery with weekly progress, cost and safety reporting."],
              ["04", "Handover and Support", "Snag-free handover, documentation and a 12-month workmanship warranty."],
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

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <Placeholder label="Construction backdrop" />
            <h2>Not sure which service you need?</h2>
            <p>Tell us about your project and we will point you in the right direction with no obligation.</p>
            <div className="btn-row">
              <Link className="btn btn-primary btn-lg" to="/quote">
                Get a Quote
                <ArrowIcon />
              </Link>
              <Link className="btn btn-light btn-lg" to="/contact">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
