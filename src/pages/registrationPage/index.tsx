import LandingLayout from "../../components/layout";
import {Element} from 'react-scroll';
// import Pitch from "./sections/pitch";
// import Story from "./sections/story";
// import ThisYear from "./sections/thisYear";
// import FAQ from "./sections/FAQ";
// import Youtube from "./sections/youtube";
// import CountdownTimer from "./sections/countdown/CountdownTimer";
// import Twitter from "./sections/twitter";
// import Swags from "./sections/swags";
// import Speakers from "./sections/speakers";
import Register from "./sections/register";
import Navbar from "../../components/navbar";
function RegistrationPage() {
  // Create a ref for the Pitch section

  return (
    <LandingLayout>
       <Navbar>
        
        </Navbar>
      <Element name="ourprocess">
      <Register />
      </Element>

      {/* <Element name="aboutus">
      <Pitch />
      </Element>

     

      
  
    
      <Element name="download">
      <Swags />
      </Element>
      <Element name="faq">
      <FAQ/>
      </Element>

      <Element name="faq">
      <Speakers/>
      </Element>
      */}
      
      {/* <Marquee />
      <ImageGallery/>
      <Speakers />
      <Twitter />
      <Youtube />
      <CountdownTimer /> */}
    </LandingLayout>
  );
}

export default RegistrationPage;
