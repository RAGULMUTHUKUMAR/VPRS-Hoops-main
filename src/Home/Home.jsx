import React from "react";
import video from "../assets/intro.mp4";
import basketball from "../assets/basket-png.png";
import { FaBiohazard } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
// import { FaBasketball } from "react-icons/fa6";
import { FaGoogleWallet } from "react-icons/fa6";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home({ home }) {
  var navigate = useNavigate()
  return (
    <div className=" w-full bgvideo" id="home" ref={home}>
      <div className="w-full h-[600px] md:h-screen ">
        <div className="intro absolute w-full z-[2] flex flex-col mt-[65px]  md:mt-[20px] lg:mt-[100px] ">
          <h1 className="text-white text-[30px] font-[900] pl-2 mt-[10px] md:text-[50px] md:mt-[50px] lg:text-[65px] xl:mt-[110px] xl:pl-[25px]">
            Welcome To <span className="text-[#FF4C00]"> VPRS Hoops</span>
          </h1>
          <h1 className="text-white text-[25px] pl-2 font-black md:text-[45px] xl:pl-[25px] lg:text-[55px]">
            Academy Foundation <span className="text-[#FF4C00]">!</span>
          </h1>
          <p className=" text-white text-[15px] text-start font-semibold pl-2 pt-4 md:w-[70%] md:text-[20px] md:font-[500] lg:w-[65%] lg:text-[20px] xl:w-[56%] xl:pl-[25px] xl:text-[20px]">
            Welcome to VPRS Hoops Academy Foundation, where dreams take flight
            on the wings of basketball! We are a non-profit organization
            dedicated to empowering young basketball players to excel in the
            game and beyond. Join us on our journey to unlock the full potential
            of aspiring athletes and pave the way for a brighter future through
            the power of basketball.
          </p>

          {/*------------------------- Animated basketball------------------------------ */}

          <div className="w-[170px] h-[70px] md:w-[220px] md:h-[90px] md:ml-[520px] md:bottom-[140px] lg:bottom-[150px] lg:w-[300px] lg:h-[120px] lg:ml-[710px] lg:rounded-[100px] xl:ml-[75%] mt-[50px] ml-[110px] rounded-[50px] overflow-hidden bg-[#FF4C00] flex relative shadow-[#FF4C00] shadow-2xl">
            <div className="absolute left-0 top-0 flex justify-center items-center w-[50%] h-[100%] z-10  animate-wiggle">
              <img
                className="bg-[#FF4C00] rounded-[100px]"
                src={basketball}
                alt="basketball-png "
              />
            </div>
            <button
            onClick={()=>{navigate("/registration")}}
              type="submit"
              className="w-[50%] relative left-0 top-0 p-1 text-center text-[13px] font-black border-none hover:text-white text-[#221014] pl-[9px] md:text-2xl md:font-extrabold lg:text-3xl lg: lg:ml-[20px] "
            >
              Join Us
            </button>
            <div className=" relative right-0 top-0 ml-[22px] mt-3  w-[50%]">
              <p className="text-[7px] font-bold text-[#ffff] p-2 md:text-[11px] md:p-1 md:font-semibold lg:text-[15px] lg:p-2 lg:font-semibold ">
                Be Played By People Of All Ages And All Abilities
              </p>
            </div>
          </div>
          {/* ------------------------ Services icons -------------------------------- */}

          <div className=" pt-[50px] h-[160px] flex items-center justify-center gap-[55px] md:p-0 md:hidden md:justify-around">
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="bg-[#221014] w-[50px] h-[50px] rounded-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]  flex items-center justify-center border-[3px] border-[#ff4c00]">
                <FaBiohazard className="text-4xl text-[#FF4C00] " />
              </div>
              <p className="font-semibold text-white md:text-[#ff4c00] md:text-xl md:font-bold">
                Proficiency
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="bg-[#221014] w-[50px] h-[50px] rounded-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]  flex items-center justify-center border-[3px] border-[#ff4c00]">
                <MdGroups className="text-4xl text-[#FF4C00] " />
              </div>
              <p className="font-semibold text-white md:text-[#ff4c00] md:text-xl md:font-bold">
                Team Work
              </p>
            </div>
            {/* <FaBasketball /> */}
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="bg-[#221014] w-[50px] h-[50px] rounded-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]  flex items-center justify-center border-[3px] border-[#ff4c00]">
                <FaGoogleWallet className="text-4xl text-[#FF4C00] " />
              </div>
              <p className="font-semibold text-white md:text-[#ff4c00] md:text-xl md:font-bold">
                Participation
              </p>
            </div>
          </div>
        </div>

        {/* ----------------------------- Background video --------------------------------- */}

        <div className="absolute bg-black w-full h-[600px] md:h-screen opacity-80 z-[1]   "></div>
        <video
          src={video}
          autoPlay
          loop
          muted
          className="object-cover w-full h-full z-[-1]"
        />
      </div>
      <div className="hidden md:block ">
        <div className=" pt-5 h-[200px] flex items-center justify-center gap-[55px] md:p-0 md:bg-black  md:justify-around">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="bg-[#221014] w-[50px] h-[50px] rounded-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]  flex items-center justify-center border-[3px] border-[#ff4c00]">
              <FaBiohazard className="text-4xl text-[#FF4C00] " />
            </div>
            <p className="font-semibold text-white md:text-[#ff4c00] md:text-xl md:font-bold">
              Proficiency
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="bg-[#221014] w-[50px] h-[50px] rounded-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]  flex items-center justify-center border-[3px] border-[#ff4c00]">
              <MdGroups className="text-4xl text-[#FF4C00] " />
            </div>
            <p className="font-semibold text-white md:text-[#ff4c00] md:text-xl md:font-bold">
              Team Work
            </p>
          </div>
          {/* <FaBasketball /> */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="bg-[#221014] w-[50px] h-[50px] rounded-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]  flex items-center justify-center border-[3px] border-[#ff4c00]">
              <FaGoogleWallet className="text-4xl text-[#FF4C00] " />
            </div>
            <p className="font-semibold text-white md:text-[#ff4c00] md:text-xl md:font-bold">
              Participation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
