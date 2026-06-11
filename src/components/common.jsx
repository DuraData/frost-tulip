import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon, CheckIcon } from "./icons";

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
  return <div className={`ph ${className}`.trim()} data-label={label} />;
}

export function PageHero({ title, kicker, lead, label, crumbs }) {
  return (
    <section className="page-hero">
      <div className="ph-bg">
        <Placeholder label={label} />
      </div>
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
