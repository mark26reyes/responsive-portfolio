import { useEffect, useRef } from "react";
import "./Project.css";

import matsparLogo from "../../assets/matspar.png";
import onehubLogo from "../../assets/onehub.png";
import harmoniLogo from "../../assets/harmoni.png";
import fristilLogo from "../../assets/fristil.png";

type Project = {
  title: string;
  description: string;
  link: string;
  logo: string;
};

const projects: Project[] = [
  {
    title: "MatSpar",
    description:
      "En app for smart matplanlegging, budsjett og kontroll på handlelisten.",
    link: "#matspar",
    logo: matsparLogo,
  },
  {
    title: "OneHub",
    description:
      "Et system som samler informasjon fra ulike apper og gir en sømløs opplevelse for intern kommunikasjon og digitalt samarbeid.",
    link: "#onehub",
    logo: onehubLogo,
  },
  {
    title: "Harmoni",
    description:
      "En app for psykisk helse som gjør det lettere å utforske verktøy for å stabilisere hverdagen, komme ned i puls og bygge trygghet.",
    link: "#harmoni",
    logo: harmoniLogo,
  },
  {
    title: "Fristil",
    description:
      "Et inkluderende prosjekt skapt for kreativt frislipp. Alt fra animasjoner og motion til identiteter og scenografi.",
    link: "#fristil",
    logo: fristilLogo,
  },
];

const trackShades = ["#cfdccf", "#adc0a3", "#8da17e", "#6d7c5a"];

const zigZagPath =
  "M20 0 C 45 30, 80 30, 110 10 S 150 70, 120 100 S 70 130, 110 170 S 160 210, 130 240";

export default function ProjectsSection() {
  const projectRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("is-visible");
          } else {
            target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    projectRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="projects-section">
      <div className="projects-bg" aria-hidden="true" />
      <div className="projects-inner">
        <header className="projects-header">
          <h1 className="projects-eyebrow">Mitt kreative univers!</h1>
          <p className="projects-intro">
            “Velkommen til mitt kreative univers”, og her kan du oppleve noen av
            mine mest unike prosjekter hvor design og idé møter funksjon.
            Utforsk alt fra digital konseptutvikling til identitetsprosjekter
            skapt for å bygge opplevelser og gjøre hverdagen litt bedre.
          </p>
        </header>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article
              key={project.title}
              ref={(element) => {
                projectRefs.current[index] = element;
              }}
              className={`project-item ${index % 2 === 1 ? "" : "reverse"}`}
            >
              <div className="project-text">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link">
                  Utforsk mer
                </a>
              </div>

              <div className="project-track" aria-hidden="true">
                <svg viewBox="0 0 220 240" preserveAspectRatio="none">
                  <path
                    d={zigZagPath}
                    fill="none"
                    stroke={trackShades[index]}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="0 14"
                  />
                </svg>
              </div>

              <div className="project-logo">
                <img src={project.logo} alt={`${project.title} logo`} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
