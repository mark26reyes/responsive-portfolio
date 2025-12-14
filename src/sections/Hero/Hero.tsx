import "./Hero.css";
import Navbar from "../../common/Navbar";

type HeroProps = {
  isLoading?: boolean;
};

function Hero(_: HeroProps) {
  return (
    <section id="hero" className="hero-section">
      <Navbar />
      <div className="hero-content">
        <h1 className="hero-title">Interaksjons Designer.</h1>
        <p className="hero-subtitle">Mark Daniel Reyes, 24år (Nyutdannet)</p>
        <p className="hero-scrolltitle">SCROLL FOR Å VITE MER OM MEG</p>
      </div>
    </section>
  );
}

export default Hero;
