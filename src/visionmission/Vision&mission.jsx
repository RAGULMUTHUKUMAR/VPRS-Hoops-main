import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import useScrollReveal from "../useScrollReveal";

const cards = [
  {
    title: "Our Vision",
    icon: FaEye,
    text: "Create a basketball ecosystem where every driven athlete has access to world-class coaching, disciplined habits, and opportunities to compete with purpose.",
  },
  {
    title: "Our Mission",
    icon: FaBullseye,
    text: "Deliver technical training, leadership development, and performance mentorship that transforms raw potential into confident, game-ready players.",
  },
];

function VisionMission() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="bg-dark-bg px-4 py-16 sm:px-8 lg:px-16 lg:py-24 xl:px-32"
    >
      <div className="mx-auto max-w-7xl">
        <p data-reveal className="section-kicker">
          Vision & Mission
        </p>
        <h2 data-reveal className="section-title max-w-3xl">
          A development system built for growth, identity, and lasting
          excellence.
        </h2>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-2">
          <div className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-red-600/60 to-transparent lg:block" />
          {cards.map(({ title, icon: Icon, text }) => (
            <article
              key={title}
              data-reveal
              className="glass-card rounded-2xl p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-700/15 text-red-500">
                <Icon className="text-2xl" />
              </div>
              <h3 className="font-display text-4xl uppercase tracking-[0.04em] text-white">
                {title}
              </h3>
              <p className="section-body mt-4">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
