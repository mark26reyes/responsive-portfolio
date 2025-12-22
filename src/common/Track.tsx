import nm from "../assets/nm.jpg";
import strength from "../assets/strength.jpg";
import gloria from "../assets/gloria.jpg";

const TrackStory = () => {
  return (
    <article className="about-panel about-panel--track">
      <div className="about-copy about-copy--left">
        <p className="about-body">
          Ved siden av design og utvikling satser jeg aktivt på friidrett og
          konkurrerer som sprinter. Idretten har gitt meg en sterk forståelse
          for struktur, målrettet arbeid og betydningen av kontinuerlig
          forbedring.
          <br /> <br />
          Sprint handler om å analysere detaljer, teste justeringer og jobbe
          systematisk mot små, målbare forbedringer over tid. Denne måten å
          jobbe på tar jeg med meg direkte inn i UX- og interaksjonsdesign – der
          innsikt, testing og iterasjon er avgjørende for å skape gode
          løsninger.
          <br /> <br />
          Erfaringen fra toppidrett har også gjort meg komfortabel med tydelige
          mål, tilbakemeldinger og høye krav, og jeg trives godt i miljøer der
          man jobber fokusert sammen mot felles resultater.
        </p>

        <div className="about-meta">
          <span>Personlig rekord:</span>
          <span>(60M, 6.80)</span>
          <span>(100M, 10.61)</span>
          <span>(200M, 22.04)</span>
        </div>
      </div>

      <div className="about-media about-media--track about-media--track-right">
        <p className="about-kicker about-kicker--track">10.61</p>
        <div className="about-photo about-photo-border about-photo--primary">
          <img src={nm} alt="Mark Daniel Reyes under NM" />
        </div>
        <div className="about-photo about-photo--secondary">
          <img src={strength} alt="Spikes på tartandekke" />
        </div>
        <div className="about-photo about-photo--tertiary">
          <img src={gloria} alt="Teamkamerater på tribunen" />
        </div>
      </div>
    </article>
  );
};

export default TrackStory;
