import "./Footer.css";

import mdrLogo from "../assets/MDR.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import gmailIcon from "../assets/gmail.png";

const socialLinks = [
  {
    href: "https://www.instagram.com/mac.r11/",
    label: "Instagram",
    icon: instagramIcon,
  },
  {
    href: "https://www.linkedin.com/in/mark-daniel-reyes-865609278/",
    label: "LinkedIn",
    icon: linkedinIcon,
  },
  {
    href: "mailto:mark26reyes@gmail.com",
    label: "E-post",
    icon: gmailIcon,
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a href="#hero" className="site-footer__logo" aria-label="Til toppen">
          <img src={mdrLogo} alt="MDR logo" />
        </a>

        <div className="site-footer__meta">
          <p>© {new Date().getFullYear()} Mark Daniel Reyes.</p>
          <p>All rights reserved.</p>
        </div>

        <div className="site-footer__links">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noreferrer"
            >
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
