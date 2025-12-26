import { useEffect, useRef } from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import "./ProjectStyle.css";

import harmoniMockups from "../../assets/harmoni-mockups.png";
import harmoniKart from "../../assets/HarmoniKart.png";
import harmoniWireframes from "../../assets/HarmoniWireframes.png";
import harmoniShowcase from "../../assets/HarmoniShowCase.png";
import harmoniPalette from "../../assets/HarmoniPalette.png";

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

          <div className="project-hero project-hero--split">
            <div className="project-hero-text">
              <h1>Harmoni</h1>
              <p>
                En app for støtte, egenomsorg og trygg tilgang til ressurser.
              </p>
              <a
                className="project-cta project-cta--hero"
                href="https://www.figma.com/design/bPH9Iw8WCGkhd2K7J13m7w/Harmoni?node-id=770-1244&t=Z7C3Bdw0wm5oO9OM-1"
                target="_blank"
                rel="noreferrer"
              >
                Se full prototype i Figma
              </a>
            </div>
            <div className="project-hero-media">
              <img src={harmoniMockups} alt="Harmoni mockups" />
            </div>
          </div>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-intro project-reveal">
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

            <div className="project-meta project-meta--intro">
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

            <p className="project-role">
              Jeg jobbet med innsiktsarbeid og analyse av brukerbehov, utvikling
              av konseptuell modell og informasjonsarkitektur,
              interaksjonsdesign og prototyping i Figma, samt planlegging,
              gjennomføring og analyse av brukertester.
            </p>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-problem project-reveal">
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

          <section className="project-section project-design project-reveal">
            <h2>Designprosess</h2>
            <p>
              Harmoni ble utviklet gjennom en iterativ og brukersentrert
              designprosess med fokus på psykisk helse, universell utforming og
              høy brukskvalitet. Prosessen tok utgangspunkt i reelle behov hos
              unge voksne med mild til moderat psykisk ubehag, og hadde som mål
              å skape en trygg, tilgjengelig og støttende digital løsning.
              Designarbeidet kombinerte teoretisk forankring med praktisk
              testing, der innsikt fra brukere kontinuerlig påvirket videre
              utvikling av konsept, struktur og funksjonalitet.
            </p>

            <div className="project-step project-reveal">
              <h3>1. Innsikt</h3>
              <div className="project-step-grid project-step-grid--wide">
                <div>
                  <h4>Behov og utfordringer</h4>
                  <p>
                    Innsiktsarbeidet avdekket et tydelig behov for lavterskel
                    støtte innen psykisk helse, særlig for brukere som enten
                    ikke har tilgang til, eller vegrer seg for å oppsøke,
                    profesjonell hjelp. Mange opplever stigma knyttet til
                    psykisk ubehag, og mangler en trygg arena for refleksjon,
                    egenomsorg og støtte i hverdagen. Samtidig viste innsikten
                    at det også finnes et behov for verktøy som gjør det enklere
                    å hjelpe venner som sliter, uten å kreve faglig kompetanse.
                    Disse utfordringene la grunnlaget for et konsept som
                    kombinerer egenomsorg, sosial støtte og trygg veiledning i
                    én helhetlig løsning.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="project-divider project-reveal"
              aria-hidden="true"
            />

            <div className="project-step project-reveal">
              <h3>2. Konseptutvikling</h3>
              <div className="project-step-grid project-step-grid--aside">
                <div>
                  <h4>Modell og trådskisser</h4>
                  <p>
                    Basert på innsikten ble det utviklet en konseptuell modell
                    som definerte appens struktur, hovedfunksjoner og
                    sammenhenger. Modellen fungerte som et strategisk rammeverk
                    for videre designarbeid og sikret en tydelig rød tråd
                    gjennom løsningen. Tidlig i prosessen ble det gjennomført
                    idégenerering og brainstorming, samt analyse av eksisterende
                    løsninger innen psykisk helse. Trådskisser ble deretter
                    brukt for å visualisere informasjonsarkitektur, navigasjon
                    og flyt mellom skjermbilder. Dette gjorde det mulig å
                    utforske og teste konseptuelle valg før visuelle detaljer
                    ble introdusert.
                  </p>
                </div>
                <img
                  className="project-inline-image"
                  src={harmoniKart}
                  alt="Oversiktskart og modell for Harmoni"
                />
              </div>
            </div>

            <div
              className="project-divider project-reveal"
              aria-hidden="true"
            />

            <div className="project-step project-reveal">
              <h3>3. Design &amp; wireframes</h3>
              <div className="project-step-grid project-step-grid--aside">
                <div>
                  <h4>Wireframes</h4>
                  <p>
                    I neste fase ble trådskissene videreutviklet til klikkbare
                    wireframes i Figma. Disse fungerte som lavnivå-prototyper
                    med hovedfokus på struktur, funksjonsplassering og
                    brukerflyt. Visuelt ble wireframes holdt enkle og nøytrale
                    for å tydelig signalisere at løsningen var i en tidlig fase,
                    og for å rette oppmerksomheten mot brukervennlighet fremfor
                    estetikk. Wireframesa inkluderte sentrale deler av løsningen
                    som onboarding, hjemskjerm, råd og tips, nødtelefon,
                    hjelp-en-venn og profil, og la grunnlaget for videre testing
                    og iterasjon.
                  </p>
                </div>
                <img
                  className="project-inline-image"
                  src={harmoniWireframes}
                  alt="Wireframes for Harmoni"
                />
              </div>
            </div>

            <div
              className="project-divider project-reveal"
              aria-hidden="true"
            />

            <div className="project-step project-reveal">
              <h3>4. Testing &amp; validering</h3>
              <div className="project-step-grid project-step-grid--wide">
                <div>
                  <h4>Brukertesting</h4>
                  <p>
                    Prototypen ble evaluert gjennom en brukskvalitetstest med
                    fem testdeltakere med varierende alder, bakgrunn og
                    teknologisk erfaring. Testingen ble gjennomført som
                    oppgavebasert brukertesting, kombinert med innledende og
                    avsluttende intervjuer. Dette ga både kvantitative og
                    kvalitative data om hvordan brukerne opplevde navigasjon,
                    forståelse og flyt i løsningen. Testene avdekket flere
                    forbedringsområder, blant annet behov for mer whitespace,
                    tydeligere introduksjon til funksjoner, bedre scroll-støtte
                    og justering av navigasjon. Samtidig ble appens overordnede
                    struktur og konsept oppfattet som intuitiv og trygg.
                  </p>
                </div>
                <div>
                  <ul className="project-list">
                    <li>
                      Implementere anbefalinger fra brukertestene i neste
                      iterasjon
                    </li>
                    <li>
                      Forbedre navigasjon ved å legge til scroll der det er
                      nødvendig
                    </li>
                    <li>
                      Bruke mer whitespace og visuelle elementer for økt
                      engasjement
                    </li>
                    <li>
                      Introdusere kort onboarding/veiledning for raskere
                      forståelse av funksjoner
                    </li>
                    <li>
                      Bytte plassering av “Råd og tips” og “Hjelp en venn” for
                      bedre finnbarhet
                    </li>
                    <li>
                      Flytte “Råd og tips” til øvre navigasjon med tekst for økt
                      tydelighet
                    </li>
                    <li>
                      Gi “Hjelp en venn” en mer sentral plassering med
                      tydeligere ikon
                    </li>
                    <li>
                      Prioritere endringene gjennom en strukturert plan for
                      videre utvikling
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-solution-detail project-reveal">
            <h2>5. Løsning</h2>
            <div className="project-step-grid">
              <div>
                <h4>Kjernefunksjoner</h4>
                <p>
                  Den ferdige løsningen er en helhetlig prototype som støtter
                  brukernes mentale helse i hverdagen gjennom flere
                  komplementære funksjoner:
                </p>
                <ul className="project-list">
                  <li>Oppmerksomhetstrening og daglige øvelser</li>
                  <li>Virtuell chatbot for anonym og lavterskel støtte</li>
                  <li>Råd og tips med artikler, aktiviteter og podcaster</li>
                  <li>Hjelp-en-venn-funksjon for sosial støtte</li>
                  <li>Humørsporing og progresjon over tid</li>
                  <li>Nødtelefon med rask tilgang til akutthjelp</li>
                </ul>
                <br />
                <p>
                  Løsningen er designet for å være trygg, inkluderende og enkel
                  å bruke, med tydelig navigasjon og fokus på universell
                  utforming.
                </p>
              </div>
              <div>
                <h4>Unikt verdiforslag</h4>
                <p>
                  Harmoni skiller seg ut ved å samle egenomsorg, sosial støtte
                  og akutt hjelp i én trygg og tilgjengelig løsning. Appen
                  fungerer som et supplement til profesjonelle tilbud og senker
                  terskelen for å ta vare på egen og andres mentale helse.
                  Autentisering via BankID bidrar til økt trygghet og tillit i
                  håndtering av sensitiv informasjon.
                </p>
              </div>
            </div>
            <div className="project-step-images">
              <img src={harmoniShowcase} alt="Harmoni løsning" />
            </div>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-ui project-reveal">
            <h2>6. UI</h2>
            <div className="project-step-grid">
              <div>
                <h4>Visuell trygghet</h4>
                <p>
                  Det visuelle uttrykket i Harmoni er utviklet for å skape ro,
                  trygghet og oversikt. En dempet og harmonisk fargepalett,
                  kombinert med tydelig typografisk hierarki, bidrar til en
                  behagelig og inkluderende brukeropplevelse. Designet
                  balanserer tekst, ikoner og illustrasjoner på en måte som
                  støtter innholdet uten å virke overveldende, og legger til
                  rette for refleksjon og fokus.
                </p>
                <img
                  className="project-ui-palette"
                  src={harmoniPalette}
                  alt="Fargepalett for Harmoni"
                />
              </div>
              <div>
                <h4>Tilgjengelighet</h4>
                <p>
                  Universell utforming har vært et gjennomgående prinsipp i
                  utformingen av appen. Løsningen følger WCAG-retningslinjer for
                  kontrast, lesbarhet og skalerbar tekst, og er designet for å
                  fungere godt på mobile enheter i ulike situasjoner. Fokus på
                  enkel navigasjon, tydelige handlinger og forutsigbare
                  interaksjoner gjør appen tilgjengelig for brukere med ulike
                  forutsetninger.
                </p>
              </div>
            </div>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-conclusion project-reveal">
            <h2>Refleksjon</h2>
            <div className="project-step-grid">
              <div>
                <h4>Konklusjon</h4>
                <p>
                  Harmoni viser hvordan en brukersentrert og iterativ
                  designprosess kan brukes til å utvikle en digital løsning
                  innen et sensitivt og komplekst domene. Brukertestene
                  bekreftet at konseptet oppleves som relevant, intuitivt og
                  støttende, samtidig som de ga tydelige føringer for videre
                  forbedring.
                </p>
              </div>
              <div>
                <h4>Viktige læringspunkter</h4>
                <ul>
                  <li>
                    Tidlig brukertesting avdekker kritiske UX-utfordringer
                  </li>
                  <li>
                    Små justeringer i layout og navigasjon har stor effekt på
                    opplevd trygghet
                  </li>
                  <li>
                    Introduksjon og onboarding er avgjørende for forståelse av
                    funksjonalitet
                  </li>
                </ul>
              </div>
              <div>
                <h4>Refleksjon</h4>
                <p>
                  Prosjektet har gitt verdifull erfaring med design for psykisk
                  helse, der empati, tilgjengelighet og tydelig struktur er
                  avgjørende. Arbeidet med Harmoni har styrket forståelsen for
                  hvordan brukerinvolvering, universell utforming og
                  kontinuerlig iterasjon bidrar til å skape løsninger som er
                  både meningsfulle og brukervennlige.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
