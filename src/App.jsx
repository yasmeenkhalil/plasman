// 1. استدعاء مكونات التوجيه والمسارات الكاملة من مكتبة الراوتر
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { motion } from "framer-motion";

// استيراد مكونات التصميم الهيكلي الثابت (Layout)
import Navbar from "./components/layout/Navbar";
import TopBar from "./components/layout/Topbar";
import Toolbar from "./components/layout/Toolbar";

// استيراد أقسام الصفحة الرئيسية (Home Page Sections)
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import ContactBanner from "./components/sections/ContactBanner";
import AboutCompany from "./components/sections/AboutCompany";
import WorkProcess from "./components/sections/WorkProcess";
import ServicesSection from "./components/sections/ServicesSection";
import ConsultancySection from "./components/sections/ConsultancySection";
import AboutUsPage from "./components/pages/AboutUsPage";  
import ServicesPage from "./components/pages/ServicesPage";  
import TechnologiesPage from "./components/pages/TechnologiesPage";  
import ContactUs from "./components/pages/ContactUs";  

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white transition-colors duration-300 antialiased relative flex flex-col justify-between">
        
        <div>
          {/* الـ Headers الثابتة تظل ظاهرة فوق كل الصفحات */}
          <motion.div 
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-[0_2px_15px_rgba(0,0,0,0.02)]"
          >
            <TopBar />
            <Navbar />
          </motion.div>

          {/* تفعيل حاوية التوجيه والمسارات ديناميكياً */}
          <Routes>
            
            {/* أ. المسار الرئيسي للموقع (الصفحة الرئيسية الشاملة لجميع أقسامكِ السابقة) */}
            <Route path="/" element={
              <main className="relative">
                <Hero />
                <Services />
                <ContactBanner />
                <AboutCompany />
                <WorkProcess />
                <ServicesSection />
                <ConsultancySection />
              </main>
            } />

            {/* ب. مسار صفحة About المستقلة والجديدة كلياً */}
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
           <Route path="/contact" element={<ContactUs />} /> 

          </Routes>
        </div>

        {/* الأدوات الجانبية الثابتة تظل ظاهرة في كل الموقع */}
        <Toolbar />
        
      </div>
    </Router>
  );
}

export default App;
