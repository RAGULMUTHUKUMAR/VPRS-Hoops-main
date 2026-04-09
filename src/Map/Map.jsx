import React from "react";
import useScrollReveal from "../useScrollReveal";

function Map() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="map"
      ref={sectionRef}
      className="bg-dark-bg px-4 py-16 sm:px-8 lg:px-16 lg:py-24 xl:px-32"
    >
      <div className="mx-auto max-w-7xl">
        <p data-reveal className="section-kicker">
          Map
        </p>
        <h2 data-reveal className="section-title max-w-3xl">
          Train in a focused environment built for repetition, competition, and
          growth.
        </h2>

        <div data-reveal className="glass-card mt-10 rounded-2xl p-4 sm:p-6">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="VPRS Hoops academy location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.867934951013!2d78.80768627585897!3d10.823632258229929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baac1b3d742e8d3%3A0xc0d3f1af44f6fb53!2sPudukkottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710174411009!5m2!1sen!2sin"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: "invert(90%) hue-rotate(180deg)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
