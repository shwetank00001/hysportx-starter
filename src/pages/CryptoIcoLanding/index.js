import React, { useEffect, useState } from "react";

//Import Components
import Header from './Header'
import Navbar from "./Navbar/Navbar"
import Section from "./HeroSection/Section"


import Footer from "./Footer/footer"
// import OurTeam from "./CarouselTypes/OurTeam";

const CryptoIcoLanding = (props) => {

  //meta title
  document.title = "Hysport Landing | HySport";

  const [imglight, setimglight] = useState(true);
  const [navClass, setnavClass] = useState("");

  // Use ComponentDidMount
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true)
  }, [])

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop
    if (scrollup > 80) {
      setimglight(false)
      setnavClass("nav-sticky")
    } else {
      setimglight(true)
      setnavClass("")
    }
  }

  return (
    <React.Fragment>

        <div className="fixed-top">
        <Navbar  />

      
        {/* import navbar */}
        <Header />
        </div>


      {/* Hero section */}
      <Section />
        
      {/* <OurTeam /> */}


      {/* footer */}
      <Footer />
    </React.Fragment>
  )
}

export default CryptoIcoLanding
