// App.tsx
import { useEffect, useState } from "react";
import Hero from "./sections/Hero/Hero";
import AboutSection from "./sections/About/About";
import ProjectsSection from "./sections/Projects/Project";
import ExperienceSection from "./sections/Experience/Experience";
import ContactSection from "./sections/Contact/Contact";
import Footer from "./common/Footer";
import Loader from "./common/Loader";
import MatSpar from "./sections/Projects/MatSpar";
import OneHub from "./sections/Projects/OneHub";
import Harmoni from "./sections/Projects/Harmoni";
import Fristil from "./sections/Projects/Fristil";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOutLoader, setFadeOutLoader] = useState(false);
  const [activeHash, setActiveHash] = useState(() => window.location.hash);

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

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const projectHashes = ["#matspar", "#onehub", "#harmoni", "#fristil"];
    if (!activeHash || projectHashes.includes(activeHash)) return;
    const targetId = activeHash.replace("#", "");
    const shouldSkip = sessionStorage.getItem("skipSmoothScroll") === "1";
    if (shouldSkip) {
      sessionStorage.removeItem("skipSmoothScroll");
      const previousBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      requestAnimationFrame(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "auto" });
        }
        document.documentElement.style.scrollBehavior = previousBehavior;
      });
      return;
    }

    requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }, [activeHash]);

  if (activeHash === "#matspar") {
    return <MatSpar />;
  }
  if (activeHash === "#onehub") {
    return <OneHub />;
  }
  if (activeHash === "#harmoni") {
    return <Harmoni />;
  }
  if (activeHash === "#fristil") {
    return <Fristil />;
  }

  return (
    <div className="relative">
      {isLoading && <Loader fadeOut={fadeOutLoader} />}
      {/* Hero får vite om siden fortsatt loader for å styre sin egen fade-in */}
      <Hero isLoading={isLoading} />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
