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
      <Navbar basePath="/" />
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
                Et kreativt prosjekt for visuelt frislipp med fokus på animasjon,
                identitet og scenografi.
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
              Fristil er et prosjekt som gir rom for kreativ utforskning og
              visuell historiefortelling. Her ble uttrykk, farge og bevegelse
              brukt for å skape en helhetlig identitet.
            </p>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Problem &amp; mål</h2>
            <p>
              Hvordan kan vi skape et fleksibelt visuelt univers som lar idéer og
              konsepter leve på tvers av flater og formater?
            </p>
            <ul className="project-list">
              <li>Skape en tydelig, men leken visuell identitet</li>
              <li>Utforske animasjon og scenografi i digitale flater</li>
              <li>Bygge et uttrykk som tåler variasjon</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Min rolle</h2>
            <ul className="project-list">
              <li>Konseptutvikling og moodboards</li>
              <li>Visuell identitet og layout</li>
              <li>Motion-prinsipper og animasjonsretning</li>
              <li>Presentasjon og formidling</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Designprosess</h2>
            <ul className="project-list">
              <li>Fase 1: Research og visuell inspirasjon</li>
              <li>Fase 2: Konseptutvikling og stilvalg</li>
              <li>Fase 3: Produksjon av identitet og animasjoner</li>
              <li>Fase 4: Samling og presentasjon av helhetlig uttrykk</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-solution project-reveal">
            <h2>Løsning</h2>
            <p>
              Fristil resulterte i et fleksibelt visuelt system med tydelig
              signatur, som kan skaleres til både digitale og fysiske flater.
            </p>
            <img src={fristilMockups} alt="Fristil mockups" />
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Viktige lærdommer</h2>
            <ul className="project-list">
              <li>Et sterkt konsept gir frihet i visuell utfoldelse</li>
              <li>Helhet i uttrykket skaper tydelig identitet</li>
              <li>Eksperimentering gir nye idéer og løsninger</li>
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
