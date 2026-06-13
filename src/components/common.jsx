import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { pageHeroSlides } from "../data/siteData";
import { ArrowIcon, CheckIcon } from "./icons";

const visualPresets = [
  {
    match: /map|office|eastlea|harare/i,
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    chip: "Head Office",
    title: "Harare project hub",
    subtitle: "Fast response and on-site coordination",
    statValue: "24h",
    statLabel: "avg response",
  },
  {
    match: /safety|ppe|toolbox|environment/i,
    src: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?auto=format&fit=crop&w=1400&q=80",
    chip: "Safety First",
    title: "Zero-harm site culture",
    subtitle: "PPE, inductions and daily toolbox talks",
    statValue: "100%",
    statLabel: "PPE compliance",
  },
  {
    match: /structural|plan|planning|blueprint|reviewing/i,
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    chip: "Pre-Construction",
    title: "Engineering review on site",
    subtitle: "Drawings, sequencing and quality checks aligned",
    statValue: "240+",
    statLabel: "projects delivered",
  },
  {
    match: /team|culture|workers|crew/i,
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    chip: "Site Team",
    title: "Experienced crews on every build",
    subtitle: "Hands-on supervision backed by specialist trades",
    statValue: "180+",
    statLabel: "skilled workers",
  },
  {
    match: /solar|sustainable|energy/i,
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
    chip: "Sustainable Build",
    title: "Smarter systems, lower lifetime cost",
    subtitle: "Energy, water and material efficiency designed in",
    statValue: "15+",
    statLabel: "years building",
  },
  {
    match: /industrial|warehouse|factory/i,
    src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80",
    chip: "Industrial",
    title: "Heavy-duty facilities delivered to spec",
    subtitle: "Steel, logistics and operational performance aligned",
    statValue: "4,200m2",
    statLabel: "warehouse scale",
  },
  {
    match: /civil|road|drainage|earthworks|paving/i,
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    chip: "Civil Works",
    title: "Infrastructure that supports every phase",
    subtitle: "Roads, drainage and structural concrete built to last",
    statValue: "6.2km",
    statLabel: "road phase",
  },
  {
    match: /commercial|office|retail/i,
    src: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80",
    chip: "Commercial",
    title: "Business-ready spaces with durable finishes",
    subtitle: "Programme-driven delivery from shell to handover",
    statValue: "12",
    statLabel: "retail units",
  },
  {
    match: /government|civic/i,
    src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1400&q=80",
    chip: "Institutional",
    title: "Public projects with disciplined compliance",
    subtitle: "Documentation, safety and quality held to standard",
    statValue: "8",
    statLabel: "provinces served",
  },
  {
    match: /residential|home|housing|family/i,
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
    chip: "Residential",
    title: "Homes built for comfort and long-term value",
    subtitle: "Crafted finishes, reliable supervision and clean handover",
    statValue: "12mo",
    statLabel: "workmanship cover",
  },
  {
    match: /archive|founders|history/i,
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    chip: "Since 2009",
    title: "Built from honest workmanship",
    subtitle: "From small renovations to nationwide delivery",
    statValue: "15+",
    statLabel: "years of growth",
  },
  {
    match: /building|project|backdrop|completed|feature|portfolio|editorial/i,
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    chip: "On Site",
    title: "Premium construction delivery",
    subtitle: "Managed with quality, safety and schedule discipline",
    statValue: "98%",
    statLabel: "on-time completion",
  },
];

function getVisualPreset(label = "", className = "") {
  const key = `${label} ${className}`.trim().toLowerCase();

  if (className.includes("av")) {
    return { type: "avatar", initials: "FT" };
  }

  return visualPresets.find((preset) => preset.match.test(key)) || visualPresets[visualPresets.length - 1];
}

export function SectionHead({ kicker, title, lead, center = false }) {
  return (
    <div className={`section-head${center ? " center" : ""}`}>
      {kicker ? <p className={`kicker${center ? " center" : ""}`}>{kicker}</p> : null}
      <h2>{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}

export function Placeholder({ label, className = "" }) {
  const visual = getVisualPreset(label, className);

  if (visual.type === "avatar") {
    return (
      <div className={`ph ph-avatar ${className}`.trim()} aria-hidden="true">
        <span>{visual.initials}</span>
      </div>
    );
  }

  return (
    <div className={`ph ${className}`.trim()} aria-label={label || visual.title}>
      <img className="ph-img" src={visual.src} alt="" />
      <div className="ph-overlay" />
      <div className="ph-pattern" />
      <div className="ph-content">
        <span className="ph-chip">{visual.chip}</span>
        <div className="ph-copy">
          <strong>{visual.title}</strong>
          <span>{visual.subtitle}</span>
        </div>
        <div className="ph-stat">
          <strong>{visual.statValue}</strong>
          <span>{visual.statLabel}</span>
        </div>
      </div>
    </div>
  );
}

export function HeroSliderBackground({ slides = pageHeroSlides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return undefined;

    const timerId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timerId);
  }, [slides]);

  return (
    <div className="page-hero-media" aria-hidden="true">
      <div className="page-hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`page-hero-slide${index === activeIndex ? " active" : ""}`}
            style={{ backgroundImage: `url("${slide.src}")` }}
          />
        ))}
      </div>
      <div className="page-hero-overlay" />
      <div className="page-hero-pattern" />
      <div className="page-hero-dots">
        {slides.map((slide, index) => (
          <span
            key={slide.src}
            className={`page-hero-dot${index === activeIndex ? " active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export function PageHero({ title, kicker, lead, crumbs }) {
  return (
    <section className="page-hero">
      <HeroSliderBackground />
      <div className="container">
        <div className="crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{crumbs}</span>
        </div>
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}

export function CTA({ title, text, primaryTo, primaryLabel, secondaryTo, secondaryLabel }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <Placeholder label="Construction backdrop" />
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="btn-row">
            <Link className="btn btn-primary btn-lg" to={primaryTo}>
              {primaryLabel}
              <ArrowIcon />
            </Link>
            {secondaryTo ? (
              <Link className="btn btn-light btn-lg" to={secondaryTo}>
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsGrid({ items }) {
  return (
    <div className="stats">
      {items.map((item) => (
        <div className="stat" key={item.label}>
          <div className="v">
            <span>{item.value}</span>
            {item.suffix ? <span className="suf">{item.suffix}</span> : null}
          </div>
          <div className="l">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export function ProjectMeta({ project }) {
  const items = [
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
    { label: "Status", value: project.status },
    { label: "Value", value: project.value },
  ];

  if (project.area) {
    items.push({ label: "Area", value: project.area });
  }

  if (project.client) {
    items.push({ label: "Client", value: project.client, wide: true });
  }

  return (
    <div className="proj-meta">
      {items.map((item) => (
        <div key={`${project.title}-${item.label}`} className={`proj-meta-item${item.wide ? " wide" : ""}`}>
          <span className="k">{item.label}</span>
          <span className="v">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

export function CheckList({ items, light = false }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <CheckIcon />
          <span style={light ? { color: "#c4d2e4" } : undefined}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BeforeAfter({ beforeLabel, afterLabel, wide = false }) {
  const [position, setPosition] = useState(50);
  const ref = useRef(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    function update(clientX) {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const next = ((clientX - rect.left) / rect.width) * 100;
      setPosition(Math.max(0, Math.min(100, next)));
    }

    function onMove(event) {
      if (!draggingRef.current) return;
      update(event.touches ? event.touches[0].clientX : event.clientX);
    }

    function onUp() {
      draggingRef.current = false;
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  function start(event) {
    draggingRef.current = true;
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)));
  }

  return (
    <div
      className="ba"
      ref={ref}
      onMouseDown={start}
      onTouchStart={start}
      style={wide ? { aspectRatio: "21 / 9" } : undefined}
    >
      <div className="ba-img">
        <Placeholder label={afterLabel} />
      </div>
      <div className="ba-after" style={{ width: `${position}%` }}>
        <Placeholder label={beforeLabel} />
      </div>
      <span className="ba-tag b">Before</span>
      <span className="ba-tag a">After</span>
      <div className="ba-handle" style={{ left: `${position}%` }}>
        <span>
          <ArrowIcon />
        </span>
      </div>
    </div>
  );
}
