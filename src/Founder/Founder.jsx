import Founderimg from "../assets/1.jpg";
function Founder() {
  return (
    <div className="flex flex-col bg-black w-[100%]" id="founder">
      <h1
        data-aos="fade-down-right"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="text-white font-[600] text-[30px] pl-[10px]  md:text-[35px] pt-[20px] lg:pl-[10px] lg:text-[45px] xl:pt-[30px]"
      >
        <span className="text-[#ff4c00]">O</span>UR{" "}
        <span className="text-[#ff4c00]">F</span>OUNDER
      </h1>
      <div className="w-full pt-[30px] p-[10px] flex justify-around gap-[25px] items-center lg:flex-row lg:justify-around">
        <div className="w-[65%] text-balance text-white font-[500] lg:text-[35px]">
          <p className="text-[10px] font-bold text-justify pr-[10px] md:pl-[10px] md:text-[22px] lg:text-[25px] xl:font-[300] xl:text-[30px]">
            Meet Nagaarjun, the visionary founder of VPRS Hoops Academy
            Foundation. As a former Madurai Sports Development Authority Of
            Tamilnadu (SDAT) basketball player and current student-athlete at
            Sindhi College, Bangalore, Nagaarjun's journey from Pudukkottai to
            Bangalore exemplifies the <span className="text-[#ff4c00]"> transformative power of basketball.</span>
            Inspired by his own experiences and fueled by a passion for giving
            back, Nagaarjun is dedicated to creating pathways for young athletes
            to succeed academically, athletically, and personally.
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="600"
          data-aos-easing="linear"
          className="w-[40%] h-[190px] md:h-[380px] lg:w-[25%] lg:h-[300px] xl:h-[400px] "
        >
          <img
            src={Founderimg}
            alt="Founder img"
            className="w-full h-full object-cover xl:object-contain"
          />
        </div>
      </div>
    </div>
  );
}
export default Founder;
