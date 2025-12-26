import markSide from "../assets/Mark_side.jpg";
import markSunset from "../assets/sunset.jpg";
import markPortrait from "../assets/mark.jpeg";

const AboutStory = () => {
  return (
    <article className="about-panel about-panel--intro">
      <div className="about-media about-media--intro">
        <p className="about-kicker about-kicker--intro">Heisann!</p>
        <div className="about-photo about-photo-border about-photo--primary">
          <img src={markSide} alt="Mark Daniel Reyes sitter ved bordet" />
        </div>
        <div className="about-photo about-photo--secondary">
          <img src={markSunset} alt="Solnedgang over Middelhavet" />
        </div>
        <div className="about-photo about-photo--tertiary">
          <img src={markPortrait} alt="Close-up av Mark Daniel Reyes" />
        </div>
      </div>

      <div className="about-copy">
        <p className="about-body">
          Jeg heter Mark Daniel Reyes og er UX- og interaksjonsdesigner med
          bachelor i Interaktivt design fra Høyskolen Kristiania. Jeg designer
          brukersentrerte digitale løsninger der struktur, interaksjon og
          visuelt uttrykk jobber sammen for å løse reelle brukerbehov.
          <br /> <br />
          Gjennom studier og prosjektarbeid har jeg jobbet metodisk med
          UX-prosesser som brukerinnsikt, konseptutvikling,
          informasjonsarkitektur, prototyping og brukertesting. Jeg har benyttet
          både Design Thinking og Lean UX, og er opptatt av å ta
          designbeslutninger basert på innsikt fremfor antakelser.
          <br />
          <br />
          Jeg designer hovedsakelig i Figma og har også erfaring med
          front-end-utvikling i HTML, CSS, JavaScript og TypeScript, samt
          bygging av grensesnitt i React. Dette gir meg en praktisk forståelse
          for hvordan design fungerer i ferdige produkter og gjør samarbeidet
          med utviklere mer effektivt.
          <br /> <br />
          Som junior designer er jeg nysgjerrig, lærevillig og motivert for å
          utvikle meg videre. Jeg trives i team der jeg kan bidra aktivt, ta
          ansvar og vokse gjennom samarbeid og tilbakemeldinger.
        </p>
      </div>
    </article>
  );
};

export default AboutStory;
