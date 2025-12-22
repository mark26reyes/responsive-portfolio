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
      "• Ansvar for visuell utforming av butikkens produkter.",
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
      "• Ivaretok høy nøyaktighet og sporbarhet i logistikkprosesser.",
      "• Sikret at pakker ble levert i tide gjennom effektiv koordinering.",
      "• Bisto med forbedringer av interne rutiner for bedre effektivitet.",
    ],
  },
  {
    role: "Service Advisor",
    company: "Elkjøp Fornebu",
    period: "Juli 2024 – nåværende",
    summary:
      "Håndterer kundehenvendelser i support med fokus på brukerbehov og effektiv problemløsning.",
    highlights: [
      "• Løser flere saker samtidig med høyt kvalitetsnivå i kundebehandlingen.",
      "• Bidrar til positiv kundeopplevelse i krevende situasjoner.",
      "• Samarbeider med salgsteam for å identifisere brukerbehov og anbefale løsninger.",
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
          <h2 className="experience-title">Erfaring</h2>
          <p className="experience-intro">
            Gjennom studier og praktisk arbeid har jeg opparbeidet meg relevant
            erfaring innen interaksjonsdesign, brukertesting og brukernær
            problemløsning. Jeg har i tillegg bakgrunn fra service- og
            butikkarbeid, som har gitt meg verdifull innsikt i brukerbehov,
            kommunikasjon og arbeid i høyt tempo.
            <br />
            <br />
            Erfaringen fra kundevendte roller har styrket min forståelse for
            ulike brukere, tydelig formidling og viktigheten av gode løsninger i
            praksis. Dette tar jeg med meg inn i designarbeidet, der jeg er
            opptatt av å skape digitale produkter som er intuitive,
            tilgjengelige og faktisk fungerer for menneskene som bruker dem.
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
