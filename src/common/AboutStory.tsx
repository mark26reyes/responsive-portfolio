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
          Mitt navn er Mark Daniel Reyes, og jeg er en 24 år gammel
          UX/UI-designer med en forventet bachelorgrad i Interaktivt Design fra
          Høyskolen Kristiania til sommer. Jeg har en lidenskap for å skape
          intuitive og estetisk tiltalende digitale opplevelser som kombinerer
          funksjonalitet og design.
          <br /> <br />
          Gjennom studiene mine har jeg fått en solid forståelse for
          brukeropplevelse, interaksjonsdesign og visuell kommunikasjon. Jeg har
          erfaring med verktøy som Figma, Adobe XD og andre designprogrammer, og
          jeg jobber alltid med et brukerfokusert tankesett for å skape
          løsninger som er både innovative og effektive.
          <br />
          <br />I tillegg til UX/UI-design har jeg en sterk interesse for
          webutvikling og ønsker å utvikle meg videre innen dette feltet. Jeg
          har erfaring med HTML, CSS, JavaScript og TypeScript, og bygger opp
          ferdighetene mine innenfor moderne rammeverk som React.
        </p>
      </div>
    </article>
  );
};

export default AboutStory;
