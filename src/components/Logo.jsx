import { Link } from "react-router-dom";
import { company } from "../data/siteData";
import { BrandMark } from "./icons";

export function Logo() {
  return (
    <Link className="brand" to="/" aria-label={`${company.name} home`}>
      <span className="mark">
        <BrandMark />
      </span>
      <span>
        {company.shortName}
        <small>Construction</small>
      </span>
    </Link>
  );
}
