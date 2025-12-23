import { useEffect, useRef } from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import "./ProjectStyle.css";

import fristilLogo from "../../assets/fristil.png";
import fristilMockups from "../../assets/fristil-mockups.png";

export default function Fristil() {
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
      <Navbar basePath="/" forceBackground />
      <main id="fristil" className="project-main">
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
              <h1>Fristil</h1>
              <p>
                Fristil Records er et bachelorprosjekt der målet var å utvikle
                en moderne og brukervennlig nettside som styrker plateselskapets
                digitale tilstedeværelse og fungerer som et tydelig showcase for
                artister og tjenester.
              </p>
            </div>
            <div className="project-hero-logo">
              <img src={fristilLogo} alt="Fristil logo" />
            </div>
          </div>

          <div className="project-divider" aria-hidden="true" />

          <div className="project-meta">
            <p>
              <span>Rolle:</span> UX/UI Designer
            </p>
            <p>
              <span>Varighet:</span> 12 uker (vår 2025)
            </p>
            <p>
              <span>Team:</span> Tverrfaglig gruppe (3 personer) i samarbeid med
              oppdragsgiver
            </p>
            <p>
              <span>Verktøy:</span> Figma, Wix Studio, Trello (Kanban), Google
              Skjemaer
            </p>
          </div>

          <section className="project-section project-reveal">
            <h2>Kort om prosjektet</h2>
            <p>
              Prosjektet ble gjennomført som bacheloroppgave ved Høyskolen
              Kristiania i samarbeid med Fristil Records AS. Løsningen skulle
              ikke fungere som en salgstrakt, men som en digital plattform for
              synlighet, merkevarebygging og enkel kontakt. Arbeidet var
              forankret i Lean UX, brukertesting og tett dialog med
              oppdragsgiver, og fokuserte på struktur, tydelig kommunikasjon og
              estetisk uttrykk tilpasset en ung målgruppe.
            </p>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Problem &amp; mål</h2>
            <p>
              Hvordan kan Fristil Records styrke sin digitale identitet gjennom
              en brukersentrert nettside som tydelig presenterer artister og
              tjenester, og samtidig oppleves relevant, moderne og enkel å bruke
              for målgruppen?
            </p>
            <ul className="project-list">
              <li>
                Skape et profesjonelt og visuelt helhetlig digitalt uttrykk som
                reflekterer Fristil Records sin identitet
              </li>
              <li>
                Presentere artister og tjenester på en oversiktlig og
                engasjerende måte
              </li>
              <li>
                Tilrettelegge for enkel kontakt uten å bygge en tradisjonell
                salgstrakt
              </li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Min rolle</h2>
            <ul className="project-list">
              <li>
                UX/UI-design med ansvar for struktur, navigasjon og visuelt
                uttrykk
              </li>
              <li>Innsiktsarbeid og brukertesting rettet mot målgruppen</li>
              <li>Prototyping og ferdig design i Figma</li>
              <li>Bidrag til planlegging og fremdrift gjennom Kanban</li>
              <li>Ferdig løsning i WIX Studio</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Designprosess</h2>
            <ul className="project-list">
              <li>
                Fase 1: Kartlegging av målgruppe, behov og forventninger gjennom
                innsiktsarbeid
              </li>
              <li>
                Fase 2: Informasjonsarkitektur og innholdsstruktur tilpasset et
                digitalt showcase
              </li>
              <li>
                Fase 3: Utvikling av visuell retning og interaktiv prototype i
                Figma
              </li>
              <li>
                Fase 4: Brukertesting og forbedringer basert på tilbakemeldinger
                fra brukere og oppdragsgiver
              </li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-solution project-reveal">
            <h2>Løsning</h2>
            <p>
              Resultatet ble en moderne og responsiv nettside utviklet i Wix
              Studio, med tydelig fokus på artister, visuell identitet og enkel
              navigasjon. Nettsiden fungerer som et digitalt utstillingsvindu
              for Fristil Records, hvor innhold, estetikk og struktur jobber
              sammen for å bygge merkevare og senke terskelen for kontakt og
              samarbeid.
            </p>
            <img src={fristilMockups} alt="Fristil mockups" />
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Viktige lærdommer</h2>
            <ul className="project-list">
              <li>
                Tydelig avgrensning av formål er avgjørende når løsningen ikke
                skal være salgsdrevet
              </li>
              <li>
                Brukertesting gir verdifull innsikt også i prosjekter med
                hovedfokus på visuell identitet
              </li>
              <li>
                Struktur og innhold er like viktig som estetikk for å skape en
                god helhetsopplevelse
              </li>
            </ul>
            <a
              className="project-cta"
              href="https://www.fristilrecords.no/"
              target="_blank"
              rel="noreferrer"
            >
              Besøk nettsiden
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
