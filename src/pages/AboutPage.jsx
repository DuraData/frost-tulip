import { Link } from "react-router-dom";
import { company, values } from "../data/siteData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ArrowIcon, BuildingIcon, BulbIcon, HelmetIcon, MapPinIcon, ScaleIcon, ShieldIcon } from "../components/icons";

export function AboutPage() {
  useDocumentTitle(`About Us - ${company.name}`);

  const statItems = [
    {
      icon: <BuildingIcon />,
      value: "2009",
      label: "Year Founded",
      text: "Over a decade of construction excellence",
    },
    {
      icon: <BuildingIcon />,
      value: "240+",
      label: "Projects Delivered",
      text: "Successfully completed across Zimbabwe",
    },
    {
      icon: <HelmetIcon />,
      value: "180+",
      label: "Skilled Workers",
      text: "Experienced, trained and committed professionals",
    },
    {
      icon: <MapPinIcon />,
      value: "8",
      label: "Provinces Served",
      text: "Building communities nationwide",
    },
  ];

  const valueIcons = {
    Quality: <ShieldIcon />,
    Integrity: <ScaleIcon />,
    Safety: <HelmetIcon />,
    Reliability: <BuildingIcon />,
    Innovation: <BulbIcon />,
  };

  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-inner">
            <div className="about-hero-grid">
              <div className="about-hero-copy">
                <div className="crumbs">
                  <Link to="/">Home</Link>
                  <span>/</span>
                  <span>About</span>
                </div>
                <p className="kicker">About Us</p>
                <h1>
                  <span>Building Zimbabwe's Future</span>
                  <span>with Strength and</span>
                  <span>Excellence</span>
                </h1>
                <p className="lead">
                  Frost Tulip Construction is a Zimbabwean construction company committed to delivering high-quality,
                  durable and innovative construction solutions across all sectors.
                </p>
                <div className="btn-row about-hero-actions">
                  <Link className="btn btn-primary" to="/services">
                    Our Services
                    <ArrowIcon />
                  </Link>
                  <Link className="btn btn-outline" to="/about#profile">
                    Company Overview
                  </Link>
                </div>
              </div>
              <div className="about-hero-visual">
                <div className="about-hero-image-wrap">
                  <div className="about-hero-image">
                    <img
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
                      alt="Construction professionals reviewing active site progress"
                    />
                  </div>
                  <div className="about-hero-stat-card">
                    <strong>240+</strong>
                    <span>Projects delivered across Zimbabwe</span>
                  </div>
                  <div className="about-hero-trust-card">
                    <span className="about-hero-trust-icon">
                      <ShieldIcon />
                    </span>
                    <div>
                      <strong>ISO 9001 Quality Focus</strong>
                      <span>Trusted delivery, disciplined quality control</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-overview" id="profile">
        <div className="container">
          <div className="about-overview-grid">
            <div className="about-overview-copy">
              <p className="kicker">Company Overview</p>
              <h2>A Trusted Construction Partner Since 2009</h2>
              <p>
                Founded in Harare, Frost Tulip Construction has grown from a vision to build better, into a trusted
                name in the construction industry. With over a decade of experience, we have successfully delivered a
                wide range of residential, commercial, industrial and civil projects across Zimbabwe.
              </p>
              <p>
                Our commitment to quality, safety, integrity and innovation drives everything we do. We combine skilled
                workmanship, modern construction techniques and efficient project management to deliver projects on
                time, on budget and beyond expectation.
              </p>
              <div className="btn-row" style={{ marginTop: 30 }}>
                <Link className="btn btn-primary" to="/contact">
                  Download Company Profile
                  <ArrowIcon />
                </Link>
              </div>
            </div>
            <div className="about-overview-media-wrap">
              <div className="about-overview-media">
                <img
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80"
                  alt="Premium commercial building exterior"
                />
              </div>
              <div className="about-overview-badge">
                <span className="about-overview-badge-icon">
                  <ShieldIcon />
                </span>
                <div>
                  <strong>Quality. Integrity. Safety. Excellence.</strong>
                  <span>Our promise on every project.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats-band">
        <div className="container">
          <div className="about-stats-grid">
            {statItems.map((item) => (
              <div key={item.label} className="about-stat">
                <span className="about-stat-icon">{item.icon}</span>
                <div className="about-stat-body">
                  <div className="about-stat-value">{item.value}</div>
                  <div className="about-stat-label">{item.label}</div>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <div className="about-section-head">
            <p className="kicker">Our Core Values</p>
            <h2>The Principles That Guide Us</h2>
          </div>
          <div className="about-values-grid">
            {values.map((value) => (
              <div key={value.title} className="about-value-card">
                <span className="about-value-icon">{valueIcons[value.title] || <ShieldIcon />}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-commitment">
            <div className="about-commitment-media">
              <img
                src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=80"
                alt="Construction team standing on site"
              />
            </div>
            <div className="about-commitment-copy">
              <p className="kicker" style={{ color: "var(--accent-300)" }}>Our Commitment</p>
              <h2>Built on Trust. Driven by Excellence.</h2>
              <p>
                We believe every successful project begins with understanding our clients' needs. Our goal is to build
                lasting relationships through trust, quality service and consistent delivery.
              </p>
              <p>
                From concept to completion, we work closely with our clients to ensure every project is handled
                efficiently, professionally and to the highest standards.
              </p>
              <div className="btn-row" style={{ marginTop: 30 }}>
                <Link className="btn btn-light" to="/quote">
                  Start a Project
                  <ArrowIcon />
                </Link>
                <Link className="btn btn-outline" to="/projects">
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
