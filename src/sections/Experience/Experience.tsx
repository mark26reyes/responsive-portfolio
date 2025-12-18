import { useEffect, useRef } from "react";
import "./Experience.css";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

const skills = [
  "Figma",
  "UX",
  "UI",
  "Brukertesting",
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
];

const experiences: ExperienceItem[] = [
  {
    role: "Assisterende medarbeider",
    company: "Floriss Hasle",
    period: "Juni 2017 – nåværende",
    summary:
      "Ansvar for henting og oppakning av nye varer og visuell utstilling av produkter.",
    highlights: [
      "• Bygget sterk forståelse for kundebehov og forbedret kundeopplevelser",
      "• Samarbeidet tett med teamet for å sikre inspirerende butikklokale",
      "• Utviklet rutiner som sikret effektiv vareflyt og sesongmessige kampanjer",
    ],
  },
  {
    role: "Lagermedarbeider",
    company: "Bring Alfaset",
    period: "November 2020 – September 2023",
    summary:
      "Arbeidet med sortering og logistikk av pakker, samt optimalisering av arbeidsflyt.",
    highlights: [
      "• Ivaretok høy nøyaktighet og sporbarhet i logistikkprosesser",
      "• Sikret at pakker ble levert i tide gjennom effektiv koordinering",
      "• Bisto med forbedringer av interne rutiner for bedre effektivitet",
    ],
  },
  {
    role: "Service Advisor",
    company: "Elkjøp Fornebu",
    period: "Juli 2024 – nåværende",
    summary:
      "Håndterer kundehenvendelser og support med fokus på brukervennlige løsninger.",
    highlights: [
      "• Løser flere saker samtidig med høyt kvalitetsnivå i kundebehandlingen",
      "• Bidrar til positiv kundeopplevelse i krevende situasjoner",
      "• Samarbeider med salgsteam for å identifisere forbedringsområder",
    ],
  },
];

export default function ExperienceSection() {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

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

    cardRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-inner">
        <header className="experience-header">
          <h2 className="experience-title">Min erfaring</h2>
          <p className="experience-intro">
            Gjennom de få årene jeg har jobbet med interaksjonsdesign og
            brukertesting har jeg opparbeidet meg bred erfaring. Min bakgrunn
            spenner fra butikkdrift og logistikk til serviceyrket – erfaring jeg
            tar med meg inn i digitale produkter.
          </p>
        </header>

        <section aria-labelledby="skills-title" className="experience-skills">
          <h3 id="skills-title" className="experience-subtitle">
            Ferdigheter
          </h3>
          <ul className="experience-skill-list">
            {skills.map((skill) => (
              <li key={skill} className="experience-skill-pill">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="work-title" className="experience-work">
          <h3 id="work-title" className="experience-subtitle">
            Arbeidserfaring
          </h3>

          <div className="experience-cards">
            {experiences.map((job, index) => (
              <article
                key={job.role}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className={`experience-card ${index % 2 === 0 ? "" : ""}`}
              >
                <div className="experience-details">
                  <p className="experience-period">{job.period}</p>
                  <h4>
                    {job.role} – {job.company}
                  </h4>
                  <p className="experience-summary">{job.summary}</p>
                </div>

                <div className="experience-highlights">
                  <ul>
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
