import grini from "../assets/grini.jpg";
import gloria from "../assets/gloriagolfsign.jpg";
import golfcart from "../assets/golfcart.jpg";

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
          Når tiden tillater det spiller jeg også golf, en hobby jeg har dyrket
          de siste to årene. Golf gir meg et nødvendig avbrekk fra trening og
          arbeid, men har også styrket egenskaper som presisjon, konsentrasjon
          og tålmodighet. Jeg er en perfeksjonist på banen og jobber nøye med
          teknikk og forbedring — noe som har bidratt til at jeg har senket
          handicapet mitt betydelig på kort tid. Denne tilnærmingen til
          kontinuerlig forbedring speiler også hvordan jeg jobber med design:
          detaljorientert, analytisk og med et sterkt ønske om å levere
          kvalitet.
        </p>
        <div className="about-meta">
          <span>hcp 10.8</span>
        </div>
      </div>
    </article>
  );
};

export default GolfStory;
