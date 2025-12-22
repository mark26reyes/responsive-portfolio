import gloria from "../assets/gloriagolfsign.jpg";
import golfcart from "../assets/golfcart.JPG";
import grini from "../assets/grini.jpg";

const GolfStory = () => {
  return (
    <article className="about-panel about-panel--golf">
      <div className="about-media about-media--golf">
        <p className="about-kicker about-kicker--golf">hcp 10.8</p>
        <div className="about-photo about-photo-border about-photo--primary">
          <img src={grini} alt="Mark Daniel Reyes på driving rangen" />
        </div>
        <div className="about-photo about-photo--tertiary">
          <img src={gloria} alt="Skilt fra Gloria Golf Resort" />
        </div>
        <div className="about-photo about-photo--secondary">
          <img src={golfcart} alt="Golfbil klar for runden" />
        </div>
      </div>

      <div className="about-copy">
        <p className="about-body">
          Når tiden tillater det spiller jeg golf, en hobby jeg har hatt de
          siste årene. Golf gir meg et verdifullt avbrekk fra trening og arbeid,
          samtidig som det utfordrer ferdigheter som presisjon, konsentrasjon og
          tålmodighet.
          <br /> <br />I golf jobber man målrettet med små justeringer over tid
          for å oppnå stabile resultater. Denne tilnærmingen, med fokus på
          detaljer, analyse og kontinuerlig forbedring, speiler også hvordan jeg
          jobber med design. Jeg er opptatt av kvalitet i det jeg leverer, og
          trives med prosesser der grundighet og forbedring står sentralt.
        </p>
        <div className="about-meta">
          <span>hcp 10.8</span>
        </div>
      </div>
    </article>
  );
};

export default GolfStory;
