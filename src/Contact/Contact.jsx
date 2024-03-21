import Contactimg from "../assets/contact.png";
import conatctimg from "../assets/Basketball_illustration.png";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate phone number
    const phoneNumber = form.current.user_call.value.trim();
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    // Validate email format
    const email = form.current.user_email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm('service_yxy3o2s', 'template_04s9hze', form.current, {
        publicKey: 'pw1QIwo54-lpt4IZe',
      })
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
        },
        (error) => {
          setErrorMessage("Failed to send message. Please try again later.");
        },
      );
  };

  return (
    <div className="bg-black pt-[70px] pb-[100px] " id="contact">
      <h1 className="text-white text-[25px] font-[700] text-center md:text-[30px] lg:text-[35px]">
        JOIN THE <span className="text-[#ff4c00]"> ONES </span> COMMUNITY
      </h1>
      <p className="text-orange-200 text-center text-[8px] p-[50px] pt-[10px] font-[500] md:text-[12px]">
        Join us at VPRS Hoops Academy Foundation and discover the passion,
        dedication, and camaraderie that make basketball more than just a
        game—it's a way of life.
      </p>

      {/* -----------Small screen img ---------------------- */}
      <div
        data-aos="flip-down"
        data-aos-offset="300"
        data-aos-duration="300"
        className="w-[100%] h-[3o0px] pt-[10px] md:w-[50%] md:ml-[180px] lg:hidden"
      >
        <img
          className="w-full h-full object-cover"
          src={conatctimg}
          alt="small screen image"
        />
      </div>
      {/* -----------big screen img ---------------------- */}
      <div className="lg:flex lg:justify-between lg:items-center lg:w-full lg:h-[350px]">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-[30%] hidden lg:block"
        >
          <img
            className="w-full h-full object-cover"
            src={Contactimg}
            alt="Animation img"
          />
        </div>

        {/* --------------Get In Touch-------------------- */}

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="md:ml-[70px] lg:ml-0 lg:w-[65%] xl:w-[60%]" id="map"
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="bg-[#ff00001b] w-full h-[350px] flex flex-col gap-[25px] items-center justify-center md:w-[90%]">
              <div className="w-[100%] flex justify-around items-center gap-2 ">
                <input
                  className="w-[45%] text-white p-[5px] md:p-[10px] bg-[#e0989868] rounded-[3px] bg-opacity-5"
                  type="text"
                  placeholder="NAME"
                  name="user_name"
                />
                <input
                  className="w-[45%] text-white p-[5px] md:p-[10px] bg-[#e0989868] rounded-[3px] bg-opacity-5"
                  type="text"
                  placeholder="PHONE NO"
                  name="user_call"
                />
              </div>
              <input
                className="w-[95%] text-white p-[6px] md:p-[10px] bg-[#e0989868] rounded-[3px] bg-opacity-5"
                type="text"
                placeholder="E-mail"
                name="user_email"
              />
              <textarea
                className="w-[95%] text-white h-[100px] p-[5px] md:p-[10px] bg-[#e0989868] rounded-[3px] bg-opacity-5"
                type="text"
                placeholder="Message"
                name="user_msg"
              />
              <button className="bg-[#FF0000] hover:bg-[#ffff] hover:text-[#FF0000] text-xl font-semibold rounded-[50px] text-[#ffff] w-[170px] p-[10px]">
                <input type="submit" value="Send" />
              </button>
              {successMessage && <p className="text-green-500">{successMessage}</p>}
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
