import { Routes, Route } from "react-router-dom";
import { company } from "../data/siteData";
import { WhatsAppIcon } from "../components/icons";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ServicesPage } from "../pages/ServicesPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { IndustriesPage } from "../pages/IndustriesPage";
import { SafetyPage } from "../pages/SafetyPage";
import { BlogPage } from "../pages/BlogPage";
import { CareersPage } from "../pages/CareersPage";
import { ContactPage } from "../pages/ContactPage";
import { QuotePage } from "../pages/QuotePage";

export function Layout({ theme, onToggleTheme }) {
  return (
    <>
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/health-safety" element={<SafetyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </main>
      <Footer />
      <a className="wa-float" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  );
}
