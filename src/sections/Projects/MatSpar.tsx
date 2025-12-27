import { useEffect, useRef } from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import "./ProjectStyle.css";

import matsparMockups from "../../assets/matspar-mockups.png";
import matsparAntagelser from "../../assets/MatSparAntagelser.png";
import matsparPainPoints from "../../assets/MatSparPainPoints.png";
import matsparFunksjoner from "../../assets/MatSparFunksjoner.png";
import matsparWireframes from "../../assets/MatSparWireframes.png";
import matsparScreens1 from "../../assets/MatSparScreens1.png";
import matsparScreens2 from "../../assets/MatSparScreens2.png";
import matsparSpacing from "../../assets/MatSparSpacing.png";
import matsparDulting from "../../assets/MatSparDulting.png";

export default function MatSpar() {
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
      <main id="matspar" className="project-main">
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
              <h1>MatSpar</h1>
              <p>En app for smart matplanlegging, budsjett og bærekraft.</p>
              <a
                className="project-cta project-cta--hero"
                href="https://www.figma.com/design/ObFSRwwNMJGFbuidoVTQcM/MatSpar?node-id=420-3691&t=WZsGUxTV9Ig3qCta-1"
                target="_blank"
                rel="noreferrer"
              >
                Se full prototype i Figma
              </a>
            </div>
            <div className="project-hero-media">
              <img src={matsparMockups} alt="MatSpar mockups" />
            </div>
          </div>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-intro project-reveal">
            <h3 className="project-section-title">Kort om prosjektet</h3>
            <p>
              MatSpar ble utviklet som et gruppeprosjekt, med mål om å lage en
              app for studenter og familier som ønsker bedre kontroll over
              matbudsjettet og å redusere matsvinn. Vi jobbet spesielt med
              innsiktsarbeid, struktur og prototyping i Figma.
            </p>

            <div className="project-meta project-meta--intro">
              <p>
                <span>Rolle:</span> UX/UI Designer
              </p>
              <p>
                <span>Varighet:</span> 8 uker
              </p>
              <p>
                <span>Team:</span> Gruppeprosjekt
              </p>
              <p>
                <span>Verktøy:</span> Figma, Lean UX
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
              Hvordan kan studenter og familier få bedre oversikt over
              måltidsplanlegging og matinnkjøp, slik at de kan redusere matsvinn
              og samtidig holde seg innenfor et stramt matbudsjett – uten at det
              oppleves tidkrevende eller komplisert i hverdagen?
            </p>
            <ul className="project-list">
              <li>Gi brukerne bedre økonomisk kontroll over matforbruket</li>
              <li>Redusere matsvinn gjennom bedre organisering</li>
              <li>Forenkle måltidsplanlegging for ulike livssituasjoner</li>
            </ul>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-design project-reveal">
            <h3 className="project-section-title">Designprosess</h3>
            <p>
              Designprosessen for MatSpar startet med en grundig forståelse av
              brukernes behov og utfordringer knyttet til måltidsplanlegging. Vi
              kombinerte Lean UX-prinsipper, design thinking og smidig utvikling
              i fire faser: innsikt, idéutvikling, prototyping og testing.
            </p>

            <div className="project-step project-reveal">
              <h3>1. Innsikt</h3>
              <div className="project-step-grid">
                <div>
                  <h4>Målgruppe og antakelser</h4>
                  <p>
                    Vi startet med å segmentere målgruppen for MatSpar og skrive
                    ned våre antakelser om dette kundesegmentet.
                  </p>
                  <p>
                    Målgruppen inkluderer personer som ønsker å redusere
                    matsvinn og spare penger på dagligvarehandel.
                  </p>
                </div>
                <div>
                  <h4>Brukerintervjuer</h4>
                  <p>
                    Vi gjennomførte semistrukturerte intervjuer med
                    representanter fra målgruppen for å forstå deres reelle
                    behov og utfordringer knyttet til måltidsplanlegging.
                  </p>
                  <p>
                    Et gjennomgående tema var vanskeligheten med å holde
                    oversikt over matvarer man allerede har tilgjengelig, noe
                    som fører til unødvendige innkjøp.
                  </p>
                </div>
              </div>
              <div className="project-step-images">
                <img src={matsparAntagelser} alt="Antakelser for MatSpar" />
                <img src={matsparPainPoints} alt="Pain points for MatSpar" />
              </div>
            </div>

            <div
              className="project-divider project-reveal"
              aria-hidden="true"
            />

            <div className="project-step project-reveal">
              <h3>2. Idégenerering og konseptutvikling</h3>
              <div className="project-step-grid">
                <div>
                  <h4>Brainstorming</h4>
                  <p>
                    Basert på innsikten vi samlet inn, gjennomførte vi en idé-
                    og konseptutviklingsfase for å definere kjernefunksjonene i
                    MatSpar. Målet var å utvikle en løsning som møter brukernes
                    viktigste utfordringer, som budsjetkontroll, reduksjon av
                    matsvinn og en enklere hverdag rundt måltidsplanlegging. Vi
                    utforsket blant annet funksjoner som automatiske
                    handlelister, personlige oppskriftsforslag basert på
                    ingredienser brukeren allerede har, samt prissammenligning
                    mellom butikker for å gjøre dagligvarehandelen smartere og
                    mer kostnadseffektiv.
                  </p>
                </div>
                <div>
                  <h4>Wireframes</h4>
                  <p>
                    For å visualisere konseptene utviklet vi low-fidelity
                    wireframes og brukerflytdiagrammer i Figma. Dette gjorde det
                    mulig å teste informasjonsarkitektur og navigasjonsflyt
                    tidlig, før vi brukte tid på detaljert design. Vi la vekt på
                    et intuitivt hovedmeny-oppsett, der brukeren enkelt kan
                    bevege seg mellom måltidsplanlegging, handlelister og
                    budsjettoversikt. Wireframene hjalp oss med å avdekke
                    forbedringsområder på et tidlig stadium, som plasseringen av
                    sentrale funksjoner og hvordan brukeren naturlig beveger seg
                    gjennom appen. Gjennom flere iterasjoner fikk vi et solid
                    grunnlag for videre utvikling.
                  </p>
                </div>
              </div>
              <div className="project-step-images">
                <img src={matsparFunksjoner} alt="Idéskisser for MatSpar" />
                <img src={matsparWireframes} alt="Wireframes for MatSpar" />
              </div>
            </div>

            <div
              className="project-divider project-reveal"
              aria-hidden="true"
            />

            <div className="project-step project-reveal">
              <h3>3. Design og prototyping</h3>
              <div className="project-step-grid">
                <div>
                  <h4>Design</h4>
                  <p>
                    Etter flere iterasjoner videreførte vi et minimalistisk
                    uttrykk for å redusere kognitiv belastning. Spesielt
                    fokuserte vi på tydelige informasjons­hierarkier, slik at
                    brukeren raskt og enkelt kunne finne måltidsplaner,
                    handlelister og budsjettoversikter uten unødvendige steg.
                  </p>
                  <p>
                    I tillegg integrerte vi visuelle indikatorer for
                    prisbesparelser og reduksjon av matsvinn, noe som gjorde
                    appen mer engasjerende og motiverende å bruke.
                  </p>
                </div>
                <div>
                  <h4>Interaktivt design</h4>
                  <p>
                    For å skape en sømløs og intuitiv brukeropplevelse jobbet vi
                    med interaksjonsdesign som samsvarte med brukernes
                    forventninger og vaner. Vi definerte tydelige
                    berøringspunkter som gjorde det enkelt å legge til, fjerne
                    og justere ingredienser i handlelisten, samt tilpasse
                    oppskrifter etter antall porsjoner.
                  </p>
                  <p>
                    For å forbedre flyten mellom de ulike funksjonene i appen
                    implementerte vi mikrointeraksjoner, som subtile animasjoner
                    og fargeendringer, for å gi umiddelbar tilbakemelding på
                    brukerens handlinger.
                  </p>
                </div>
              </div>
              <div className="project-step-images">
                <img src={matsparScreens1} alt="MatSpar designskjermer" />
                <img
                  src={matsparScreens2}
                  alt="Interaktive skjermbilder fra MatSpar"
                />
              </div>
            </div>

            <div
              className="project-divider project-reveal"
              aria-hidden="true"
            />

            <div className="project-step project-reveal">
              <h3>4. Testing og validering</h3>
              <div className="project-step-grid">
                <div>
                  <h4>Brukertesting</h4>
                  <p>
                    Etter at den interaktive prototypen ble utviklet i Figma,
                    gjennomførte vi en brukertest med fem deltakere for å
                    avdekke forbedringsområder. Deltakerne besto av fire
                    studenter og en alenemor, og fikk konkrete oppgaver som å
                    planlegge en ukemeny, generere en handleliste og sammenligne
                    matpriser mellom ulike butikker. Under testingen observerte
                    vi hvordan brukerne navigerte i appen, hvor de støtte på
                    utfordringer, og hvilke funksjoner de opplevde som mest
                    verdifulle. Et sentralt funn var at mange forventet en mer
                    intuitiv måte å redigere handlelisten på, samt at
                    informasjon om prisbesparelser burde presenteres tydeligere.
                    Flere ønsket også en enklere løsning for å justere
                    oppskrifter basert på antall porsjoner.
                  </p>
                </div>
                <div>
                  <h4>Testmetode</h4>
                  <p>
                    Basert på innsikten fra brukertestingen gjorde vi flere
                    viktige designjusteringer. Navigasjonen ble forenklet, blant
                    annet ved å plassere handlelisten direkte i hovedmenyen for
                    raskere tilgang. Vi forbedret også personalisering av
                    oppskrifter ved å innføre dynamisk porsjonsjustering, slik
                    at brukerne enkelt kunne tilpasse oppskrifter til
                    husholdningens størrelse. Visuelle elementer ble justert for
                    å tydeliggjøre prisbesparelser, blant annet gjennom
                    fargekoding og klare indikatorer på hvor mye brukeren kan
                    spare. Disse forbedringene bidro til at MatSpar ble mer
                    intuitiv, brukervennlig og bedre tilpasset behovene i
                    målgruppen.
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
                <h4>Kjernefunksjoner i MatSpar</h4>
                <p>
                  MatSpar er utviklet for å hjelpe brukere med effektiv
                  måltidsplanlegging, budsjettkontroll og reduksjon av matsvinn.
                  Appen kombinerer smarte oppskriftsforslag, automatiske
                  handlelister og prissammenligning for å gjøre
                  dagligvarehandelen enklere og mer økonomisk. Ved å analysere
                  brukerens tidligere innkjøp og tilgjengelige ingredienser
                  tilpasses måltidsforslagene slik at maten utnyttes best mulig.
                </p>
                <ul className="project-list">
                  <li>
                    Automatisk måltidsplanlegging: Brukere kan velge retter
                    basert på ingredienser de allerede har hjemme.
                  </li>
                  <li>
                    Personlig handleliste: Ingredienser fra måltidsplanen legges
                    automatisk til i handlelisten, med enkle muligheter for
                    redigering og fjerning.
                  </li>
                  <li>
                    Budsjettoversikt og prissammenligning: Appen gir oversikt
                    over forventede kostnader og viser hvilke butikker som
                    tilbyr de beste prisene på nødvendige varer.
                  </li>
                  <li>
                    Reduksjon av matsvinn: MatSpar foreslår oppskrifter som tar
                    i bruk ingredienser fra tidligere innkjøp for å minimere
                    matsvinn.
                  </li>
                  <li>
                    Tilpasning og allergifilter: Appen lar brukerne velge
                    matpreferanser og registrere allergier, slik at
                    måltidsplanene tilpasses individuelle behov.
                  </li>
                </ul>
              </div>
              <div>
                <h4>Unikt verdiforslag</h4>
                <p>
                  MatSpar skiller seg ut ved å samle måltidsplanlegging,
                  budsjettstyring og reduksjon av matsvinn i én helhetlig
                  løsning. I motsetning til eksisterende apper som ofte
                  fokuserer på enten oppskrifter eller handlelister, tilbyr
                  MatSpar en automatisert og sammenhengende brukeropplevelse som
                  hjelper brukerne med å spare penger, redusere matsvinn og
                  forenkle dagligvarehandelen.
                </p>
                <p>
                  Gjennom integrasjon av prissammenligning, personlige
                  oppskriftsforslag og dynamiske handlelister gir MatSpar
                  brukerne full oversikt og kontroll over både matbudsjett og
                  tilgjengelige ressurser – på en intuitiv og brukervennlig
                  måte.
                </p>
              </div>
            </div>
          </section>

          <div className="project-divider" aria-hidden="true" />

          <section className="project-section project-solution-detail project-reveal">
            <h3 className="project-section-title">6. UI</h3>
            <div className="project-step-grid">
              <div>
                <h4>Design og UI</h4>
                <p>
                  MatSpar har et enkelt og intuitivt grensesnitt som gir
                  brukerne rask oversikt over matutgifter og besparelser.
                  Hjemskjermen viser tydelig både forbruk og sparing, noe som
                  bidrar til økt bevissthet og gir brukeren bedre kontroll.
                </p>
                <h4>Grid og visuell konsistens</h4>
                <p>
                  MatSpar benytter et 8-punkts grid-system for å sikre et
                  harmonisk layout og visuell konsistens. Dette skaper en ryddig
                  struktur der avstander og størrelser er balanserte, noe som
                  gjør navigasjonen forutsigbar og brukervennlig. Bruken av
                  whitespace reduserer visuell støy, forbedrer lesbarheten og
                  hjelper brukeren med å fokusere på det viktigste innholdet.
                </p>
              </div>
              <div>
                <h4>Brukersentrert navigasjon og informasjonsarkitektur</h4>
                <p>
                  Appen er bygget med en hierarkisk informasjonsstruktur, der
                  sentrale funksjoner er lett tilgjengelige fra hovedmenyen.
                  Denne tilnærmingen støtter brukernes vaner og sikrer at
                  nødvendig informasjon alltid er innen rekkevidde.
                </p>
                <h4>Tilbakemelding og interaksjonsdesign</h4>
                <p>
                  MatSpar benytter subtile animasjoner på «Legg til»-siden ved å
                  foreslå retter som tar i bruk rester fra måltidsplanen, noe
                  som oppmuntrer til mindre matsvinn og et mer variert kosthold.
                  For å gjøre appen intuitiv og responsiv gir vi umiddelbar
                  tilbakemelding når brukeren legger til en rett, slik at det er
                  tydelig at den forrige måltidsplanen erstattes. Dette skaper
                  en mer forutsigbar og brukervennlig opplevelse.
                </p>
              </div>
            </div>
            <div className="project-step-images">
              <img src={matsparSpacing} alt="Grid og spacing i MatSpar" />
              <img src={matsparDulting} alt="UI-detaljer fra MatSpar" />
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
                  Etter at den interaktive prototypen ble utviklet i Figma,
                  gjennomførte vi en brukertest med fem deltakere for å avdekke
                  forbedringsområder. Deltakerne besto av fire studenter og en
                  alenemor, og fikk konkrete oppgaver som å planlegge en
                  ukemeny, generere en handleliste og sammenligne matpriser
                  mellom ulike butikker. Under testingen observerte vi hvordan
                  brukerne navigerte i appen, hvor de støtte på utfordringer, og
                  hvilke funksjoner de opplevde som mest verdifulle. Et sentralt
                  funn var at mange forventet en mer intuitiv måte å redigere
                  handlelisten på, samt at informasjon om prisbesparelser burde
                  presenteres tydeligere. Flere ønsket også en enklere løsning
                  for å justere oppskrifter basert på antall porsjoner.
                </p>
              </div>
              <div>
                <h4>Viktige læringspunkter</h4>
                <p>
                  Basert på innsikten fra brukertestingen gjorde vi flere
                  viktige designjusteringer. Navigasjonen ble forenklet, blant
                  annet ved å plassere handlelisten direkte i hovedmenyen for
                  raskere tilgang. Vi forbedret også personalisering av
                  oppskrifter ved å innføre dynamisk porsjonsjustering, slik at
                  brukerne enkelt kunne tilpasse oppskrifter til husholdningens
                  størrelse. Visuelle elementer ble justert for å tydeliggjøre
                  prisbesparelser, blant annet gjennom fargekoding og klare
                  indikatorer på hvor mye brukeren kan spare. Disse
                  forbedringene bidro til at MatSpar ble mer intuitiv,
                  brukervennlig og bedre tilpasset behovene i målgruppen.
                </p>
              </div>
            </div>
            <div className="project-conclusion-result">
              <h4>Resultat</h4>
              <p>
                Brukertesting viste at kombinasjonen av måltidsplanlegging,
                handleliste og budsjett i én samlet flyt gjorde løsningen
                enklere å forstå og bruke. Brukerne opplevde særlig oversikten
                over ukens måltider som nyttig, og ga tilbakemelding på at
                navigasjonen føltes intuitiv. Basert på testing gjorde vi
                justeringer i informasjonsarkitekturen og forenklet enkelte steg
                i planleggingsflyten.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
