import React from "react";
import { useRef, useState } from 'react';
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function Registrations() {
  const form = useRef();
 
  var navigate = useNavigate()
  const sendEmail = (e) => {
    e.preventDefault();

    const requiredFields = ['user_Namee', 'user_Agee', 'user_Datee', 'user_Parentt', 'user_contact', 'user_Add', 'user_emery', 'user_session', 'user_tshirt', 'user_exp', 'user_last'];
    let isValid = true;
    
    requiredFields.forEach(field => {
      const input = form.current.elements[field];
      if (!input.value.trim()) {
        isValid = false;
        toast.error("Please check all the inputs.");
      }
    });
    
    if (isValid) {
      emailjs.sendForm('service_yxy3o2s', 'template_u5z7jpl', form.current, {
          publicKey: 'pw1QIwo54-lpt4IZe',
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Your Application Successfully Submitted");
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Please Check Your Application");
          }
        );
    } else {
      toast.error("Please check all the inputs.");
    }
    

    // Phone number validation
    const phoneNumber = form.current.user_contact.value.trim();
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    const emerNumber = form.current.user_emery.value.trim();
    if (emerNumber.length !== 10 || isNaN(phoneNumber)) {
      toast.error("Please enter a valid Emergency contact number.");
      return;
    }


    

   
  };

  return (
    <div className="bg-black ">
      <FaArrowLeft onClick={()=>{navigate("/")}} className="text-[#ff4000] text-[35px] pt-4 ml-[10px] lg:text-[50px]"/>
      <h1 className="text-[25px] text-[#ff4c00]  font-[700] text-center p-[20px] lg:text-[30px]">
         SUMMER CAMP REGISTRATION
      </h1>

      <div>
      <form ref={form} onSubmit={sendEmail} >
        {/* -------------------Participant Information----------------- */}

        <h1 className="text-[20px] text-[#ff4c00] font-[700] text-start pt-[50px] pb-[20px] pl-[20px] lg:ml-[110px] lg:text-[25px]">
          Participant Information
        </h1>
        <section className="flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:place-items-center md:place-content-around xl:place-content-center">
          <div>
            <h1 className="text-white text-[20px] mb-2 lg:text-[25px]">Name</h1>
            <input
              type="text"
              re
              name="user_Namee"
              placeholder="Enter Your Name"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">Age</h1>
            <input
            name="user_Agee"
              type="number"
              placeholder="Enter your age"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">Gender</h1>
            <select name="user_Genderr" className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]">
            <option>Select Gender</option>
              <option>MALE</option>
              <option>FEMALE</option>
            </select>
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">Date of Birth</h1>
            <input
            name="user_Datee"
              type="date"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">
              Parent/Guardian Name
            </h1>
            <input
            name="user_Parentt"
              type="text"
              placeholder="Enter Your Parent/Guardian Name"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">Contact Number</h1>
            <input
            name="user_contact"
              type="number"
              placeholder="Enter Your Number"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">Address</h1>
            <textarea
            name="user_Add"
              type="text"
              placeholder="Address"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">
              Emergency Contact Name
            </h1>
            <input
            name="user_emery"
              type="number"
              placeholder="Emergency Contact Name"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
        </section>
        {/* -------------------Participant Information----------------- */}

        {/* -------------------Camp Preferences----------------- */}

        <h1 className="text-[20px] text-[#ff4c00] font-[700] text-start pt-[50px] pb-[20px] pl-[20px] lg:ml-[110px] lg:text-[25px]">
          Camp Preferences
        </h1>
        <section className="flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:place-items-center md:place-content-around">
          <div>
            <h1 className="text-white text-[20px] mb-2">Preferred Session</h1>
            <select name="user_session" className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]">
            <option>Select Session</option>
              <option>Morning</option>
              <option>Evening</option>
              <option>Both Morning / Evening</option>
            </select>
          </div>
          <div>
            <h1 className="text-white text-[20px] mb-2">T-Shirt Size</h1>
            <select name="user_tshirt" className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]">
            <option>Select Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div>
            <p className="text-white text-[18px] font-[500] mb-2">
              Any Medical Conditions (Please Specify)
            </p>
            <textarea
            name="user_medical"
              placeholder="Message"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]"
            />
          </div>
        </section>

        {/* -------------------Camp Preferences----------------- */}

        {/* -------------------Additional Information----------------- */}

        <h1 className="text-[20px] text-[#ff4c00] font-[700] text-start pt-[50px] pb-[20px] pl-[20px] lg:ml-[110px] lg:text-[25px]">
          Additional Information
        </h1>
        <section className="flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:place-items-center md:place-content-around">
          <div>
            <h1 className="text-white text-[20px] mb-2">
              Any previous basketball experience?
            </h1>
            <select name="user_exp" className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px]">
            <option>Experience</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="ml-[0px]">
            <p className="text-white text-[11px] font-[500] mb-2 lg:text-[15px]">
              What are you hoping to learn or achieve at our summer camp?
            </p>
            <textarea
            name="user_last"
              placeholder="Message"
              className="p-[8px] w-[300px] text-white bg-[#232326fd] outline-none rounded-[6px] lg:p-[15px] lg:w-[400px] "
            />
          </div>
        </section>
        <div className="flex items-center justify-center mt-[50px]"><button className="bg-[#FF0000] hover:bg-[#ffff] hover:text-[#FF0000] text-2xl font-black rounded-[8px] text-[#ffff] w-[200px] p-[10px]">
            <input type="submit" value="Send" />
          </button>
          </div>
        </form>

        {/* -------------------Additional Information----------------- */}

        {/* -------------------Terms and Conditions----------------- */}

        <h1 className="text-[20px] text-[#ff4c00] font-[700] text-start pt-[50px] pb-[20px] pl-[20px] lg:ml-[110px] lg:text-[25px]">
          Terms and Conditions *
        </h1>
        <section className="flex flex-col items-center justify-center gap-8 md:pb-[10px]">
          <p className="text-white text-justify px-[20px] lg:w-[80%]">
            By submitting this registration form, I acknowledge that
            participation in the VPRS Hoops Academy Foundation Free Summer Camp
            is voluntary and at my own risk. I understand that the camp
            organizers will take all necessary precautions to ensure the safety
            and well-being of participants, but cannot be held liable for any
            injuries or accidents that may occur during the camp. I agree to
            abide by the rules and regulations set forth by the academy and to
            conduct myself in a respectful and sportsmanlike manner at all
            times.
          </p>
          <p className="text-[#FF0000] text-[10px] text-center p-[20px] md:text-[10px] md:p-0">
          Let's make this summer unforgettable on the court!
        </p>
       
        
        </section>

        {/* -------------------Terms and Conditions----------------- */}
      </div>
    </div>
  );
}

export default Registrations;
