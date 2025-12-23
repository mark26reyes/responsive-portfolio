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
      <Navbar basePath="/" forceBackground />
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
                OneHub er et konsept for en mobilapp som forenkler hvordan
                brukere oppdager filmer og serier på tvers av flere
                strømmetjenester, ved å kombinere tradisjonell strømming med
                mekanikker fra sosiale medier.
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
              Prosjektet ble utviklet som en del av emnet Innovasjon og
              prototyping ved Høyskolen Kristiania. Målet var å utforske nye
              måter å redusere beslutningsutmattelse og forbedre
              innholdsoppdagelse i et fragmentert strømmemarked. Løsningen
              bygger på brukersentrert design, iterativ prototyping og
              brukertesting, med særlig fokus på visuell utforskning og
              personlig tilpasning.
            </p>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Problem &amp; mål</h2>
            <p>
              Hvordan kan vi gjøre oppdagelsen av filmer og serier på tvers av
              flere strømmetjenester mer intuitiv, engasjerende og mindre
              tidkrevende for brukere som opplever valgoverflod og
              beslutningsutmattelse?
            </p>
            <ul className="project-list">
              <li>
                Forenkle oppdagelse av nytt innhold gjennom et visuelt og
                intuitivt grensesnitt
              </li>
              <li>
                Redusere kognitiv belastning ved å samle innhold fra flere
                strømmetjenester på ett sted
              </li>
              <li>
                Skape en mer engasjerende og personlig opplevelse ved hjelp av
                algoritmiske anbefalinger og sosiale elementer
              </li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Min rolle</h2>
            <ul className="project-list">
              <li>
                Innsiktsarbeid gjennom spørreundersøkelser og brukerintervjuer
              </li>
              <li>
                Konseptutvikling og idéutforskning basert på Design Thinking
              </li>
              <li>Interaksjonsdesign og prototyping i Figma</li>
              <li>Planlegging, gjennomføring og analyse av brukertester</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Designprosess</h2>
            <ul className="project-list">
              <li>
                Fase 1: Kartlegging av brukerbehov, frustrasjoner og marked
                gjennom undersøkelser, intervjuer og konkurranseanalyse
              </li>
              <li>
                Fase 2: Utforsking av konsepter inspirert av sosiale medier og
                streamingtjenester
              </li>
              <li>
                Fase 3: Utvikling av en klikkbar MVP med rullbar trailer-feed og
                personaliserte anbefalinger
              </li>
              <li>
                Fase 4: Brukertesting med representative brukere og
                kontinuerlige forbedringer basert på funn
              </li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-solution project-reveal">
            <h2>Løsning</h2>
            <p>
              OneHub samler innhold fra ulike strømmetjenester i én felles
              plattform og presenterer det i en rullbar, visuell trailer-feed
              inspirert av sosiale medier. Brukere får personlige anbefalinger
              basert på preferanser og tidligere interaksjoner, samt tilgang til
              vurderinger, søk, filtrering og mulighet for sosial deling, alt
              designet for å gjøre innholdsoppdagelse raskere og mer
              engasjerende.
            </p>
            <img src={oneHubMockups} alt="OneHub mockups" />
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-reveal">
            <h2>Viktige lærdommer</h2>
            <ul className="project-list">
              <li>
                Brukertesting tidlig i prosessen avdekker kritiske
                forbedringsområder som ellers er lette å overse
              </li>
              <li>
                Reduksjon av kognitiv belastning er avgjørende for god
                brukeropplevelse i komplekse informasjonsmiljøer
              </li>
              <li>
                Iterativ prototyping gir bedre beslutningsgrunnlag enn å låse
                seg til én idé for tidlig
              </li>
            </ul>
            <a
              className="project-cta"
              href="https://www.figma.com/design/p4JxnaeXfreYq8qZu8DCTJ/OneHub?node-id=0-1&t=KMDFSkrS3MELiQUR-1"
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
