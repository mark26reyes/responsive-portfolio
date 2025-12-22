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
                Dette bachelorprosjektet omfatter utvikling av en moderne,
                responsiv nettside kombinert med en helhetlig rebranding, med
                mål om å styrke oppdragsgiverens digitale tilstedeværelse og
                merkevare.
              </p>
            </div>
            <div className="project-hero-logo">
              <img src={fristilLogo} alt="Fristil logo" />
            </div>
          </div>

          <div className="project-divider" aria-hidden="true" />

          <div className="project-meta">
            <p>
              <span>Rolle:</span> Visuell designer
            </p>
            <p>
              <span>Varighet:</span> 4 uker
            </p>
            <p>
              <span>Team:</span> Kreativt samarbeid
            </p>
            <p>
              <span>Verktøy:</span> Adobe CC, Figma
            </p>
          </div>

          <section className="project-section project-reveal">
            <h2>Kort om prosjektet</h2>
            <p>
              Prosjektet ble gjennomført som bacheloroppgave ved Høyskolen
              Kristiania i samarbeid med ekstern oppdragsgiver. Oppgaven tok
              utgangspunkt i behovet for en profesjonell og brukervennlig
              digital plattform som tydelig kommuniserer selskapets tjenester,
              artister og verdier. Arbeidet kombinerte strategisk design,
              brukersentrert metodikk og teknisk utvikling, med kontinuerlig
              dialog og iterasjon basert på tilbakemeldinger fra oppdragsgiver
              og brukertesting.
            </p>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Problem &amp; mål</h2>
            <p>
              Hvordan kan en helhetlig rebranding og en brukersentrert nettside
              styrke oppdragsgiverens digitale tilstedeværelse, tydeliggjøre
              deres tjenester og bidra til økt synlighet, kontakt og
              konkurransekraft i markedet?
            </p>
            <ul className="project-list">
              <li>
                Skape en profesjonell og konsistent visuell identitet som
                reflekterer selskapets verdier
              </li>
              <li>
                Utvikle en brukervennlig og responsiv nettside tilpasset ulike
                enheter og målgrupper
              </li>
              <li>
                BForenkle kommunikasjon mellom bedriften, artister og
                potensielle kunder
              </li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Min rolle</h2>
            <ul className="project-list">
              <li>
                UX/UI-design med ansvar for struktur, navigasjon og visuell
                identitet
              </li>
              <li>Utvikling av wireframes og design i Figma</li>
              <li>
                Deltakelse i teknisk utvikling ved bruk av moderne webteknologi
              </li>
              <li>
                Planlegging og gjennomføring av brukertesting og iterasjoner
              </li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Designprosess</h2>
            <ul className="project-list">
              <li>
                Fase 1: Kartlegging av oppdragsgivers behov, mål og marked
              </li>
              <li>
                Fase 2: Informasjonsarkitektur, wireframes og rebrand-retning
              </li>
              <li>
                Fase 3: Visuell identitet, UI-design og responsiv layout i Figma
              </li>
              <li>
                Fase 4: Implementering, brukertesting og justeringer før
                levering
              </li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-solution project-reveal">
            <h2>Løsning</h2>
            <p>
              Resultatet ble en moderne og brukervennlig nettside som fungerer
              som et digitalt showcase for oppdragsgiver. Løsningen presenterer
              artister, tjenester og kontaktinformasjon på en tydelig og
              profesjonell måte, og støttes av en helhetlig visuell identitet
              med ny logo, fargepalett og typografi. Nettsiden er optimalisert
              for både desktop og mobil, og fungerer som et sentralt verktøy for
              synlighet, markedsføring og samarbeid.
            </p>
            <img src={fristilMockups} alt="Fristil mockups" />
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Viktige lærdommer</h2>
            <ul className="project-list">
              <li>
                Tett samarbeid med oppdragsgiver er avgjørende for å lykkes med
                reelle prosjekter
              </li>
              <li>
                Brukertesting gir verdifull innsikt også i B2B- og
                showcase-orienterte løsninger
              </li>
              <li>
                En tydelig visuell identitet styrker både brukeropplevelse og
                merkevare
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
