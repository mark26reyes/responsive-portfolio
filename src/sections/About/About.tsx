import { useState, type TouchEvent } from "react";
import "./About.css";
import AboutStory from "../../common/AboutStory";
import TrackStory from "../../common/Track";
import GolfStory from "../../common/Golf";

const slides = [
  { id: "intro", label: "Om meg", Component: AboutStory },
  { id: "track", label: "Friidrett", Component: TrackStory },
  { id: "golf", label: "Golf", Component: GolfStory },
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const totalSlides = slides.length;
  const CurrentSlide = slides[activeIndex].Component;

  const goTo = (nextIndex: number) => {
    setActiveIndex((nextIndex + totalSlides) % totalSlides);
  };

  const handleNext = () => goTo(activeIndex + 1);
  const handlePrev = () => goTo(activeIndex - 1);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(event.targetTouches[0].clientX);
  };

  const onTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <button
          type="button"
          className="about-arrow about-arrow--left"
          onClick={handlePrev}
          aria-label="Forrige historie"
        >
          <span />
        </button>

        <div
          className="about-carousel"
          aria-live="polite"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div key={slides[activeIndex].id} className="about-slide">
            <CurrentSlide />
          </div>
        </div>

        <button
          type="button"
          className="about-arrow about-arrow--right"
          onClick={handleNext}
          aria-label="Neste historie"
        >
          <span />
        </button>
      </div>

      <div className="about-indicators" role="tablist">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={`Vis ${slide.label}`}
            className={`about-indicator ${
              activeIndex === index ? "is-active" : ""
            }`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
