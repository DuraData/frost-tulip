import { Link } from "react-router-dom";
import { company, industries } from "../data/siteData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ArrowIcon } from "../components/icons";
import { PageHero, Placeholder } from "../components/common";

export function IndustriesPage() {
  useDocumentTitle(`Industries We Serve - ${company.name}`);

  return (
    <>
      <PageHero
        title="Built for every sector."
        kicker="Industries We Serve"
        lead="From single family homes to government infrastructure, we tailor our delivery to the standards and priorities of each sector."
        crumbs="Industries"
      />

      <section className="section">
        <div className="container">
          <div className="grid cols-3">
            {industries.map((industry, index) => (
              <Link
                key={industry.title}
                className="card"
                to="/projects"
                style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                <Placeholder label={industry.image} className="wide" />
                <div className="card-pad" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                    <span className="idx">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 style={{ fontSize: "1.4rem", marginBottom: 12 }}>{industry.title}</h3>
                  <p className="muted" style={{ fontSize: ".96rem", flex: 1 }}>{industry.short}</p>
                  <span className="svc-link" style={{ marginTop: 20 }}>
                    View related work
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-2">
        <div className="container">
          <div className="cta-banner">
            <Placeholder label="Construction backdrop" />
            <h2>Do not see your sector?</h2>
            <p>We adapt our teams and processes to a wide range of project types. Let's talk about yours.</p>
            <div className="btn-row">
              <Link className="btn btn-primary btn-lg" to="/contact">
                Talk to Us
                <ArrowIcon />
              </Link>
              <Link className="btn btn-light btn-lg" to="/quote">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
