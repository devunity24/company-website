import React, { lazy, useState } from "react";
import BreakpointContext from "./context/breakPointContext";
import useBreakPoint from "./hooks/useBreakpoint";
/**
 * components
 */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
//import Expertise from "./components/Expertise";
//import Visionaries from "./components/Visionaries";
import About from "./components/About";
import Footer from "./components/Footer";
const Services = lazy(() => import("./components/Services"));
const Innovations = lazy(() => import("./components/Innovations"));
const Industries = lazy(() => import("./components/Industries"));
const Partners = lazy(() => import("./components/Partners"));
function App() {
  const fetchBreakpoint = useBreakPoint();
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <>
      <BreakpointContext.Provider value={fetchBreakpoint}>
        <div className="min-h-screen bg-white">
          {showNavbar && <Navbar />}
          <main>
            <Hero />
            <About />
            <Services />
            {/* <Expertise /> */}
            <Innovations onOpenImageView={(val) => setShowNavbar(() => !val)} />
            <Industries />
            <Partners />
            {/* <Visionaries /> */}
          </main>
          <Footer />
        </div>
      </BreakpointContext.Provider>
    </>
  );
}

export default App;
