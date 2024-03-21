import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import logo from "../assets/academy-logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [NavOpen, setNavOpen] = useState(false);
  const Navigate = useNavigate()

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="w-full h-[70px] bg-[#FF4C00] text-white flex items-center justify-between lg:p-4  relative z-[20]">
        <div className="w-[100px] p-[10px]">
          <img src={logo} alt="academy-logo" />
        </div>
        <nav className="hidden md:hidden lg:flex">
          <ul className="lg:flex lg:gap-[50px] xl:gap-7 lg:justify-center lg:items-start lg:p-4 ">
            <li>
              <a
                className="text-base text-black font-[700] hover:text-white hover:underline-black hover:underline hover:underline-offset-[8px] "
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-base text-black font-[700] hover:text-white hover:underline-black hover:underline hover:underline-offset-[8px] "
                href="#about"
              >
                About Us
              </a>
            </li>
            <li onClick={()=>{Navigate("/registration")}}  className="text-base text-black font-[700] hover:text-white hover:underline-black hover:underline hover:underline-offset-[8px] ">
    
                Registrations
          
            </li>
            {/* <li>
              <a
                className="text-base text-black font-[700] hover:text-white hover:underline-black hover:underline hover:underline-offset-[8px] "
                href=""
              >
                Photo & Gallery
              </a>
            </li> */}
            <li>
              <a
                className="text-base text-black font-[700] hover:text-white hover:underline-black hover:underline hover:underline-offset-[8px] "
                href="#founder"
              >
                Founder
              </a>
            </li>
            <li>
              <a
                className="text-base text-black font-[700] hover:text-white hover:underline-black hover:underline hover:underline-offset-[8px] "
                href="#map"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <CgMenuRight
          className="font-bold ml-10 text-[50px] lg:hidden text-black pr-[10px]"
          onClick={() => setNavOpen(!NavOpen)}
        />
      </div>
      {/* ${navbar ? "ml-0":"ml-[70%]"} => this is using side navbar */}

      <div
        className={`fixed top-0 w-[250px] h-screen bg-black z-20 ${
          NavOpen ? "left-0" : "-left-full"
        }`}
      >
        <h1 className="text-white w-[100%] h-[50px] bg-[#FF4C00] text-[18px] text-center pt-[10px] font-[900]">VPRS HOOPS ACADEMY</h1>
        <ul className="flex flex-col p-[20px] justify-center items-start gap-[20px]">
          <li onClick={() => setNavOpen(!NavOpen)}>
            <a
              className="text-xl md:text-xl text-[#FF4C00] font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px]"
              href="/"
            >
              Home
            </a>
          </li>
          <li onClick={() => setNavOpen(!NavOpen)}>
            <a
              className="text-xl md:text-xl text-[#FF4C00] font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px]"
              href="#about"
            >
              About Us
            </a>
          </li>
          <li  onClick={()=>{Navigate("/registration")}}  className="text-xl md:text-xl text-[#FF4C00] font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px]">
            
              Registrations
           
          </li>
          {/* <li>
            <a
              className="text-xl md:text-xl text-[#FF4C00] font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px]"
              href=" "
            >
              Photo & Gallery
            </a>
          </li> */}
          <li onClick={() => setNavOpen(!NavOpen)}>
            <a
              className="text-xl md:text-xl text-[#FF4C00] font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px]"
              href="#founder"
            >
              Founder
            </a>
          </li>
          <li onClick={() => setNavOpen(!NavOpen)}>
            <a
              className="text-xl md:text-xl text-[#FF4C00] font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px]"
              href="#map"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex flex-col items-center justify-center mt-[60px] md:mt-0 "><img src={logo}/>
        <h1 className="text-[#FF0000] mb-[30px] text-[15px] font-[900] text-center md:text-[13px] md:font-[800] md:text-black md:mb-[100px]">
            JOIN THE{" "}
            <span className="text-white "> ONES </span>{" "}
            COMMUNITY
          </h1></div>
      </div>
    </div>
  );
}

export default Navbar;