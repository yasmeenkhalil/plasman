import { useState, useEffect } from "react";
// 1. التعديل الأول: استدعاء مكتبة الـ Link في أعلى الملف لقراءة المسارات
import { Link } from "react-router-dom"; 
import logoImg from "../../assets/images/logo1.png"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        
        {/* LOGO AREA - تحويل شعار الشركة ليقرأ مسار الصفحة الرئيسية كلين بدون ريفريش */}
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

        {/* NAVIGATION LINKS - 2. التعديل الثاني: استبدال وسم <a> بمكون <Link> لتوجه تلقائياً لـ /about */}
        <ul className="hidden lg:flex items-center space-x-8 font-bold text-[15px] text-plasman-dark">
          {navItems.map((item) => (
            <li key={item} className="relative group/item">
              <Link 
                // السطر البرمجي الذكي لتحويل كلمة About Us إلى مسار حقيقي /about متوافق مع كود الأب
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '')}`} 
                className="hover:text-plasman-purple transition-colors flex items-center gap-1 py-2 tracking-wide cursor-pointer"
              >
                {item}
                <svg className="w-3 h-3 text-slate-500 font-bold transition-transform duration-200 group-hover/item:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        {/* BUTTONS AREA */}
        <div className="flex items-center gap-5">
          
          <div className="hidden md:block">
            <button className="bg-plasman-dark hover:bg-plasman-deep text-white font-bold text-[14px] px-6 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98] tracking-wide cursor-pointer">
              Book a Meeting
            </button>
          </div>

          <button aria-label="Toggle Menu" className="w-11 h-11 bg-plasman-light bg-opacity-40 hover:bg-plasman-light rounded-xl flex flex-col justify-center items-center gap-1.5 transition-colors duration-200 text-plasman-dark cursor-pointer">
            <span className="w-5 h-[2px] bg-current rounded-full" />
            <span className="w-5 h-[2px] bg-current rounded-full" />
            <span className="w-5 h-[2px] bg-current rounded-full" />
          </button>

        </div>

      </div>
    </nav>
  );
}
