import { useState, useEffect } from "react";
// 1. أضفنا الـ useNavigate هنا إلى جانب الـ Link من مكتبة الـ router
import { Link, useNavigate } from "react-router-dom"; 
import logoImg from "../../assets/images/logo1.png"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // 2. تفعيل دالة التنقل البرمجي داخل المكون
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About Us", "Services", "Technologies", "Contact"];

  return (
    <nav
      className={`w-full fixed top-[40px] left-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-[0_4px_25px_rgba(0,0,0,0.04)] py-2" : "py-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO AREA */}
        <Link to="/" className="flex flex-col items-center justify-center group select-none shrink-0">
          <img 
            src={logoImg} 
            alt="Plasman Solutions Logo" 
            className="h-[42px] md:h-[48px] w-auto object-contain block transition-transform duration-200 group-hover:scale-[1.01]" 
          />
          
          <div className="hidden lg:flex items-center gap-1.5 mt-1 select-none">
            <span className="w-3 h-[1px] bg-gradient-to-r from-transparent to-plasman-purple opacity-60" />
            <p className="text-[7.5px] md:text-[8.5px] tracking-[0.03em] font-medium text-center whitespace-nowrap leading-none">
              <span className="text-plasman-dark">Innovative Ideas to </span>
              <span className="text-plasman-purple font-semibold">Smart </span>
              <span className="text-plasman-dark">and </span>
              <span className="text-plasman-purple font-semibold">Sustainable </span>
              <span className="text-plasman-dark">Solutions</span>
            </p>
            <span className="w-3 h-[1px] bg-gradient-to-l from-transparent to-plasman-purple opacity-60" />
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <ul className="hidden lg:flex items-center space-x-8 font-bold text-[15px] text-plasman-dark">
          {navItems.map((item) => (
            <li key={item} className="relative group/item">
              <Link 
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '')}`} 
                className="hover:text-plasman-purple transition-colors flex items-center gap-1 py-2 tracking-wide cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* BUTTONS AREA */}
        <div className="flex items-center gap-6">
          
          {/* CALL US SECTION */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-plasman-dark border border-slate-100">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[12px] text-slate-400 font-medium leading-tight">
                Call us anytime
              </span>
              <a 
                href="tel:08059391979" 
                className="text-[15px] font-bold text-plasman-dark hover:text-plasman-purple transition-colors tracking-wide"
              >
                080-5939-1979
              </a>
            </div>
          </div>
          
          {/* BOOK A MEETING BUTTON */}
          <div className="hidden md:block">
            {/* 3. ربط الحدث onClick لإرسال المستخدم لمسار /contact */}
            <button 
              onClick={() => navigate("/contact")}
              className="bg-plasman-dark hover:bg-plasman-deep text-white font-bold text-[14px] px-6 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98] tracking-wide cursor-pointer"
            >
              Book a Meeting
            </button>
          </div>

        </div>

      </div>
    </nav>
  );
}
