import React, { useEffect, useMemo, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "team", label: "Team" },
  { id: "founder", label: "Founder" },
  { id: "contact", label: "Contact" },
];

function BasketballMark() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 text-red-500"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.95" />
      <path
        d="M32 4c6 8 10 17 10 28S38 52 32 60"
        stroke="#111111"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M32 4c-6 8-10 17-10 28s4 20 10 28"
        stroke="#111111"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 24c8 4 16 6 24 6s16-2 24-6"
        stroke="#111111"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 40c8-4 16-6 24-6s16 2 24 6"
        stroke="#111111"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = useMemo(
    () => location.pathname === "/",
    [location.pathname],
  );

  useEffect(() => {
    if (!isHomePage) {
      return undefined;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const visibleSection = [...navItems].reverse().find((item) => {
        const element = document.getElementById(item.id);

        if (!element) {
          return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      });

      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      setNavOpen(false);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3 sm:px-5 lg:px-6">
      <div
        className={`glass-nav-shell mx-auto flex max-w-7xl min-h-[76px] items-center justify-between rounded-2xl px-4 sm:px-8 lg:px-10 xl:px-12 ${
          scrolled ? "glass-nav-scrolled" : "glass-nav-top"
        }`}
      >
        <button
          type="button"
          onClick={() => (isHomePage ? scrollToSection("home") : navigate("/"))}
          className="flex min-h-[44px] items-center gap-3"
          aria-label="VPRS Hoops Academy home"
        >
          <BasketballMark />
          <div className="text-left leading-none">
            <div className="font-display text-4xl tracking-[0.14em] text-red-600">
              VPRS
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.34em] text-white/95">
              HOOPS ACADEMY
            </div>
          </div>
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id && isHomePage;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`nav-pill min-h-[44px] rounded-xl px-4 text-sm font-semibold uppercase tracking-[0.16em] transition ${
                  isActive
                    ? "nav-pill-active"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => navigate("/registration")}
            className="nav-cta ml-3 min-h-[44px] rounded-xl px-5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition"
          >
            Join Now
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setNavOpen((current) => !current)}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md lg:hidden"
          aria-label="Toggle navigation"
        >
          {navOpen ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl" />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          navOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-nav-drawer mx-1 mb-1 mt-2 rounded-2xl px-4 py-4 sm:mx-3">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id && isHomePage;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`min-h-[44px] rounded-xl px-4 text-left text-sm font-semibold uppercase tracking-[0.16em] transition ${
                    isActive
                      ? "bg-red-500/20 text-red-300"
                      : "text-white/85 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => navigate("/registration")}
              className="nav-cta mt-2 min-h-[44px] rounded-xl px-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
