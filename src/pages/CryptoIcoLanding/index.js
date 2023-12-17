import React, { useEffect, useState } from "react";

//Import Components
import Header from './Header'
import Navbar from "./Navbar/Navbar"
import Section from "./HeroSection/Section"


import Footer from "./Footer/footer"

const CryptoIcoLanding = () => {

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

   
        <Header />
      
        {/* import navbar */}
        <Navbar  />
      {/* Hero section */}
      <Section />



      {/* footer */}
      <Footer />
    </React.Fragment>
  )
}

export default CryptoIcoLanding
