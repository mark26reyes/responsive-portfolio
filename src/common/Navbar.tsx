import { useEffect, useState, type MouseEvent } from "react";
import mdrLogo from "../assets/MDR.png";
import homeIcon from "../assets/home-icon.png";

const navLinks = [
  { href: "#about", label: "Om meg" },
  { href: "#work", label: "Arbeid" },
  { href: "#experience", label: "Erfaring" },
];

type NavbarProps = {
  basePath?: string;
};

const Navbar: React.FC<NavbarProps> = ({ basePath = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const isProjectNav = basePath.length > 0;

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!isProjectNav) return;
    event.preventDefault();
    window.location.hash = hash;
    closeMenu();
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 w-full px-6 py-4 transition-colors duration-300 ${
        isScrolled
          ? "bg-gradient-to-b from-black/90 via-black/60 to-black/0"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between text-white font-light">
        {/* Logo */}
        <a
          href={`${basePath}#hero`}
          className="flex items-center gap-2"
          onClick={(event) => {
            handleNavClick(event, "#hero");
            if (!isProjectNav) closeMenu();
          }}
          aria-label="Til toppen"
        >
          <img src={mdrLogo} alt="MDR" className="w-30" />
        </a>

        {/* Desktop / tablet nav */}
        <div className="hidden md:flex items-center gap-10 rounded-full bg-black/60 px-6 py-3">
          <a
            href={`${basePath}#hero`}
            className="flex h-10 w-10 items-center justify-center transition-colors hover:opacity-70"
            onClick={(event) => {
              handleNavClick(event, "#hero");
              if (!isProjectNav) closeMenu();
            }}
            aria-label="Hjem"
          >
            <span className="text-xl leading-none">
              <img src={homeIcon} alt="" />
            </span>
          </a>

          <div className="flex items-center gap-8 text-base tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`${basePath}${link.href}`}
                className="transition hover:opacity-70"
                onClick={(event) => {
                  handleNavClick(event, link.href);
                  if (!isProjectNav) closeMenu();
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <a
            href={`${basePath}#contact`}
            className="inline-flex items-center rounded-full border border-white/80 px-5 py-2 text-sm tracking-wide transition bg-black/50 hover:bg-black/70 text-white font-light"
            onClick={(event) => {
              handleNavClick(event, "#contact");
              if (!isProjectNav) closeMenu();
            }}
          >
            Ta kontakt
          </a>
        </div>

        <button
          type="button"
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center bg-transparent p-0 border-0 appearance-none focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
          style={{ backgroundColor: "transparent", border: "none", padding: 0 }}
        >
          <span
            className={`block h-[2px] w-5 bg-white transition-transform ${
              isOpen ? "translate-y-[3px] rotate-45" : "mb-[4px]"
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-white transition ${
              isOpen ? "opacity-0" : "mb-[4px]"
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-white transition-transform ${
              isOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-black/50 px-6 text-center text-white font-light backdrop-blur-sm md:hidden">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Lukk meny"
            className="absolute right-6 top-16 bg-transparent text-sm uppercase tracking-widest text-white/80"
            style={{
              backgroundColor: "transparent",
              border: "none",
              padding: 0,
            }}
          >
            Lukk
          </button>

          <a
            href={`${basePath}#hero`}
            onClick={(event) => {
              handleNavClick(event, "#hero");
              if (!isProjectNav) closeMenu();
            }}
            className="text-2xl tracking-wide hover:opacity-70"
          >
            Hjem
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`${basePath}${link.href}`}
              onClick={(event) => {
                handleNavClick(event, link.href);
                if (!isProjectNav) closeMenu();
              }}
              className="text-2xl tracking-wide hover:opacity-70"
            >
              {link.label}
            </a>
          ))}

          <a
            href={`${basePath}#contact`}
            onClick={(event) => {
              handleNavClick(event, "#contact");
              if (!isProjectNav) closeMenu();
            }}
            className="mt-4 inline-flex items-center rounded-full border border-white/70 px-6 py-2 text-lg tracking-wide hover:bg-white/10"
          >
            Ta kontakt
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
