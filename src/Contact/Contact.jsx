import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import useScrollReveal from "../useScrollReveal";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-white focus:border-red-500 focus:outline-none";

const contactItems = [
  {
    icon: FaLocationArrow,
    title: "Address",
    value: "2723 Brindhavanam Corner, Pudukkottai, Tamil Nadu 622003",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    value: "info@vprshoopsacademy.com",
  },
];

function Contact() {
  const form = useRef(null);
  const sectionRef = useScrollReveal();
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        "service_yxy3o2s",
        "template_04s9hze",
        form.current,
        {
          publicKey: "pw1QIwo54-lpt4IZe",
        },
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });
      form.current.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Message delivery failed. Please try again later.",
      });
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-dark-surface px-4 py-16 sm:px-8 lg:px-16 lg:py-24 xl:px-32"
    >
      <div className="mx-auto max-w-7xl">
        <p data-reveal className="section-kicker">
          Contact
        </p>
        <h2 data-reveal className="section-title max-w-3xl">
          Reach out and start your high-performance training journey with VPRS
          Hoops.
        </h2>

        <div className="mt-12 grid gap-8 xl:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-reveal
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className={inputClass}
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <input
                className={inputClass}
                type="tel"
                name="user_phone"
                placeholder="Phone"
                required
              />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input
                className={inputClass}
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <input
                className={inputClass}
                type="text"
                name="user_subject"
                placeholder="Subject"
                required
              />
            </div>
            <textarea
              className={`${inputClass} mt-4 min-h-[180px]`}
              name="user_message"
              placeholder="Message"
              required
            />
            <button
              type="submit"
              className="mt-4 min-h-[44px] w-full rounded-lg bg-red-700 py-3 font-semibold text-white transition-all hover:scale-[1.02] hover:bg-red-800"
            >
              Send Message
            </button>
            {status.message ? (
              <p
                className={`mt-4 text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"}`}
              >
                {status.message}
              </p>
            ) : null}
          </form>

          <div className="space-y-5">
            {contactItems.map(({ icon: Icon, title, value }) => (
              <div
                key={title}
                data-reveal
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-red-700/15 text-red-500">
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl uppercase tracking-[0.04em] text-white">
                      {title}
                    </h3>
                    <p className="section-body mt-1 text-base leading-7">
                      {value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
