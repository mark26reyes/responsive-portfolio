import { type FormEvent } from "react";
import "./Contact.css";

import golfPhoto from "../../assets/minigolf.jpg";
import markSide from "../../assets/beer.jpg";

export default function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Kontakt fra ${name || "Nettside"}`);
    const body = encodeURIComponent(
      `Navn: ${name}\nE-post: ${email}\n\nMelding:\n${message}`
    );

    window.location.href = `mailto:mark26reyes@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <header className="contact-header">
          <p className="contact-kicker">Ta kontakt</p>
          <p className="contact-subheading">
            Jeg tar gjerne en prat om nye muligheter, samarbeid eller spennende
            idéer. Du kan bruke kontaktskjemaet nedenfor, eller ta kontakt
            direkte via e-post.
          </p>
        </header>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Navn
              <input type="text" name="name" placeholder="Ditt navn" required />
            </label>

            <label>
              E-post
              <input
                type="email"
                name="email"
                placeholder="navn@email.com"
                required
              />
            </label>

            <label>
              Melding
              <textarea
                name="message"
                rows={5}
                placeholder="Hva ønsker du å snakke om?"
                required
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
