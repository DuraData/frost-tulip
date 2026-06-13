import { Link } from "react-router-dom";
import { company, industries, projects, services, testimonials } from "../data/siteData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ArrowIcon, ServiceIcon, StarIcon } from "../components/icons";
import { CTA, BeforeAfter, CheckList, Placeholder, ProjectMeta, SectionHead, StatsGrid } from "../components/common";

export function HomePage() {
  useDocumentTitle(`${company.name} - ${company.tagline}`);

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <Placeholder label="Hero aerial of active construction site and skyline" />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <p className="kicker">Zimbabwe · Est. 2009</p>
          <h1>{company.tagline}</h1>
          <p className="tagline">
            Premium residential, commercial and civil construction engineered to last and delivered on time.
          </p>
          <div className="btn-row" style={{ marginTop: 38 }}>
            <Link className="btn btn-primary btn-lg" to="/quote">
              Get a Quote
              <ArrowIcon />
            </Link>
            <Link className="btn btn-outline btn-lg" to="/services">
              Our Services
            </Link>
            <Link className="btn btn-ghost btn-lg" to="/contact">
              Contact Us
            </Link>
          </div>
          <div className="hero-meta">
            <div><div className="num">15+</div><div className="lab">Years building</div></div>
            <div><div className="num">240+</div><div className="lab">Projects delivered</div></div>
            <div><div className="num">98%</div><div className="lab">On-time completion</div></div>
          </div>
        </div>
        <div className="scroll-hint">Scroll</div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-media ticks">
              <Placeholder label="Site team reviewing structural plans" className="tall" />
              <div className="split-badge">
                <div className="n">ISO 9001</div>
                <div className="t">Quality Certified</div>
              </div>
            </div>
            <div>
              <p className="kicker">Who We Are</p>
              <h2 style={{ margin: "18px 0 22px" }}>A Zimbabwean construction partner you can build on.</h2>
              <p className="lead">
                Frost Tulip Construction is a full-service contractor delivering homes, commercial buildings and civil
                infrastructure across Zimbabwe.
              </p>
              <CheckList
                items={[
                  "End-to-end delivery from design coordination to handover.",
                  "Transparent budgets and rigorous quality control.",
                  "A safety-first culture on every site, every day.",
                ]}
              />
              <div className="btn-row" style={{ marginTop: 32 }}>
                <Link className="btn btn-primary" to="/about">
                  More About Us
                  <ArrowIcon />
                </Link>
                <Link className="btn btn-outline" to="/about#profile">
                  Download Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-2">
        <div className="container">
          <SectionHead
            kicker="What We Do"
            title="Construction services, engineered end-to-end."
            lead="Five core disciplines covering the full lifecycle of a build from first foundation to final finish."
          />
          <div className="grid cols-3">
            {services.slice(0, 5).map((service, index) => (
              <Link key={service.id} className="card svc-card" to={`/services#${service.id}`}>
                <span className="svc-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="svc-icon">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <span className="svc-link">
                  Explore
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link className="btn btn-outline" to="/services">
              View All Services
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead kicker="Why Frost Tulip" title="Numbers that hold up under scrutiny." center />
          <StatsGrid
            items={[
              { value: "240", suffix: "+", label: "Projects Completed" },
              { value: "15", suffix: "+", label: "Years of Experience" },
              { value: "180", suffix: "+", label: "Skilled Workers" },
              { value: "98", suffix: "%", label: "Client Satisfaction" },
            ]}
          />
        </div>
      </section>

      <section className="section bg-2">
        <div className="container">
          <div className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxWidth: "none", gap: 30, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 620 }}>
              <p className="kicker">Featured Work</p>
              <h2 style={{ marginTop: 18 }}>Selected projects from across Zimbabwe.</h2>
            </div>
            <Link className="btn btn-outline" to="/projects">
              All Projects
              <ArrowIcon />
            </Link>
          </div>
          <div className="proj-grid">
            {projects.slice(0, 6).map((project) => (
              <Link key={project.title} className="card proj-card" to="/projects">
                <div className="proj-media">
                  <Placeholder label={project.img} />
                  <span className={`badge ${project.statusClass}`}>{project.status}</span>
                </div>
                <div className="proj-body">
                  <div className="cat">{project.cat}</div>
                  <h3>{project.title}</h3>
                  <ProjectMeta project={project} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead kicker="Industries We Serve" title="Sectors we build for." />
          <div className="ind-row">
            {industries.map((industry, index) => (
              <Link key={industry.title} className="ind-item" to="/industries">
                <div className="ind-num">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{industry.title}</h3>
                  <p>{industry.short}</p>
                </div>
                <div className="ind-arrow">
                  <ArrowIcon />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-2">
        <div className="container">
          <div className="split">
            <div>
              <p className="kicker">Transformations</p>
              <h2 style={{ margin: "18px 0 20px" }}>From derelict to delivered.</h2>
              <p className="lead">
                Renovations and structural upgrades that bring tired buildings back to life. Drag the slider to see
                the difference our teams make.
              </p>
              <div className="btn-row" style={{ marginTop: 30 }}>
                <Link className="btn btn-primary" to="/projects">
                  See the Portfolio
                  <ArrowIcon />
                </Link>
              </div>
            </div>
            <BeforeAfter beforeLabel="Before original structure" afterLabel="After finished renovation" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead kicker="Client Voices" title="Trusted by owners, developers and institutions." center />
          <div className="grid cols-3">
            {testimonials.slice(0, 3).map((item) => (
              <div key={item.name} className="card testi-card">
                <div className="stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p>{`"${item.quote}"`}</p>
                <div className="testi-foot">
                  <Placeholder label="" className="av" />
                  <div>
                    <div className="nm">{item.name}</div>
                    <div className="ro">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand">
        <div className="container">
          <div className="split">
            <div>
              <p className="kicker" style={{ color: "var(--accent-300)" }}>Health and Safety</p>
              <h2 style={{ margin: "18px 0 20px" }}>Everyone goes home safe. No exceptions.</h2>
              <p className="lead" style={{ color: "#c4d2e4" }}>
                Safety is engineered into how we plan, staff and run every site. From PPE compliance to daily toolbox
                talks, our protocols protect our people, our clients and the public.
              </p>
              <div style={{ marginTop: 34 }}>
                <StatsGrid
                  items={[
                    { value: "0", label: "Lost-time incidents '25" },
                    { value: "100", suffix: "%", label: "PPE compliance" },
                    { value: "2400", suffix: "+", label: "Safety hours trained" },
                  ]}
                />
              </div>
              <div className="btn-row" style={{ marginTop: 34 }}>
                <Link className="btn btn-light" to="/health-safety">
                  Our Safety Commitment
                  <ArrowIcon />
                </Link>
              </div>
            </div>
            <Placeholder label="Site crew in full PPE and safety briefing" className="tall" />
          </div>
        </div>
      </section>

      <CTA
        title="Ready to build with us?"
        text="Tell us about your project and our team will get back to you with a tailored proposal within 48 hours."
        primaryTo="/quote"
        primaryLabel="Get a Free Quote"
        secondaryTo="/contact"
        secondaryLabel="Talk to Us"
      />
    </>
  );
}
