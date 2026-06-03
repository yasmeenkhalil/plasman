import { motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import ContactBanner from "./components/sections/ContactBanner";
import ServicesSection from "./components/sections/ServicesSection";
import ConsultancySection from "./components/sections/ConsultancySection";
import WorkProcess from "./components/sections/WorkProcess";
import TopBar from "./components/layout/Topbar";
import Toolbar from "./components/layout/Toolbar";
import AboutCompany from "./components/sections/AboutCompany";

function App() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300 antialiased relative">
      
      {/* Fixed Layout Headers Wrapper */}
      <motion.div 
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-[0_2px_15px_rgba(0,0,0,0.02)]"
      >
        <TopBar />
        <Navbar />
      </motion.div>

      {/* Page Main Content Sections */}
      <main className="relative">
        <Hero />
        <Services />
        <ContactBanner />
        <AboutCompany/>
        <WorkProcess />
        <ServicesSection />
        <ConsultancySection/>
      </main>

      {/* Ultimate Fixed Right Side Interaction Toolbar */}
      <Toolbar />
      
    </div>
  );
}

export default App;
