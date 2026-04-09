import React from "react";
import useScrollReveal from "../useScrollReveal";
import founderImage from "../assets/1.jpg";

const founderStats = [
  { value: "10+", label: "Years Coaching" },
  { value: "800+", label: "Players Trained" },
  { value: "15", label: "Championships" },
];

function Founder() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="bg-dark-surface px-4 py-16 sm:px-8 lg:px-16 lg:py-24 xl:px-32"
    >
      <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div
          data-reveal
          className="relative overflow-hidden rounded-2xl border border-red-700/40 shadow-glow-red"
        >
          <img
            src={founderImage}
            alt="Founder portrait"
            className="h-[460px] w-full object-cover object-top sm:h-[560px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div>
          <p data-reveal className="section-kicker">
            Founder
          </p>
          <h2 data-reveal className="section-title">
            Nagaarjun built VPRS Hoops to give rising players the platform every
            athlete deserves.
          </h2>
          <p data-reveal className="section-body mt-6">
            Shaped by high-level competition and community leadership, he
            created a program centered on discipline, details, and belief. His
            coaching model combines intense skill development with mentorship so
            athletes grow in confidence, game IQ, and character.
          </p>

          <blockquote
            data-reveal
            className="mt-8 border-l-4 border-red-600 pl-4 text-lg italic leading-8 text-gray-300"
          >
            “Talent opens the door, but disciplined repetition and character are
            what keep you on the floor when the game gets hard.”
          </blockquote>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {founderStats.map((stat) => (
              <div
                key={stat.label}
                data-reveal
                className="glass-card rounded-2xl p-5 text-center"
              >
                <div className="text-3xl font-bold text-red-500">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
