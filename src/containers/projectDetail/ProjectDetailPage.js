import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import {getBigProjectBySlug, bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import "./ProjectDetailPage.scss";

function homeHashHref() {
  const base = process.env.PUBLIC_URL || "";
  return `${window.location.origin}${base}/#/`;
}

function CaseStudySectionMedia({items}) {
  if (!items || !items.length) {
    return null;
  }
  return (
    <div className="project-detail-media">
      {items.map((item, i) => (
        <figure key={i} className="project-detail-media-item">
          {item.heading ? (
            <figcaption className="project-detail-media-heading">
              {item.heading}
            </figcaption>
          ) : null}
          <img
            src={item.image}
            alt={item.alt || ""}
            className="project-detail-media-img"
          />
        </figure>
      ))}
    </div>
  );
}

export default function ProjectDetailPage() {
  const {slug} = useParams();
  const {isDark} = useContext(StyleContext);
  const project = getBigProjectBySlug(slug);
  const cs = project && project.caseStudy;

  const roleLabels = {
    design: "Design",
    engineering: "Engineering",
    product: "Product"
  };

  if (!bigProjects.display) {
    return (
      <div
        className={
          isDark
            ? "project-detail-page dark-mode-page"
            : "project-detail-page"
        }
      >
        <div className="project-detail-top">
          <a className="project-detail-back" href={homeHashHref()}>
            ← Back to portfolio
          </a>
          <ToggleSwitch />
        </div>
        <div className="project-detail-not-found">
          <h1>Projects are not available</h1>
        </div>
      </div>
    );
  }

  if (!project || !cs) {
    return (
      <div
        className={
          isDark
            ? "project-detail-page dark-mode-page"
            : "project-detail-page"
        }
      >
        <div className="project-detail-top">
          <a className="project-detail-back" href={homeHashHref()}>
            ← Back to portfolio
          </a>
          <ToggleSwitch />
        </div>
        <div className="project-detail-not-found">
          <h1>Project not found</h1>
          <p className="project-detail-not-found-sub">
            <a className="project-detail-back" href={homeHashHref()}>
              Return home
            </a>
          </p>
        </div>
      </div>
    );
  }

  const roleEntries = cs.role
    ? Object.entries(cs.role).filter(([, items]) => items && items.length)
    : [];

  return (
    <div
      className={
        isDark ? "project-detail-page dark-mode-page" : "project-detail-page"
      }
    >
      <div className="project-detail-top">
        <a className="project-detail-back" href={homeHashHref()}>
          ← Back to portfolio
        </a>
        <ToggleSwitch />
      </div>

      <article className="project-detail-inner">
        <h1 className="project-detail-title">{project.projectName}</h1>
        {cs.tagline ? (
          <p className="project-detail-tagline">{cs.tagline}</p>
        ) : null}
         {(cs.links && cs.links.length) ||
        (cs.linksMedia && cs.linksMedia.length) ? (
          <section className="project-detail-section">
            {cs.links && cs.links.length ? (
              <div className="project-detail-links">
                {cs.links.map((link, i) => (
                  <a
                    key={i}
                    className="project-detail-link"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            ) : null}
            <CaseStudySectionMedia items={cs.linksMedia} />
          </section>
        ) : null}

        {(cs.problem || (cs.problemMedia && cs.problemMedia.length)) ? (
          <section className="project-detail-section">
            <h2>Problem</h2>
            {cs.problem ? <p>{cs.problem}</p> : null}
            <CaseStudySectionMedia items={cs.problemMedia} />
          </section>
        ) : null}

        {(cs.solution || (cs.solutionMedia && cs.solutionMedia.length)) ? (
          <section className="project-detail-section">
            <h2>Solution</h2>
            {cs.solution ? <p>{cs.solution}</p> : null}
            <CaseStudySectionMedia items={cs.solutionMedia} />
          </section>
        ) : null}

        {roleEntries.length > 0 || (cs.roleMedia && cs.roleMedia.length) ? (
          <section className="project-detail-section">
            <h2>My role</h2>
            {roleEntries.map(([key, items]) => (
              <div key={key} className="project-detail-role-block">
                <h3>{roleLabels[key] || key}</h3>
                <ul>
                  {items.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
            <CaseStudySectionMedia items={cs.roleMedia} />
          </section>
        ) : null}

        {(cs.outcome && cs.outcome.length) ||
        (cs.outcomeMedia && cs.outcomeMedia.length) ? (
          <section className="project-detail-section">
            <h2>Outcome</h2>
            {cs.outcome && cs.outcome.length ? (
              <ul>
                {cs.outcome.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            ) : null}
            <CaseStudySectionMedia items={cs.outcomeMedia} />
          </section>
        ) : null}

        {(cs.techStack || (cs.techStackMedia && cs.techStackMedia.length)) ? (
          <section className="project-detail-section">
            <h2>Tech stack</h2>
            {cs.techStack ? <p>{cs.techStack}</p> : null}
            <CaseStudySectionMedia items={cs.techStackMedia} />
          </section>
        ) : null}
       
      </article>
    </div>
  );
}
