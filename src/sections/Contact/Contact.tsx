import "./Contact.css";

import golfPhoto from "../../assets/minigolf.jpg";
import markSide from "../../assets/beer.jpg";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <header className="contact-header">
          <p className="contact-kicker">Ta kontakt!</p>
          <p className="contact-subheading">
            Jeg tar gjerne en prat om nye samarbeid, idéer eller bare en kopp
            kaffe. Bruk skjemaet eller ta kontakt direkte på e-post.
          </p>
        </header>

        <div className="contact-grid">
          <form className="contact-form">
            <label>
              Navn
              <input type="text" name="name" placeholder="Ditt navn" />
            </label>

            <label>
              E-post
              <input type="email" name="email" placeholder="navn@email.com" />
            </label>

            <label>
              Melding
              <textarea
                name="message"
                rows={5}
                placeholder="Hva ønsker du å snakke om?"
              />
            </label>

            <button type="submit">Send</button>
          </form>

          <div className="contact-gallery" aria-hidden="true">
            <div className="contact-photo contact-photo--primary">
              <img src={markSide} alt="Mark Daniel Reyes" />
            </div>
            <div className="contact-photo contact-photo--secondary">
              <img src={golfPhoto} alt="Mark spiller golf" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
