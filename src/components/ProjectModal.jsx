import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon, CloseIcon } from "./icons";
import { Placeholder } from "./common";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    function handleKey(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal open" aria-hidden="false">
      <div className="modal-back" onClick={onClose} />
      <div className="modal-card" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>
        <Placeholder label={project.img} className="wide" />
        <div className="modal-body">
          <span className={`badge ${project.statusClass}`}>{project.status}</span>
          <h2 style={{ margin: "18px 0 10px", fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>{project.title}</h2>
          <p className="lead">{project.desc}</p>
          <div className="meta-row">
            <div>
              <div className="k">Category</div>
              <div className="val">{project.cat}</div>
            </div>
            <div>
              <div className="k">Location</div>
              <div className="val">{project.location}</div>
            </div>
            <div>
              <div className="k">Year</div>
              <div className="val">{project.year}</div>
            </div>
            <div>
              <div className="k">Value</div>
              <div className="val">{project.value}</div>
            </div>
            <div>
              <div className="k">Client</div>
              <div className="val">{project.client}</div>
            </div>
          </div>
          <p className="kicker">Scope</p>
          <p style={{ marginTop: 10 }}>{project.scope}</p>
          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary" to="/quote" onClick={onClose}>
              Start a similar project
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
