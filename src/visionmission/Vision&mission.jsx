import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
// import { FaQuoteLeft } from "react-icons/fa6";
import vision from "../assets/vision.jpg";
import mission from "../assets/mision.jpg";

function VisionMission() {
  return (
    <div className="  pt-[50px] pl-[10px] bg-black flex flex-col gap-[50px]">
      <h1
        data-aos="fade-down-right"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="font-[600] text-[30px] text-white lg:text-[40px] "
      >
        VISION <span className="font-[600] text-[30px] text-[#FF4C00]"> &</span>{" "}
        MISSION
      </h1>

      {/* ------------------------ vision ----------------------- */}

      <div className=" w-full flex justify-around ">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="600"
          data-aos-easing="linear"
          className=" h-[200px] w-[35%] md:w-[40%] md:h-[350px] xl:mt-[50px]"
        >
          <img
            className="h-full w-[100%] object-cover lg:object-cover"
            src={vision}
            alt="vision and mission img-1"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-[50%] ">
          <h1 className="text-[#FF4C00] font-extrabold w-full flex gap-[5px] md:text-[22px] xl:text-[35px]">
            Vision
            <span>
              <FaQuoteRight className="text-yellow-500" />
            </span>
          </h1>
          <p className="text-white text-justify text-[10px] md:text-[20px] md:text-justify xl:text-[28px]">
            At VPRS Hoops Academy Foundation, we envision a world where
            basketball serves as a catalyst for social change and empowerment.
            We envision a future where every child has access to quality
            basketball training, education, and opportunities for personal
            growth. By fostering a culture of excellence, inclusivity, and
            community engagement, we strive to create a brighter tomorrow for
            generations to come.
          </p>
        </div>
      </div>

      {/* ------------------------ mission ---------------------- */}

      <div className=" w-full flex justify-around ">
        <div className="flex flex-col justify-start  w-[50%] ">
          <h1 className="text-[#FF4C00] font-extrabold w-full flex gap-[5px]  md:text-[22px] xl:text-[35px]">
            Mission
            <span>
              <FaQuoteRight className="text-yellow-500" />
            </span>{" "}
          </h1>
          <p className="text-white text-[10px] text-justify md:text-[20px] md:text-justify xl:text-[28px]">
            Our mission is to harness the transformative power of basketball to
            positively impact the lives of young athletes. We believe that every
            player deserves the opportunity to pursue their dreams and achieve
            success, regardless of their background or circumstances. Through
            our comprehensive programs and unwavering support, we aim to empower
            our players to reach their full potential and realize
            their aspirations.
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="600"
          data-aos-easing="linear"
          className=" h-[180px] w-[35%] md:w-[40%] md:h-[350px]  xl:mt-[50px] "
        >
          <img
            className="h-full w-[100%] object-cover xl:object-cover"
            src={mission}
            alt="vision and mission img-1"
          />
        </div>
      </div>
    </div>
  );
}

export default VisionMission;
