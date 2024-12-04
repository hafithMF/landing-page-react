import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Vision } from "./components/Vision";
import { Vocational } from "./components/Vocational";
import { Team } from "./components/Team";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vocational />
      <About />
      <HowItWorks />
      <Vision />
      <Team />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
