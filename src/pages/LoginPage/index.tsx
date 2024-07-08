import LandingLayout from "../../components/layout";

import Login from "./sections/login";
import Navbar from "../../components/navbar";
function LoginPage() {
  // Create a ref for the Pitch section

  return (
    <LandingLayout>
       <Navbar>
        
        </Navbar>
            <Login/>


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

export default LoginPage;
