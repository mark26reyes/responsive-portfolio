// App.tsx
import { useEffect, useState } from "react";
import Hero from "./sections/Hero/Hero";
import AboutSection from "./sections/About/About";
import ProjectsSection from "./sections/Projects/Project";
import ExperienceSection from "./sections/Experience/Experience";
import Loader from "./common/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOutLoader, setFadeOutLoader] = useState(false);

  // Tid & animasjon for loaderen
  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOutLoader(true), 2200); // starter fade ut
    const hideTimer = setTimeout(() => setIsLoading(false), 2500); // totalt 2.5s

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Lås scroll mens loaderen vises
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  return (
    <div className="relative">
      {isLoading && <Loader fadeOut={fadeOutLoader} />}
      {/* Hero får vite om siden fortsatt loader for å styre sin egen fade-in */}
      <Hero isLoading={isLoading} />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
    </div>
  );
}

export default App;
