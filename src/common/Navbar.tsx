import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "Om meg" },
  { href: "#work", label: "Arbeid" },
  { href: "#experience", label: "Erfaring" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 w-full px-6 py-4">
      <div className="mx-auto flex max-w-8xl items-center justify-between text-white font-light">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2"
          onClick={closeMenu}
          aria-label="Til toppen"
        >
          <img src="/src/assets/MDR.png" alt="MDR" className="w-30" />
        </a>

        {/* Desktop / tablet nav */}
        <div className="hidden md:flex items-center gap-10 rounded-full bg-black/60 px-6 py-3">
          <a
            href="#hero"
            className="flex h-10 w-10 items-center justify-center transition-colors hover:opacity-70"
            onClick={closeMenu}
            aria-label="Hjem"
          >
            <span className="text-xl leading-none">
              <img src="/src/assets/home-icon.png" alt="" />
            </span>
          </a>

          <div className="flex items-center gap-8 text-base tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/80 px-5 py-2 text-sm tracking-wide transition bg-black/50 hover:bg-black/70 text-white font-light"
          >
            Ta kontakt
          </a>
        </div>

        <button
          type="button"
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center"
          onClick={toggleMenu}
          aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
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
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-black/15 px-6 text-center text-white font-light backdrop-blur-sm md:hidden">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Lukk meny"
            className="absolute right-6 top-6 bg-transparent text-sm uppercase tracking-widest text-white/80"
          >
            Lukk
          </button>

          <a
            href="#hero"
            onClick={closeMenu}
            className="text-2xl tracking-wide hover:opacity-70"
          >
            Hjem
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl tracking-wide hover:opacity-70"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
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
