import { useEffect, useRef } from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import "./ProjectStyle.css";

import matsparLogo from "../../assets/matspar.png";
import matsparMockups from "../../assets/matspar-mockups.png";

export default function MatSpar() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const handleBackClick = () => {
    sessionStorage.setItem("skipSmoothScroll", "1");
  };

  useEffect(() => {
    const sections =
      contentRef.current?.querySelectorAll<HTMLElement>(".project-reveal") ??
      [];
    if (!sections.length) return;

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
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const restoreBehavior = sessionStorage.getItem("restoreScrollBehavior");
    const previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.style.scrollBehavior =
      restoreBehavior ?? previousBehavior;
    sessionStorage.removeItem("restoreScrollBehavior");
  }, []);

  return (
    <div className="project-page">
      <Navbar basePath="/" />
      <main id="matspar" className="project-main">
        <div className="project-container" ref={contentRef}>
          <a
            className="project-back"
            href="#work"
            aria-label="Tilbake til prosjekter"
            onClick={handleBackClick}
          >
            <svg
              viewBox="0 0 32 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 1L1 8L8 15" />
              <path d="M2 8H31" />
            </svg>
            Tilbake
          </a>

          <div className="project-hero">
            <div className="project-hero-text">
              <h1>MatSpar</h1>
              <p>En app for smart matplanlegging, budsjett og bærekraft.</p>
            </div>
            <div className="project-hero-logo">
              <img src={matsparLogo} alt="MatSpar logo" />
            </div>
          </div>

          <div className="project-divider" aria-hidden="true" />

          <div className="project-meta">
            <p>
              <span>Rolle:</span> UX/UI Designer
            </p>
            <p>
              <span>Varighet:</span> 8 uker
            </p>
            <p>
              <span>Team:</span> Gruppeprosjekt
            </p>
            <p>
              <span>Verktøy:</span> Figma, Lean UX
            </p>
          </div>

          <section className="project-section project-reveal">
            <h2>Kort om prosjektet</h2>
            <p>
              MatSpar ble utviklet som et gruppeprosjekt, med mål om å lage en
              app for studenter og familier som ønsker bedre kontroll over
              matbudsjettet og å redusere matsvinn. Vi jobbet spesielt med
              innsiktsarbeid, struktur og prototyping i Figma.
            </p>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Problem &amp; mål</h2>
            <p>
              Hvordan kan studenter og familier få bedre oversikt over
              måltidsplanlegging og matinnkjøp, slik at de kan redusere matsvinn
              og samtidig holde seg innenfor et stramt matbudsjett – uten at det
              oppleves tidkrevende eller komplisert i hverdagen?
            </p>
            <ul className="project-list">
              <li>Gi brukerne bedre økonomisk kontroll over matforbruket</li>
              <li>Redusere matsvinn gjennom bedre organisering</li>
              <li>Forenkle måltidsplanlegging for ulike livssituasjoner</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Min rolle</h2>
            <ul className="project-list">
              <li>Innsiktsarbeid gjennom spørreundersøkelser</li>
              <li>Strukturering av informasjonsarkitektur</li>
              <li>Wireframes og interaktiv prototyping i Figma</li>
              <li>Deltakelse i brukertesting og iterasjoner</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Designprosess</h2>
            <ul className="project-list">
              <li>
                Fase 1: Innsikt via spørreundersøkelser, intervjuer og
                konkurrentanalyse
              </li>
              <li>Fase 2: Idégenerering og low-fidelity skisser</li>
              <li>
                Fase 3: Iterativ prototyping og interaksjonsdesign i Figma
              </li>
              <li>Fase 4: Brukertesting og forbedring basert på feedback</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-solution project-reveal">
            <h2>Løsning</h2>
            <p>
              MatSpar samler måltidsplanlegging, handleliste og budsjett i en
              oversiktlig løsning med fokus på enkel navigasjon og
              brukervennlighet.
            </p>
            <img src={matsparMockups} alt="MatSpar mockups" />
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Viktige lærdommer</h2>
            <ul className="project-list">
              <li>Tidlig innsiktsarbeid gir bedre designbeslutninger</li>
              <li>
                Iterasjon basert på brukerfeedback forbedrer brukeropplevelsen
              </li>
              <li>Samarbeid og tydelig kommunikasjon gir bedre løsninger</li>
            </ul>
            <a
              className="project-cta"
              href="https://www.figma.com/design/ObFSRwwNMJGFbuidoVTQcM/MatSpar?node-id=420-3691&t=WZsGUxTV9Ig3qCta-1"
              target="_blank"
              rel="noreferrer"
            >
              Se full prototype i Figma
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
