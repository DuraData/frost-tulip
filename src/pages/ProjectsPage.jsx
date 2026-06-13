import { useMemo, useState } from "react";
import { company, projects } from "../data/siteData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { BeforeAfter, PageHero, Placeholder, ProjectMeta, SectionHead } from "../components/common";
import { ProjectModal } from "../components/ProjectModal";

export function ProjectsPage() {
  useDocumentTitle(`Projects - ${company.name}`);
  const [active, setActive] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = useMemo(
    () => [
      { label: "All", key: "all" },
      { label: "Residential", key: "residential" },
      { label: "Commercial", key: "commercial" },
      { label: "Civil Works", key: "civil" },
      { label: "Industrial", key: "industrial" },
    ],
    [],
  );

  const filtered = projects.filter((project) => active === "all" || project.catKey === active);

  return (
    <>
      <PageHero
        title="Proof, poured in concrete."
        kicker="Our Portfolio"
        lead="A selection of homes, commercial buildings, roads and industrial works delivered by our teams across Zimbabwe."
        label="Portfolio of completed buildings"
        crumbs="Projects"
      />

      <section className="section">
        <div className="container">
          <SectionHead kicker="Transformation" title="Drag to reveal the difference." />
          <BeforeAfter beforeLabel="Before derelict structure" afterLabel="After restored civic building" wide />
        </div>
      </section>

      <section className="section bg-2">
        <div className="container">
          <SectionHead kicker="All Work" title="Browse the portfolio." />
          <div className="filters" style={{ marginBottom: 30 }}>
            {categories.map((category) => (
              <button
                key={category.key}
                className={`filter-chip${active === category.key ? " active" : ""}`}
                type="button"
                onClick={() => setActive(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="proj-grid">
            {filtered.map((project) => (
              <button
                key={project.title}
                type="button"
                className="card proj-card"
                onClick={() => setSelectedProject(project)}
                style={{ textAlign: "left" }}
              >
                <div className="proj-media">
                  <Placeholder label={project.img} />
                  <span className={`badge ${project.statusClass}`}>{project.status}</span>
                </div>
                <div className="proj-body">
                  <div className="cat">{project.cat}</div>
                  <h3>{project.title}</h3>
                  <ProjectMeta project={project} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
