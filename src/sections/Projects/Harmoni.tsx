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
                Harmoni er en konseptuell mobilapp som støtter psykisk helse hos
                unge voksne gjennom daglig egenomsorg, trygg tilgang til
                ressurser og mulighet for å hjelpe andre.
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
              <span>Varighet:</span> 8 uker
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
              Prosjektet ble utviklet som en semesteroppgave i emnet
              Designprosjekt ved Høyskolen Kristiania. Målet var å utforske
              hvordan en digital løsning kan bidra til å redusere stigma rundt
              psykisk helse og gjøre støtte mer tilgjengelig i hverdagen.
              Løsningen er basert på brukersentrert design, universell utforming
              og iterativ prototyping, og ble kontinuerlig forbedret gjennom
              brukertesting.
            </p>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Problem &amp; mål</h2>
            <p>
              Hvordan kan en digital løsning støtte unge voksne med mild til
              moderat psykisk ubehag, redusere stigma rundt psykisk helse og
              gjøre det enklere å søke hjelp, både for seg selv og for andre?
            </p>
            <ul className="project-list">
              <li>
                Gi brukerne lett tilgjengelig støtte og verktøy for egen psykisk
                helse
              </li>
              <li>
                Senke terskelen for å søke hjelp og oppmuntre til åpenhet og
                dialog
              </li>
              <li>
                Tilrettelegge for at brukere kan støtte venner som viser tegn på
                psykisk ubehag
              </li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Min rolle</h2>
            <ul className="project-list">
              <li>Innsiktsarbeid og analyse av brukerbehov</li>
              <li>Utvikling av konseptuell modell og informasjonsarkitektur</li>
              <li>Interaksjonsdesign og prototyping i Figma</li>
              <li>Planlegging, gjennomføring og analyse av brukertester</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Designprosess</h2>
            <ul className="project-list">
              <li>
                Fase 1: Kartlegging av behov, utfordringer og eksisterende
                løsninger innen psykisk helse
              </li>
              <li>
                Fase 2: Utarbeidelse av konseptuell modell, oversiktskart og
                trådskisser
              </li>
              <li>
                Fase 3: Utvikling av klikkbare wireframes og high-fidelity
                prototype i Figma
              </li>
              <li>
                Fase 4: Brukertesting med representative deltakere og
                forbedringer basert på funn
              </li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-solution project-reveal">
            <h2>Løsning</h2>
            <p>
              Harmoni samler funksjoner som oppmerksomhetstrening, humørsporing,
              råd og ressurser, chatbot, nødhjelp og «hjelp en venn» i én
              helhetlig app. Løsningen er designet for å være trygg,
              inkluderende og enkel å bruke, med tydelig navigasjon, beroligende
              visuelle valg og fokus på universell utforming. Appen gir brukerne
              både støtte i egen hverdag og verktøy for å hjelpe andre.
            </p>
            <img src={harmoniMockups} alt="Harmoni mockups" />
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Viktige lærdommer</h2>
            <ul className="project-list">
              <li>
                Tidlig og kontinuerlig brukertesting avdekker kritiske
                forbedringsområder
              </li>
              <li>
                God informasjonsarkitektur er avgjørende i sensitive og
                komplekse domener
              </li>
              <li>
                Universell utforming styrker brukeropplevelsen for alle, ikke
                bare enkelte grupper
              </li>
            </ul>
            <a
              className="project-cta"
              href="https://www.figma.com/design/bPH9Iw8WCGkhd2K7J13m7w/Harmoni?node-id=770-1244&t=Z7C3Bdw0wm5oO9OM-1"
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
