import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

function Map() {
  return (
    <div className="p-[5px]  bg-black  w-full lg:flex md:pb-[50px]">
      <iframe data-aos="flip-down"data-aos-duration="3200"
          data-aos-easing="linear"
        className="w-[100%] h-[350px] md:w-[90%] md:ml-[40px] "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183502.27667166298!2d79.12815668282337!3d10.327284262265223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b007944ae4ea57f%3A0x5f992bf8d82610a3!2sVprssolutions!5e1!3m2!1sen!2sin!4v1709880049469!5m2!1sen!2sin"
        width="300"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="w-full h-[350px] flex flex-col items-start justify-around pl-[20px] md:flex-row md:items-center md:justify-around md:pl-[0] md:w-[100%] lg:flex-col lg:gap-2">
        <div data-aos="fade-up"
      data-aos-duration="5000"
          data-aos-easing="linear" className="h-[116px] flex items-center justify-center gap-[20px] pt-[30px] md:p-[5px] md:bg-[#ff00001b] md:pt-[0] md:h-[115px] md:w-[32%] md:shadow-[#ff8787a6] md:shadow-lg lg:bg-transparent lg:w-[70%] lg:h-[100px]">
          <IoIosMail className="text-[#FF0000] text-[40px] font-[700] md:w-[20%] md:text-[250px] lg:w-[10%]" />
          <div className="flex flex-col items-start justify-center md:w-[80%]">
            <h1 className="text-[#FDC3AA] text-[25px] font-[700] md:text-[20px]">E-mail :</h1>
            <p className="text-white text-[15px] font-[700] md:text-[12px]">
              info@vprshoopsacademy.com
            </p>
          </div>
        </div>
        <div data-aos="fade-up-right"
      data-aos-duration="5000"
          data-aos-easing="linear" className="h-[116px] flex items-center justify-center gap-[20px] pt-[30px] md:p-[5px] md:bg-[#ff00001b] md:pt-[0] md:h-[115px] md:w-[32%] md:shadow-[#ff8787a6] md:shadow-lg lg:bg-transparent lg:w-[70%] lg:h-[100px]">
          <FaPhoneVolume className="text-[#FF0000] text-[30px] font-[700] md:w-[20%] md:text-[250px] lg:w-[10%]" />
          <div className="flex flex-col items-start justify-center md:w-[80%]">
            <h1 className="text-[#FDC3AA] text-[25px] font-[700] md:text-[20px]">
              Mobile No :
            </h1>
            <p className="text-white text-[15px] font-[700] md:text-[12px]">+1234567890</p>
          </div>
        </div>
        <div data-aos="fade-up-right"
      data-aos-duration="5000"
          data-aos-easing="linear" className=" h-[116px] flex items-center justify-center gap-[10px] pt-[30px] md:p-[5px] md:bg-[#ff00001b] md:pt-[0] md:h-[115px] md:w-[32%] md:shadow-[#ff8787a6] md:shadow-lg lg:bg-transparent lg:w-[70%] lg:h-[100px]">
          <MdLocationOn className="text-[#FF0000] text-[70px] font-[700] md:w-[20%] md:text-[250px] lg:w-[10%]" />
          <div className="flex flex-col items-start justify-center md:w-[80%]">
            <h1 className="text-[#FDC3AA] text-[25px] font-[700] md:text-[20px]">Address :</h1>
            <p className="text-white text-[10px] font-[700] md:text-[8px]">
              2723, BRINDHAVANAM CORNER, VADAKKU RAJA VEETHI, Melaraja Vidi,
              Brindavan, Pudukkottai, Tamil Nadu 622003
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
