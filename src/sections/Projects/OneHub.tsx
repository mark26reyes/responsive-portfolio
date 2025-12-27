import { useEffect, useRef } from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import "./ProjectStyle.css";

import oneHubMockups from "../../assets/onehub-mockups.png";
import oneHubStruktur from "../../assets/OneHubStruktur.png";
import oneHubTrailer from "../../assets/OneHubTrailer.png";
import oneHubBrukertesting from "../../assets/OneHubBrukertesting.png";
import oneHubFeatures from "../../assets/OneHubFeatures.png";

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

          <div className="project-hero project-hero--split">
            <div className="project-hero-text">
              <h1>OneHub</h1>
              <p>En plattform for smartere oppdagelse av film og serier.</p>
              <a
                className="project-cta project-cta--hero"
                href="https://www.figma.com/design/p4JxnaeXfreYq8qZu8DCTJ/OneHub?node-id=0-1&t=KMDFSkrS3MELiQUR-1"
                target="_blank"
                rel="noreferrer"
              >
                Se full prototype i Figma
              </a>
            </div>
            <div className="project-hero-media">
              <img src={oneHubMockups} alt="OneHub mockups" />
            </div>
          </div>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-intro project-reveal">
            <h3 className="project-section-title">Kort om prosjektet</h3>
            <p>
              OneHub er et konsept for en digital plattform som samler innhold
              fra flere strømmetjenester og gjør det enklere å oppdage nye
              filmer og serier. Prosjektet tar utgangspunkt i utfordringen mange
              brukere opplever med fragmenterte strømmetjenester,
              beslutningsutmattelse og tidkrevende søkeprosesser. Ved å
              kombinere funksjonalitet fra tradisjonelle strømmetjenester med
              interaksjonsmønstre inspirert av sosiale medier, utforsker OneHub
              nye måter å presentere og oppdage underholdning på.
            </p>

            <div className="project-meta project-meta--intro">
              <p>
                <span>Rolle:</span> UX/UI Designer
              </p>
              <p>
                <span>Varighet:</span> Vår 2024
              </p>
              <p>
                <span>Team:</span> Tverrfaglig gruppe
              </p>
              <p>
                <span>Verktøy:</span> Figma
              </p>
            </div>

            <p className="project-role">
              Jeg hadde hovedansvar for informasjonsarkitektur, wireframes og
              interaktiv prototyping, samt deltakelse i brukertesting og
              iterasjoner.
            </p>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-problem project-reveal">
            <h3 className="project-section-title">Problem &amp; mål</h3>
            <p>
              Utgangspunktet for prosjektet var en økende frustrasjon blant
              brukere som må navigere mellom mange ulike strømmetjenester for å
              finne noe å se. Store innholdsbiblioteker, lite visuell
              forhåndsvisning og manglende personalisering fører ofte til at
              brukere bruker mer tid på å lete enn å faktisk konsumere innhold.
              Målet med OneHub var å utvikle en løsning som kunne:
            </p>
            <ul className="project-list">
              <li>Redusere friksjon i valgprosessen på tvers av tjenester</li>
              <li>Gi raskere oversikt med en visuell og engasjerende feed</li>
              <li>Skape mer personlige anbefalinger basert på preferanser</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-design project-reveal">
            <h3 className="project-section-title">Designprosess</h3>
            <p>
              OneHub ble utviklet gjennom en iterativ og brukersentrert
              designprosess som kombinerer Design Thinking, Lean UX og
              prinsipper fra The Innovator’s DNA. Prosessen var preget av
              kontinuerlig testing, eksperimentering og justering basert på
              innsikt fra faktiske brukere. I stedet for å låse løsningen
              tidlig, ble konseptet gradvis formet gjennom innsikt, prototyping
              og validering.
            </p>

            <div className="project-step project-reveal">
              <h3>1. Innsikt</h3>
              <div className="project-step-grid">
                <div>
                  <h4>Spørreundersøkelser</h4>
                  <p>
                    Innsiktsfasen startet med spørreundersøkelser for å
                    kartlegge vaner og frustrasjoner knyttet til strømming.
                    Funnene viste at mange opplever dagens tjenester som lite
                    inspirerende når det gjelder oppdagelse av nytt innhold.
                  </p>
                </div>
                <div>
                  <h4>Intervjuer</h4>
                  <p>
                    Intervjuer utdypet behovet for raskere oversikt, mer visuell
                    informasjon og bedre tilpassede anbefalinger. Innsikten la
                    grunnlaget for videre konseptutvikling.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="project-divider project-reveal"
              aria-hidden="true"
            />

            <div className="project-step project-reveal">
              <h3>2. Idégenerering &amp; konseptutvikling</h3>
              <div className="project-step-grid">
                <div>
                  <h4>Idéutforskning</h4>
                  <p>
                    Basert på innsikten ble flere konsepter utforsket for
                    hvordan innhold kunne presenteres mer engasjerende. Analyse
                    av både direkte og indirekte konkurrenter viste at de fleste
                    løsninger bruker tunge kataloggrensesnitt.
                  </p>
                  <img
                    className="project-inline-image"
                    src={oneHubStruktur}
                    alt="Struktur og idéutforskning for OneHub"
                  />
                </div>
                <div>
                  <h4>Trailer-feed</h4>
                  <p>
                    Inspirert av sosiale medier ble ideen om en trailer-basert
                    feed utviklet. Etter testing av vertikale og horisontale
                    formater ble en horisontal trailer-feed valgt for å ivareta
                    det filmatiske formatet og samtidig gi rask oversikt.
                  </p>
                  <img
                    className="project-inline-image"
                    src={oneHubTrailer}
                    alt="Trailer-feed konsept for OneHub"
                  />
                </div>
              </div>
            </div>

            <div
              className="project-divider project-reveal"
              aria-hidden="true"
            />

            <div className="project-step project-reveal">
              <h3>3. Design &amp; prototyping</h3>
              <div className="project-step-grid">
                <div>
                  <h4>Konsept til MVP</h4>
                  <p>
                    Konseptet ble konkretisert i Figma med fokus på å redusere
                    kognitiv belastning og gjøre interaksjonene enkle.
                    Prototypen inkluderte trailer-feed, søk på tvers av
                    strømmetjenester, filtrering, personlige profiler og en egen
                    “My List” for lagring av innhold.
                  </p>
                </div>
                <div>
                  <h4>Rask validering</h4>
                  <p>
                    Løsningen ble utviklet som en MVP for å teste de viktigste
                    funksjonene tidlig og sikre at strukturen støttet
                    brukerbehovene.
                  </p>
                </div>
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
                  <h4>Brukertesting</h4>
                  <p>
                    Prototypen ble testet med representanter fra målgruppen
                    gjennom oppgavebasert brukertesting. Testene fokuserte på å
                    opprette profil, finne innhold via feed og søk, lagre filmer
                    og bruke sortering og filtrering.
                  </p>
                  <img
                    className="project-inline-image"
                    src={oneHubBrukertesting}
                    alt="Brukertesting for OneHub"
                  />
                </div>
                <div>
                  <h4>Funn og justeringer</h4>
                  <p>
                    Testene avdekket behov for tydeligere navigasjon og bedre
                    synlighet av enkelte funksjoner. Dette ble tatt videre i
                    iterasjoner og finjusteringer.
                  </p>
                  <ul className="project-list">
                    <li>
                      Sorterings- og filtreringsfunksjonen ble ofte oversett på
                      grunn av utydelig ikon og plassering.
                    </li>
                    <li>
                      Flere brukere trykket på søkefeltet i stedet for
                      filterfunksjonen og fant ikke frem.
                    </li>
                    <li>
                      Kommentarfeltet var vanskelig å oppdage og ble ikke
                      oppfattet som direkte tilgjengelig.
                    </li>
                    <li>
                      Et ekstra klikk via “see all” skapte unødvendig friksjon i
                      kommentarflyten.
                    </li>
                    <li>
                      “My favorites” var lite intuitivt plassert og ble ikke
                      funnet via navigasjonsbaren.
                    </li>
                    <li>
                      Profilikonet ble ikke tydelig nok oppfattet som inngang
                      til favoritter og brukerinnhold.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-solution-detail project-reveal">
            <h3 className="project-section-title">5. Løsning</h3>
            <div className="project-step-grid">
              <div>
                <h4>Kjernefunksjoner</h4>
                <p>
                  Den endelige løsningen er et konsept for en samlet
                  strømmeplattform som kombinerer visuell oppdagelse med
                  personlig tilpasning. OneHub gir brukerne en horisontal
                  trailer-feed basert på preferanser og interaksjoner, kombinert
                  med et effektivt søk på tvers av tjenester.
                </p>
                <p>
                  Funksjoner som lagring, deling og anbefalinger bidrar til en
                  mer sosial og engasjerende opplevelse, samtidig som brukerne
                  beholder kontroll over egne valg.
                </p>
                <img
                  className="project-inline-image"
                  src={oneHubFeatures}
                  alt="Kjernefunksjoner i OneHub"
                />
              </div>
              <div>
                <h4>Unikt verdiforslag</h4>
                <p>
                  OneHub reduserer friksjon i valgprosessen ved å samle innhold
                  fra flere tjenester og presentere det mer inspirerende og
                  personlig. Løsningen gjør oppdagelsen raskere, mer visuell og
                  bedre tilpasset brukerens preferanser.
                </p>
              </div>
            </div>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-ui project-reveal">
            <h3 className="project-section-title">6. UI</h3>
            <div className="project-step-grid">
              <div>
                <h4>Visuelt uttrykk</h4>
                <p>
                  Det visuelle uttrykket i OneHub er rent og moderne, med fokus
                  på innholdet fremfor tunge grensesnittelementer. Kjente
                  interaksjonsmønstre senker terskelen for bruk og gir rom for
                  utforskning.
                </p>
              </div>
              <div>
                <h4>Typografi og struktur</h4>
                <p>
                  Konsekvent bruk av typografi, ikoner og spacing gir et
                  oversiktlig og intuitivt grensesnitt, der brukeren raskt
                  forstår hvordan man kan navigere og samhandle med løsningen.
                </p>
              </div>
            </div>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-conclusion project-reveal">
            <h3 className="project-section-title">
              7. Konklusjon og resultater
            </h3>
            <div className="project-step-grid">
              <div>
                <h4>Konklusjon</h4>
                <p>
                  Prosjektet viser hvordan en brukersentrert og iterativ
                  designprosess kan bidra til å løse komplekse problemer knyttet
                  til innholdsoppdagelse. Brukertestene bekreftet at en visuell
                  og feed-basert tilnærming gjør det enklere for brukerne å ta
                  valg, samtidig som de avdekket konkrete forbedringsområder som
                  kunne videreutvikles.
                </p>
              </div>
              <div>
                <h4>Viktige læringspunkter</h4>
                <p>
                  Arbeidet med OneHub har gitt verdifull erfaring med
                  konseptutvikling, prototyping og validering, og tydeliggjort
                  viktigheten av tidlig testing, eksperimentering og
                  kontinuerlig forbedring i UX-prosesser.
                </p>
              </div>
              <div>
                <h4>Refleksjon</h4>
                <p>
                  Basert på resultatene fra brukertesten, konkluderer vi med at
                  "OneHub" gir en unik og verdifull tjeneste. Brukerne
                  rapporterte en positiv opplevelse med appens intuitive
                  grensesnitt og innovative tilnærming til oppdagelse av
                  innhold. Likevel ble det identifisert flere områder for
                  forbedring, spesielt knyttet til personalisering og
                  søkefunksjoner.
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
