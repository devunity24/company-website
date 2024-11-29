import React, { lazy } from "react";
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
  return (
    <>
      <BreakpointContext.Provider value={fetchBreakpoint}>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Hero />
            <Services />
            {/* <Expertise /> */}
            <Innovations />
            <Industries />
            <Partners />
            {/* <Visionaries /> */}
            <About />
          </main>
          <Footer />
        </div>
      </BreakpointContext.Provider>
    </>
  );
}

export default App;
