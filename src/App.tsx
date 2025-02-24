import { About } from "./components/About";

import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Services } from "./components/Services";

import { ScrollToTop } from "./components/ScrollToTop";

// import { Sponsors } from "./components/Sponsors";
import { Workflow } from "./components/Workflow";

import { Testimonials } from "./components/Testimonials";
import Contactus from "./components/Contactus"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      <About />
      <HowItWorks />
      <Features />
      <Workflow />
      {/* <Cta /> */}
      <Testimonials />
      {/* <Team /> */}
      {/* <Pricing /> */}
      <Newsletter />
      <FAQ />
      <Contactus/>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
