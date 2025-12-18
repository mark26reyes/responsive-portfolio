import nm from "../assets/nm.jpg";
import strength from "../assets/strength.jpg";
import gloria from "../assets/gloria.jpg";

const TrackStory = () => {
  return (
    <article className="about-panel about-panel--track">
      <div className="about-copy about-copy--left">
        <p className="about-body">
          Ved siden av design og utvikling driver jeg aktivt med friidrett, der
          jeg konkurrerer som sprinter. Idretten har gitt meg en sterk
          forståelse for disiplin, målbevissthet og struktur, samt evnen til å
          arbeide fokusert mot langsiktige mål. Som sprinter lærer man å
          optimalisere detaljer, analysere prestasjon og jobbe strategisk for
          kontinuerlig forbedring — verdier jeg tar med meg direkte inn i mine
          prosjekter som interaksjonsdesigner.
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
