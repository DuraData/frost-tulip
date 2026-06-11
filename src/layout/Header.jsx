import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data/siteData";
import { Logo } from "../components/Logo";
import { ArrowIcon, CloseIcon, MenuIcon, MoonIcon, SunIcon } from "../components/icons";

export function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <nav className="nav">
            <Logo />
            <div className="nav-links">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "active" : "")}>
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="nav-actions">
              <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
              <Link className="btn btn-primary nav-cta" to="/quote">
                Get a Quote
                <ArrowIcon />
              </Link>
              <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
                <MenuIcon />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`drawer${open ? " open" : ""}`}>
        <div className="drawer-inner">
          <div className="drawer-top">
            <Logo />
            <button className="theme-toggle" onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </button>
          </div>
          <nav className="drawer-links">
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <span>{String(index + 1).padStart(2, "0")}</span>
              </NavLink>
            ))}
          </nav>
          <div className="drawer-foot">
            <Link className="btn btn-primary btn-block" to="/quote" onClick={() => setOpen(false)}>
              Get a Quote
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
