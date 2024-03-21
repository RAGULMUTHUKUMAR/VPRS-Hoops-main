import aboutimg from "../assets/3.jpg";
function About({ About }) {
  return (
    <div className=" w-full  bg-black ]" id="about" ref={About}>
      <h1
        data-aos="fade-down-right"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="text-white pl-[10px] pt-[10px] text-[35px] font-[700] font-sans md:pb-[30px] lg:text-[40px] lg:pb-[35px] "
      >
        <span className="text-[#ff4c00]">A</span>bout
      </h1>
      <div className=" pl-5 pt-[10px] flex justify-around items-center gap-[30px]  lg:flex-row lg:justify-around">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="600"
          data-aos-easing="linear"
          className="w-[35%] h-[180px] md:w-[40%] md:h-[350px] lg:w-[25%] xl:h-[450px]"
        >
          <img
            className="w-full object-cover md:object-cover  h-full"
            src={aboutimg}
            alt="About img"
          />
        </div>
        <div className="w-[65%]  text-balance text-white font-[500]  ">
          <p className="text-[10px] font-[500] text-justify pr-[15px] pb-[10px] md:text-[22px] lg:text-[25px] xl:font-[300] xl:text-[34px]">
            At VPRS Hoops Academy Foundation, we believe in the transformative
            power of basketball. Founded by Nagaarjun, a passionate basketball
            player and advocate for sports development,<span className="text-[#ff4c00]"> our academy aims to
            provide quality basketball training and coaching</span> to aspiring players
            in our community. With a strong emphasis on skill development,
            character building, and academic excellence, we strive to create a
            supportive and inclusive environment where every player can thrive.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
