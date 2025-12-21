import { useEffect, useRef } from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import "./ProjectStyle.css";

import harmoniLogo from "../../assets/harmoni.png";
import harmoniMockups from "../../assets/harmoni-mockups.png";

export default function Harmoni() {
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
      <main id="harmoni" className="project-main">
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
              <h1>Harmoni</h1>
              <p>
                En app for psykisk helse som hjelper brukeren å finne ro, struktur
                og trygge rutiner i hverdagen.
              </p>
            </div>
            <div className="project-hero-logo">
              <img src={harmoniLogo} alt="Harmoni logo" />
            </div>
          </div>

          <div className="project-divider" aria-hidden="true" />

          <div className="project-meta">
            <p>
              <span>Rolle:</span> UX/UI Designer
            </p>
            <p>
              <span>Varighet:</span> 5 uker
            </p>
            <p>
              <span>Team:</span> Gruppeprosjekt
            </p>
            <p>
              <span>Verktøy:</span> Figma, FigJam
            </p>
          </div>

          <section className="project-section project-reveal">
            <h2>Kort om prosjektet</h2>
            <p>
              Harmoni ble utviklet for å gjøre det enklere å jobbe med mental
              helse i en hektisk hverdag. Fokus var å skape et trygt, rolig og
              brukervennlig grensesnitt som oppleves støttende over tid.
            </p>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Problem &amp; mål</h2>
            <p>
              Hvordan kan vi gi brukere en enkel, lavterskel måte å regulere
              stress, følge egne rutiner og utforske verktøy for mental balanse?
            </p>
            <ul className="project-list">
              <li>Skape trygghet gjennom tydelig struktur og rolig visuelt uttrykk</li>
              <li>Gjøre mentale øvelser lett tilgjengelige i hverdagen</li>
              <li>Støtte små, bærekraftige vaner over tid</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Min rolle</h2>
            <ul className="project-list">
              <li>Brukerinnsikt og definering av behov</li>
              <li>Design av informasjonsarkitektur</li>
              <li>UI-design og prototyping</li>
              <li>Testing og iterasjoner</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Designprosess</h2>
            <ul className="project-list">
              <li>Fase 1: Brukerinnsikt og problemdefinisjon</li>
              <li>Fase 2: Konseptutvikling og struktur</li>
              <li>Fase 3: Visuell retning og interaktiv prototyping</li>
              <li>Fase 4: Brukertesting og refinering</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-solution project-reveal">
            <h2>Løsning</h2>
            <p>
              Harmoni samler pusteøvelser, refleksjon og daglig logg i en rolig
              og oversiktlig app som gjør det lettere å bygge trygge rutiner.
            </p>
            <img src={harmoniMockups} alt="Harmoni mockups" />
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Viktige lærdommer</h2>
            <ul className="project-list">
              <li>Rolig visuell tone skaper trygghet og tilhørighet</li>
              <li>Små, konkrete funksjoner gir størst verdi for brukeren</li>
              <li>Iterasjon gir bedre flyt og tydeligere struktur</li>
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
