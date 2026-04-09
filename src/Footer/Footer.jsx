import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#team", label: "Team" },
  { href: "#founder", label: "Founder" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
  { href: "https://youtube.com", label: "YouTube", icon: FaYoutube },
  { href: "https://facebook.com", label: "Facebook", icon: FaFacebookF },
];

function Footer() {
  return (
    <footer className="bg-[#060606] px-4 py-12 sm:px-8 lg:px-16 xl:px-32">
      <div className="mx-auto max-w-7xl border-t border-white/5 pt-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="font-display text-6xl tracking-[0.12em] text-red-600">
              VPRS
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-[0.4em] text-white">
              HOOPS ACADEMY
            </div>
            <p className="section-body mt-5 max-w-sm text-base leading-7 text-gray-400">
              Basketball development for athletes who want sharper skills,
              stronger habits, and a competitive edge.
            </p>
          </div>

          <div>
            <h3 className="font-display text-3xl uppercase tracking-[0.04em] text-white">
              Navigation
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="min-h-[44px] text-sm uppercase tracking-[0.18em] text-gray-400 transition hover:text-red-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl uppercase tracking-[0.04em] text-white">
              Stay Connected
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                  <Icon />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-sm text-gray-600">
          © 2026 VPRS Hoops Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
