import { blogPosts, company } from "../data/siteData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ArrowIcon } from "../components/icons";
import { FooterNewsletter } from "../components/FooterNewsletter";
import { PageHero, Placeholder } from "../components/common";
import { useState } from "react";

export function BlogPage() {
  useDocumentTitle(`Blog and News - ${company.name}`);
  const [active, setActive] = useState("All");
  const featured = blogPosts[0];
  const tags = ["All", "Industry News", "Construction Tips", "Safety Insights", "Project Update", "Infrastructure"];
  const filtered = blogPosts.slice(1).filter((post) => active === "All" || post.tag === active);

  return (
    <>
      <PageHero
        title="News from the site and beyond."
        kicker="Insights"
        lead="Industry news, practical construction tips, project updates and safety insights from our team."
        crumbs="Blog and News"
      />

      <section className="section">
        <div className="container">
          <a className="feat-proj" href="#">
            <Placeholder label={featured.img} />
            <div className="feat-proj-body">
              <div className="bc-meta" style={{ marginBottom: 16, display: "flex" }}>
                <span style={{ color: "var(--accent)" }}>{featured.tag}</span>
                <span>{featured.date}</span>
                <span>{featured.read}</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.6rem,2.6vw,2.4rem)", marginBottom: 14 }}>{featured.title}</h2>
              <p className="lead">{featured.excerpt}</p>
              <span className="svc-link" style={{ marginTop: 24 }}>
                Read article
                <ArrowIcon />
              </span>
            </div>
          </a>
        </div>
      </section>

      <section className="section bg-2" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="filters" style={{ marginBottom: 30 }}>
            {tags.map((tag) => (
              <button
                key={tag}
                className={`filter-chip${active === tag ? " active" : ""}`}
                type="button"
                onClick={() => setActive(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          {filtered.length ? (
            <div className="blog-grid">
              {filtered.map((post) => (
                <a key={post.title} className="card blog-card" href="#">
                  <Placeholder label={post.img} />
                  <div className="bc-body">
                    <div className="bc-meta" style={{ display: "flex", marginBottom: 14 }}>
                      <span style={{ color: "var(--accent)" }}>{post.tag}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="svc-link" style={{ marginTop: 18 }}>{`${post.read} read`}</div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="empty-state">No articles in this category yet.</p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760, textAlign: "center" }}>
          <p className="kicker center" style={{ justifyContent: "center", display: "flex", marginBottom: 18 }}>
            Stay In The Loop
          </p>
          <h2 style={{ marginBottom: 16 }}>Get our latest insights by email.</h2>
          <p className="lead" style={{ marginBottom: 28 }}>
            Monthly construction tips, project news and safety updates. No spam.
          </p>
          <FooterNewsletter centered />
        </div>
      </section>
    </>
  );
}
