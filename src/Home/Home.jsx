import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useScrollReveal from "../useScrollReveal";
import "./Home.css";
import introVideo from "../assets/intro.mp4";

const heroMetrics = [
  { value: "05+", label: "Athletes Coached" },
  { value: "15", label: "Championship Titles" },
  { value: "10+", label: "Years of Experience" },
];

const heroHighlights = [
  "Structured on-court skill progression",
  "Game-IQ training with live pressure reps",
  "Mentorship that builds leadership and discipline",
];

function Home({ home }) {
  const navigate = useNavigate();
  const sectionRef = useScrollReveal();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      ref={home}
      className="relative overflow-hidden bg-dark-bg"
    >
      {/* ── BACKGROUND VIDEO ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src={introVideo} type="video/mp4" />
      </video>

      {/* ── OVERLAYS ── */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(6,6,6,0.72) 0%, rgba(8,8,8,0.56) 42%, rgba(10,10,10,0.94) 100%)",
        }}
      />

      {/* red centre glow on top of dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(192,57,43,0.18) 0%, rgba(12,12,12,0.28) 58%, transparent 78%)",
        }}
      />

      {/* ── CONTENT ── */}
      <div
        ref={sectionRef}
        className="relative flex min-h-screen flex-col items-center
                   justify-center px-4 pb-24 pt-32 text-center
                   sm:px-8 lg:px-16 xl:px-32"
        style={{ zIndex: 3 }}
      >
        {/* floating orb */}
        <div
          className="hero-orb absolute left-1/2 top-1/2 h-64 w-64
                        -translate-x-1/2 -translate-y-1/2 rounded-full
                        bg-red-700/20 blur-[120px] pointer-events-none
                        sm:h-80 sm:w-80 lg:h-[28rem] lg:w-[28rem]"
          style={{ zIndex: 0 }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="lg:pr-8 lg:text-left">
            <p
              data-reveal
              className="hero-kicker mb-4 text-xs font-semibold uppercase
                        tracking-[0.42em] text-red-300 sm:text-sm lg:text-left"
            >
              VPRS Hoops Academy · Skill. Speed. Standards.
            </p>

            <div
              className="space-y-1 font-display uppercase leading-none
                          text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
            >
              {["PLAY FASTER", "THINK SHARPER", "LEAD STRONGER"].map(
                (word, index) => (
                  <div
                    key={word}
                    data-reveal
                    className="hero-title tracking-[0.06em]"
                    style={{
                      fontSize: "clamp(50px, 9.4vw, 108px)",
                      animationDelay: `${index * 120}ms`,
                    }}
                  >
                    {word}
                  </div>
                ),
              )}
            </div>

            <p
              data-reveal
              className="hero-balance hero-subtitle mx-auto mt-6 max-w-2xl text-base
                        leading-7 text-gray-200 sm:text-lg
                        drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] lg:mx-0"
            >
              Elite basketball development for ambitious athletes. Master
              cleaner footwork, faster reads, better shot selection, and the
              composure to take over in game-defining moments.
            </p>

            <div
              data-reveal
              className="mt-8 flex flex-col items-center
                          gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <button
                type="button"
                onClick={() => navigate("/registration")}
                className="min-h-[44px] rounded-lg bg-red-700 px-8 py-3
                         text-white font-semibold transition-transform
                         duration-300 hover:scale-105 hover:bg-red-800
                         shadow-[0_4px_24px_rgba(192,57,43,0.5)]"
              >
                Reserve Your Spot
              </button>
              <button
                type="button"
                onClick={scrollToAbout}
                className="glass-card min-h-[44px] rounded-lg
                         border border-white/20 px-8 py-3 font-semibold
                         text-white transition hover:bg-white/10"
              >
                Explore Programs
              </button>
            </div>
          </div>

          <div
            data-reveal
            className="hero-panel glass-card rounded-2xl p-6 text-left sm:p-7"
          >
            <p className="hero-panel-label">Performance Outcomes</p>
            <h3 className="hero-panel-title">Built For Real Match Impact</h3>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="hero-metric rounded-xl border border-white/10 bg-black/25 p-3"
                >
                  <div className="font-display text-4xl uppercase leading-none text-red-400">
                    {metric.value}
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-gray-200">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <ul className="mt-6 space-y-3">
              {heroHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="hero-highlight-item flex items-start gap-3"
                >
                  <span className="hero-dot mt-[9px]" aria-hidden="true" />
                  <span className="text-sm leading-6 text-gray-100 sm:text-base">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2
                        -translate-x-1/2 text-white/60"
        >
          <FaArrowDown className="animate-bounce text-2xl" />
        </div>
      </div>
    </section>
  );
}

export default Home;
