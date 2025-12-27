import { useEffect, useRef } from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import "./ProjectStyle.css";

import fristilMockups from "../../assets/fristil-mockups.png";
import fristilSurvey from "../../assets/FristilSpørreundersøkelse.png";
import fristilTrello from "../../assets/FristilTrello.png";
import fristilPalette from "../../assets/FristilPalette.png";
import fristilWireframes from "../../assets/FristilWireframes.png";
import fristilSolution from "../../assets/FristilLøsning.png";
import fristilTraffic from "../../assets/FristilTrafikk.png";

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
      { threshold: 0.1, rootMargin: "0px 0px 0px 0px" }
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

          <div className="project-hero project-hero--split">
            <div className="project-hero-text">
              <h1>Fristil</h1>
              <p style={{ textAlign: "center" }}>
                Et digitalt showcase for Fristil Records med fokus på mobil,
                merkevare og brukervennlighet.
              </p>
              <a
                className="project-cta project-cta--hero"
                href="https://www.fristilrecords.no/"
                target="_blank"
                rel="noreferrer"
              >
                Besøk nettsiden
              </a>
            </div>
            <div className="project-hero-media">
              <img src={fristilMockups} alt="Fristil mockups" />
            </div>
          </div>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-intro project-reveal">
            <h3 className="project-section-title">Kort om prosjektet</h3>
            <p>
              Dette bachelorprosjektet omhandler design og utvikling av en
              brukersentrert og responsiv nettside for Fristil Records AS – et
              norsk plateselskap rettet mot ungdoms- og russmarkedet. Nettsiden
              fungerer som et digitalt showcase som styrker selskapets merkevare
              og profesjonelle uttrykk, uten å erstatte eksisterende
              markedsføringskanaler i sosiale medier. Løsningen er utviklet med
              hovedfokus på mobilbruk, visuell identitet og brukervennlighet.
            </p>

            <div className="project-meta project-meta--intro">
              <p>
                <span>Rolle:</span> UX- og interaksjonsdesigner
              </p>
              <p>
                <span>Varighet:</span> 12 uker (vår 2025)
              </p>
              <p>
                <span>Team:</span> Gruppeprosjekt (3 studenter)
              </p>
              <p>
                <span>Verktøy:</span> Figma, Wix Studio, Trello (Kanban), Google
                Skjemaer
              </p>
            </div>

            <p className="project-role">
              Jeg hadde ansvar for innsiktsarbeid, konseptutvikling,
              informasjonsarkitektur, interaksjonsdesign og visuell utforming.
              Jeg deltok aktivt i prototyping, brukertesting og iterativ
              forbedring av løsningen, samt i dialog med oppdragsgiver for å
              sikre at designvalg var forankret i både brukerbehov og
              forretningsmål.
            </p>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-problem project-reveal">
            <h3 className="project-section-title">Problem &amp; mål</h3>
            <p>
              Hvordan kan vi designe og utvikle en funksjonell og engasjerende
              nettside som effektivt kommuniserer Fristil Records sin merkevare,
              samtidig som den ivaretar målgruppens behov for brukervennlighet,
              visuell appell og rask ytelse?
            </p>
            <ul className="project-list">
              <li>
                Skape et moderne og ungdomsrettet visuelt uttrykk som styrker
                Fristil Records sin merkevare
              </li>
              <li>
                Sikre høy ytelse og optimal mobilopplevelse for en
                mobilorientert målgruppe
              </li>
              <li>
                Utvikle en brukervennlig og engasjerende nettside som inviterer
                til utforskning og gjenbesøk
              </li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-design project-reveal">
            <h3 className="project-section-title">Designprosess</h3>
            <p>
              Prosessen fulgte en brukersentrert, iterativ tilnærming med Lean
              UX og Design Thinking som rammeverk. Fokus var å avklare behov,
              teste tidlig og sikre et visuelt uttrykk som treffer målgruppen.
            </p>

            <div className="project-step project-reveal">
              <h3>1. Innsikt</h3>
              <div className="project-step-grid">
                <div>
                  <h4>Spørreundersøkelse i målgruppen</h4>
                  <p>
                    Prosessen startet med en kvantitativ spørreundersøkelse
                    rettet mot ungdom i alderen 16–19 år. Undersøkelsen kartla
                    preferanser knyttet til visuelt uttrykk, navigasjon og
                    innhold på nettsider for plateselskaper.
                  </p>
                  <img
                    className="project-inline-image"
                    src={fristilSurvey}
                    alt="Spørreundersøkelse i målgruppen"
                  />
                </div>
                <div>
                  <h4>Innsikt fra oppdragsgiver</h4>
                  <p>
                    Parallelt ble det gjennomført innsiktsarbeid i tett dialog
                    med Fristil Records for å forstå selskapets visjon,
                    merkevare og strategiske mål.
                  </p>
                  <img
                    className="project-inline-image"
                    src={fristilTrello}
                    alt="Innsikt fra oppdragsgiver"
                  />
                </div>
              </div>
            </div>

            <div
              className="project-divider project-reveal"
              aria-hidden="true"
            />

            <div className="project-step project-reveal">
              <h3>2. Idé, konsept og behov</h3>
              <div className="project-step-grid">
                <div>
                  <h4>Hypotesedrevet tilnærming (Lean UX)</h4>
                  <p>
                    Basert på innsikten formulerte vi en tydelig hypotese for
                    MVP-testing: at et visuelt konsistent, mobiloptimalisert
                    design med tydelig navigasjon og integrasjon av kjente
                    plattformer ville oppleves som profesjonelt og engasjerende
                    av målgruppen.
                  </p>
                </div>
                <div>
                  <h4>Avklaring av konsept og omfang</h4>
                  <p>
                    I samarbeid med oppdragsgiver definerte vi løsningen som et
                    digitalt showcase – ikke en salgskanal. Funksjoner som
                    nettbutikk og booking ble bevisst utelatt for å holde fokus
                    på merkevarebygging, artister og visuell kommunikasjon.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="project-divider project-reveal"
              aria-hidden="true"
            />

            <div className="project-step project-reveal">
              <h3>3. Design, rebranding og prototyping</h3>
              <div className="project-step-grid">
                <div>
                  <h4>Informasjonsarkitektur og struktur</h4>
                  <p>
                    Innholdet ble strukturert i fem hovedseksjoner: Hjem,
                    Artister, Om oss, Markedsføring og Live, for å gi rask
                    oversikt og lav kognitiv belastning.
                  </p>
                  <h4>Visuell identitet og uttrykk</h4>
                  <p>
                    Designet ble utviklet med et mørkt, minimalistisk uttrykk
                    kombinert med sterke visuelle elementer og neon-aksenter.
                  </p>
                </div>
                <div>
                  <h4>Prototyping i Figma</h4>
                  <p>
                    Det ble utviklet både wireframes og en høyoppløselig
                    interaktiv prototype i Figma som ble validert med
                    oppdragsgiver.
                  </p>
                  <h4>MVP-testing og funn</h4>
                  <p>
                    En fungerende MVP ble utviklet i Wix Studio og testet med
                    målgruppen. Testene kombinerte observasjon, oppgaveløsning
                    og korte intervjuer, og ga konkrete forbedringspunkter.
                  </p>
                </div>
              </div>
              <div className="project-step-images project-step-images--side">
                <img src={fristilPalette} alt="Visuell identitet og palett" />
                <img
                  className="project-image-wide"
                  src={fristilWireframes}
                  alt="Wireframes og struktur"
                />
              </div>
            </div>

            <div
              className="project-divider project-reveal"
              aria-hidden="true"
            />

            <div className="project-step project-reveal">
              <h3>4. Testing &amp; validering</h3>
              <div className="project-step-grid">
                <div>
                  <h4>Kvalitative og kvantitative funn</h4>
                  <p>
                    Brukertestene viste at løsningen ble oppfattet som moderne
                    og oversiktlig, samtidig som konkrete forbedringspunkter ble
                    identifisert og iterert på.
                  </p>
                </div>
                <div>
                  <h4>Iterativ forbedring</h4>
                  <p>
                    Resultatene ble brukt til å justere navigasjon, struktur og
                    visuell kommunikasjon for å treffe målgruppen bedre.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-solution-detail project-reveal">
            <h3 className="project-section-title">5. Løsningen</h3>
            <div className="project-step-grid">
              <div>
                <h4>Digitalt showcase for merkevaren</h4>
                <p>
                  Den ferdige løsningen presenterer Fristil Records som en
                  profesjonell og seriøs aktør i musikkbransjen, med tydelig
                  fokus på artister, visuell identitet og engasjerende innhold.
                </p>
              </div>
              <div>
                <h4>Fleksibel og vedlikeholdbar plattform</h4>
                <p>
                  Valget av Wix Studio gjør det enkelt for oppdragsgiver å
                  oppdatere innhold og videreutvikle nettsiden uten teknisk
                  bistand, noe som sikrer langsiktig verdi.
                </p>
              </div>
            </div>
            <div className="project-step-images">
              <img src={fristilSolution} alt="Fristil løsning" />
            </div>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-ui project-reveal">
            <h3 className="project-section-title">6. UI</h3>
            <div className="project-step-grid">
              <div>
                <h4>Mobiloptimalisert grensesnitt</h4>
                <p>
                  Grensesnittet er designet med mobil som primærplattform, med
                  tydelig navigasjon, store trykkflater og rask lastetid –
                  tilpasset målgruppens faktiske bruksmønstre.
                </p>
              </div>
              <div>
                <h4>Konsistent visuell stil</h4>
                <p>
                  UI-designet er konsekvent på tvers av sider og enheter, med
                  gjenkjennelige komponenter, tydelig hierarki og integrasjon av
                  kjente plattformer som Spotify og Instagram for økt
                  gjenkjennelse.
                </p>
              </div>
            </div>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-conclusion project-reveal">
            <h3 className="project-section-title">7. Konklusjon</h3>
            <div className="project-step-grid">
              <div>
                <h4>Resultat og måloppnåelse</h4>
                <p>
                  Prosjektet resulterte i en brukervennlig, visuelt
                  gjennomarbeidet og målgruppetilpasset nettside som oppfyller
                  både oppdragsgivers og prosjektgruppens mål. Brukertestene
                  indikerer høy grad av brukertilfredshet og styrket oppfatning
                  av Fristil Records som merkevare.
                </p>
              </div>
              <div>
                <h4>Faglig læring</h4>
                <p>
                  Prosjektet ga verdifull erfaring med Lean UX i praksis,
                  hypotesedrevet design og tett samarbeid med en reell kunde.
                  Arbeidet har styrket forståelsen for hvordan innsiktsbaserte
                  designprosesser bidrar til bedre beslutninger og mer
                  treffsikre løsninger.
                </p>
              </div>
            </div>
            <div className="project-step-images">
              <img src={fristilTraffic} alt="Resultater og trafikk" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
