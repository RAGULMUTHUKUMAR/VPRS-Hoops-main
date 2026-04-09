import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowLeft } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-white focus:border-red-500 focus:outline-none";

function Registrations() {
  const form = useRef(null);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    const data = new FormData(form.current);
    const requiredFields = [
      "full_name",
      "age",
      "phone",
      "email",
      "program",
      "message",
    ];
    const hasEmptyField = requiredFields.some(
      (field) => !String(data.get(field) || "").trim(),
    );

    if (hasEmptyField) {
      toast.error("Please complete all required fields.");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_yxy3o2s",
        "template_u5z7jpl",
        form.current,
        {
          publicKey: "pw1QIwo54-lpt4IZe",
        },
      );
      toast.success("Registration submitted successfully.");
      setSuccessMessage(
        "Your registration has been received. We will contact you soon with the next training details.",
      );
      form.current.reset();
    } catch (error) {
      toast.error("Unable to submit registration right now.");
      setSuccessMessage("");
    }
  };

  return (
    <section className="min-h-screen bg-dark-bg px-4 py-10 sm:px-8 lg:px-16 xl:px-32">
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mb-8 flex min-h-[44px] items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400 transition hover:text-white"
        >
          <FaArrowLeft />
          Back to Home
        </button>

        <div className="mb-10 max-w-3xl">
          <p className="section-kicker">Registrations</p>
          <h1 className="section-title border-l-4 border-red-600 pl-4">
            Join the next VPRS Hoops performance intake.
          </h1>
          <p className="section-body mt-6">
            Share your details and preferred program. Our team will follow up
            with the schedule, enrollment process, and onboarding plan.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={submitForm}
          className="glass-card mx-auto max-w-2xl rounded-2xl p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className={inputClass}
              type="text"
              name="full_name"
              placeholder="Full Name"
              required
            />
            <input
              className={inputClass}
              type="number"
              name="age"
              placeholder="Age"
              required
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <input
              className={inputClass}
              type="tel"
              name="phone"
              placeholder="Phone"
              required
            />
            <input
              className={inputClass}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mt-4">
            <select
              className={inputClass}
              name="program"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Program
              </option>
              <option value="foundation">Foundation Skills</option>
              <option value="advanced">Advanced Game IQ</option>
              <option value="elite">Elite Performance Camp</option>
            </select>
          </div>
          <textarea
            className={`${inputClass} mt-4 min-h-[160px]`}
            name="message"
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="mt-4 min-h-[44px] w-full rounded-lg bg-red-700 py-3 font-semibold text-white transition-all hover:scale-[1.02] hover:bg-red-800"
          >
            Submit Registration
          </button>
          {successMessage ? (
            <p className="mt-4 text-sm text-green-400">{successMessage}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default Registrations;
