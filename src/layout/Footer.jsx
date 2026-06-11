import { Link } from "react-router-dom";
import { company, services } from "../data/siteData";
import { FooterNewsletter } from "../components/FooterNewsletter";
import { Logo } from "../components/Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <Logo />
            <p>
              Building strong foundations for the future. Premium residential, commercial and civil construction across
              Zimbabwe.
            </p>
            <Link className="btn btn-outline" to="/about#profile">
              Download Company Profile
            </Link>
            <div className="socials">
              <a href="#" aria-label="Facebook">
                Fb
              </a>
              <a href="#" aria-label="LinkedIn">
                Li
              </a>
              <a href="#" aria-label="Instagram">
                Ig
              </a>
              <a href="#" aria-label="X">
                X
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog and News</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.id}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Stay Updated</h5>
            <p className="muted" style={{ fontSize: ".92rem", marginBottom: 6 }}>
              Site notes, project updates and safety insights.
            </p>
            <FooterNewsletter />
            <div style={{ marginTop: 22 }}>
              <h5>Get in touch</h5>
              <p className="muted" style={{ fontSize: ".92rem", lineHeight: 1.9 }}>
                {company.address}
                <br />
                {company.phone}
                <br />
                {company.email}
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{`© ${new Date().getFullYear()} ${company.name}. All rights reserved.`}</p>
          <p>Harare · Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
}
