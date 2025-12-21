import { useEffect, useRef } from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import "./ProjectStyle.css";

import oneHubLogo from "../../assets/onehub.png";
import oneHubMockups from "../../assets/onehub-mockups.png";

export default function OneHub() {
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
      <main id="onehub" className="project-main">
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
              <h1>OneHub</h1>
              <p>
                Et system som samler informasjon fra ulike apper og gir en
                sømløs opplevelse for intern kommunikasjon og samarbeid.
              </p>
            </div>
            <div className="project-hero-logo">
              <img src={oneHubLogo} alt="OneHub logo" />
            </div>
          </div>

          <div className="project-divider" aria-hidden="true" />

          <div className="project-meta">
            <p>
              <span>Rolle:</span> UX/UI Designer
            </p>
            <p>
              <span>Varighet:</span> 6 uker
            </p>
            <p>
              <span>Team:</span> Tverrfaglig gruppe
            </p>
            <p>
              <span>Verktøy:</span> Figma, Miro
            </p>
          </div>

          <section className="project-section project-reveal">
            <h2>Kort om prosjektet</h2>
            <p>
              OneHub ble utviklet for å redusere informasjonskaos i organisasjoner
              ved å samle kommunikasjon, dokumenter og oppgaver i én plattform.
              Prosjektet fokuserte på struktur, informasjonsflyt og enkel
              navigasjon.
            </p>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Problem &amp; mål</h2>
            <p>
              Hvordan kan vi gi ansatte én samlet arbeidsflate som gjør det
              enklere å finne viktig informasjon, holde oversikt og samarbeide
              uten å hoppe mellom mange systemer?
            </p>
            <ul className="project-list">
              <li>Samle kommunikasjon og ressurser i én tydelig struktur</li>
              <li>Forenkle samarbeid og redusere informasjonsstøy</li>
              <li>Skape en intuitiv opplevelse for hele organisasjonen</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Min rolle</h2>
            <ul className="project-list">
              <li>Brukerinnsikt og behovskartlegging</li>
              <li>Strukturering av informasjonsarkitektur</li>
              <li>Wireframes og visuelle konsepter</li>
              <li>Interaktiv prototyping og brukertesting</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Designprosess</h2>
            <ul className="project-list">
              <li>Fase 1: Innsikt, intervjuer og kartlegging av arbeidsflyt</li>
              <li>Fase 2: Konseptutvikling og strukturering av innhold</li>
              <li>Fase 3: Iterativ prototyping og design av dashboard</li>
              <li>Fase 4: Brukertesting og justeringer</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-solution project-reveal">
            <h2>Løsning</h2>
            <p>
              OneHub gir et samlet oversiktsbilde med rask tilgang til viktige
              kanaler, dokumenter og oppgaver, slik at intern kommunikasjon blir
              mer effektiv og tilgjengelig.
            </p>
            <img src={oneHubMockups} alt="OneHub mockups" />
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Viktige lærdommer</h2>
            <ul className="project-list">
              <li>Struktur og prioritering gjør komplekse systemer enklere</li>
              <li>Godt samarbeid gir raskere fremdrift og bedre løsninger</li>
              <li>Brukertesting avdekker friksjon tidlig</li>
            </ul>
            <a
              className="project-cta"
              href="https://www.figma.com"
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
