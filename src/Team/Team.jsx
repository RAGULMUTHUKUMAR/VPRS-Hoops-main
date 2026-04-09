import React from "react";
import useScrollReveal from "../useScrollReveal";
import coachImage from "../assets/coach.jpg";
import rajaImage from "../assets/Raja.jpg";
import staffImage from "../assets/staff.jpg";

const teamMembers = [
  {
    name: "Ashok",
    role: "Head Skills Coach",
    image: coachImage,
    imagePosition: "center 18%",
  },
  {
    name: "Dr. Raja",
    role: "Performance Physio",
    image: rajaImage,
    imagePosition: "center 20%",
  },
  {
    name: "Elite Staff",
    role: "Player Development Team",
    image: staffImage,
    imagePosition: "center 24%",
  },
];

function Team() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="team"
      ref={sectionRef}
      className="bg-dark-bg px-4 py-16 sm:px-8 lg:px-16 lg:py-24 xl:px-32"
    >
      <div className="mx-auto max-w-7xl">
        <p data-reveal className="section-kicker">
          Team
        </p>
        <h2 data-reveal className="section-title max-w-3xl">
          Coaches and specialists who keep every athlete progressing with
          intent.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              data-reveal
              className="glass-card overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(192,57,43,0.3)]"
            >
              <div className="group relative h-[22rem] overflow-hidden sm:h-[24rem]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  style={{ objectPosition: member.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-700/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-4xl uppercase tracking-[0.04em] text-white">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-red-400">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
