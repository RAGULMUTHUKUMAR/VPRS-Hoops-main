import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaAward, FaBasketballBall, FaUsers } from "react-icons/fa";
import useScrollReveal from "../useScrollReveal";

const stats = [
  { value: 500, suffix: "+", label: "Athletes", icon: FaUsers },
  { value: 10, suffix: "+", label: "Years", icon: FaBasketballBall },
  { value: 15, suffix: "+", label: "Titles", icon: FaAward },
];

function StatCard({ value, suffix, label, icon: Icon, startCounting }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) {
      return undefined;
    }

    let frameId;
    const duration = 1400;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [startCounting, value]);

  return (
    <article
      data-reveal
      className="glass-card rounded-2xl p-6 text-left transition duration-300 hover:-translate-y-2 hover:shadow-card-hover"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-700/15 text-red-500">
        <Icon className="text-xl" />
      </div>
      <div className="text-5xl font-bold text-red-500">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-base font-medium uppercase tracking-[0.16em] text-gray-200">
        {label}
      </p>
    </article>
  );
}

function About() {
  const sectionRef = useScrollReveal();
  const statsRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const element = statsRef.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const statCards = useMemo(
    () =>
      stats.map((stat) => (
        <StatCard key={stat.label} {...stat} startCounting={startCounting} />
      )),
    [startCounting],
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-dark-surface px-4 py-16 sm:px-8 lg:px-16 lg:py-24 xl:px-32"
    >
      <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <p data-reveal className="section-kicker">
            About VPRS Hoops
          </p>
          <h2
            data-reveal
            className="section-title border-l-4 border-red-600 pl-4"
          >
            Building complete athletes through elite reps and relentless
            standards.
          </h2>
          <p data-reveal className="section-body mt-6">
            VPRS Hoops Academy is for players who want more than casual
            sessions. Every week blends technical skill work, live competition,
            strength habits, and performance mindset coaching designed for
            match-day pressure.
          </p>
          <p data-reveal className="section-body mt-4 text-text-muted">
            We meet athletes at their current level, then push forward with
            structure, accountability, and a team culture that celebrates
            discipline.
          </p>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3"
        >
          {statCards}
        </div>
      </div>
    </section>
  );
}

export default About;
