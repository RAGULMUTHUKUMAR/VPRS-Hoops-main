import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import Coach from "../assets/our team.jpg";
import Doctor from "../assets/WhatsApp Image 2024-03-21 at 10.11.55_86de7b6e.jpg";

function Team() {
  return (
    <div className="  pt-[50px] pl-[10px] bg-black flex flex-col gap-[50px]">
      <h1
        data-aos="fade-down-right"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="font-[600] text-[30px] text-white md:text-[35px]  lg:pl-[10px] lg:text-[45px] xl:pt-[30px] "
      >
        OUR TEAM
      </h1>

      {/* ------------------------ vision ----------------------- */}

      <div className=" w-full flex justify-around ">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="600"
          data-aos-easing="linear"
          className=" h-[200px] w-[35%] md:w-[40%] md:h-[300px] lg:w-[30%] xl:h-[400px]"
        >
          <img
            className="h-full w-[100%] object-cover md:object-contain xl:object-fit"
            src={Coach}
            alt="our Teams img-1"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-[50%] lg:w-[60%] xl:w-[55%]">
          <h1 className="text-[#FF4C00] font-extrabold w-full flex gap-[5px] md:text-[22px] xl:text-[35px]">
            Our Coach
            <span>
              <FaQuoteRight className="text-yellow-500" />
            </span>
          </h1>
          <p className="text-white text-justify text-[10px] md:text-[20px] md:text-justify  xl:text-[28px]">
            We are proud to have Ashok, a talented young coach with a passion
            for basketball and a commitment to player development. Ashok brings
            years of playing experience and coaching expertise to our academy,
            guiding players towards success on and off the court. With a focus
            on skill development, teamwork, and leadership, Ashok inspires our
            players to reach new heights in their basketball journey
          </p>
        </div>
      </div>

      {/* ------------------------ Doctor ---------------------- */}

      <div className=" w-full flex justify-around ">
        <div className="flex flex-col justify-start  w-[50%] lg:w-[60%] xl:w-[55%]">
          <h1 className="text-[#FF4C00] font-extrabold w-full flex gap-[5px] text-[14px] pb-[10px] md:p-0  md:text-[22px] lg:pb-[20px] xl:text-[35px]">
            Our Physiotherapist Doctor
            <span>
              <FaQuoteRight className="text-yellow-500" />
            </span>{" "}
          </h1>
          <p className="text-white text-[10px] text-justify md:text-[20px] md:text-justify xl:text-[28px]">
            Dr. Raja, a skilled physiotherapy doctor and co-founder of VPRS
            Hoops Academy Foundation, brings a wealth of knowledge and
            experience to our organization. As a former basketball player
            himself, Dr. Raja understands the physical demands of the sport and
            provides our players with proper strengthening exercises, injury
            prevention strategies, and rehabilitation treatments to keep them
            healthy and performing at their best.
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="600"
          data-aos-easing="linear"
          className=" h-[180px] w-[35%] md:w-[35%] md:mt-[20px] md:h-[350px] lg:w-[25%] lg:h-[300px] lg:mb-[20px] xl:h-[400px] "
        >
          <img
            className="h-full w-[100%] object-cover lg:object-fit xl:object-cover"
            src={Doctor}
            alt="our team img-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
