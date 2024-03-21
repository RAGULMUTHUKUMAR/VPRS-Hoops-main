import About from "./About/About"
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Founder from "./Founder/Founder";
import Home from "./Home/Home";
import Map from "./Map/Map";
import Navbar from "./Navbar/navbar";
import VisionMission from "./visionmission/Vision&mission";
import Aos from "aos";
import "aos/dist/aos.css";

import { useRef } from "react";
import Team from "./Team/Team";



function App() {
  Aos.init();

  const home = useRef();


  return (
    <main>
    <div className="overflow-hidden">
      <Navbar />
      <Home home={home}/>
      <About/>
      <VisionMission />
      <Founder />
      <Team/>
      <Contact />
      <Map />
      <Footer />
    </div>
    </main>
  );
}

export default App;
