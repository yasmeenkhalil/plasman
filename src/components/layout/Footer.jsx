import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  // مصفوفة الخدمات الثمانية المحدثة لعرضها كنصوص ثابتة فقط
  const services = [
    "Research & Development",
    "Tailored Research Services",
    "Industry-Academia Research",
    "Expert Consultation",
    "Talent Dispatch",
    "Training & Education",
    "Scientific Equipment Trading",
    "Web Development",
  ];

  // روابط النافبار السفلي السريع (تظل بروابط للتنقل بين الصفحات الرئيسية)
  const footerMenu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Technologies", path: "/technologies" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#f8f9fa] text-slate-800 pt-20 pb-8 px-6 lg:px-24 border-t border-slate-100 select-none overflow-hidden">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
        
        {/* العمود الأول: الشعار والنص التحفيزي وزر الحجز */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-plasman-dark tracking-tight leading-tight">
            Ready To <br />
            Work With Us?
          </h2>
          <p className="text-gray-500 text-[14.5px] leading-relaxed max-w-sm font-normal">
            Accelerating innovation through advanced plasma science, applied research, 
            and strategic international consulting frameworks.
          </p>
          <div className="pt-2">
            <Link 
              to="/contact"
              className="inline-block bg-plasman-dark hover:bg-plasman-deep text-white font-bold text-[14px] px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98] tracking-wide shadow-sm"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* العمود الثاني: قائمة الخدمات المحدثة (نصوص ثابتة للعرض فقط بدون روابط) */}
        <div className="lg:col-span-4 lg:pl-8">
          <h4 className="text-[16px] font-bold text-plasman-dark tracking-wide mb-1 uppercase">
            Our Services
          </h4>
          <div className="w-12 border-t-2 border-dashed border-gray-300 mb-6" />
          
          <ul className="space-y-3.5">
            {services.map((service, index) => (
              <li key={index} className="flex items-center group">
                <span className="text-[13px] text-gray-400 group-hover:text-plasman-purple mr-2.5 transition-colors duration-200">
                  →
                </span>
                {/* تم استبدال الـ Link بـ span لعرض النص فقط */}
                <span className="text-[14.5px] text-gray-600 group-hover:text-plasman-purple font-medium transition-colors duration-200 tracking-wide">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثالث: بيانات الاتصال والموقع الفعلي */}
        <div className="lg:col-span-4 lg:pl-4 space-y-6">
          <div>
            <h4 className="text-[16px] font-bold text-plasman-dark tracking-wide mb-1 uppercase">
              Contact Us
            </h4>
            <div className="w-12 border-t-2 border-dashed border-gray-300 mb-6" />
          </div>

          <div className="space-y-5">
            {/* الهاتف */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-700 shadow-sm shrink-0">
                <Phone size={18} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-gray-400 font-semibold tracking-wide uppercase">Call Us 24/7</span>
                <a href="tel:+256567785678" className="text-[14.5px] font-bold text-plasman-dark hover:text-plasman-purple transition-colors">
                  080-5939-1979
                </a>
              </div>
            </div>

            {/* البريد الإلكتروني */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-700 shadow-sm shrink-0">
                <Mail size={18} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-gray-400 font-semibold tracking-wide uppercase">Work with us</span>
                <a href="mailto:info@plasman.com" className="text-[14.5px] font-bold text-plasman-dark hover:text-plasman-purple transition-colors">
                  info@plasman.com
                </a>
              </div>
            </div>

            {/* الموقع الجغرافي */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-700 shadow-sm shrink-0 mt-0.5">
                <MapPin size={18} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-gray-400 font-semibold tracking-wide uppercase">Our Location</span>
                <address className="text-[13.5px] font-bold text-plasman-dark not-italic leading-relaxed tracking-wide">
                   〒305-0035 Ibaraki, Tsukuba, <br />
                   Matsushiro, 1 Chome−18−4 Gakuen Daiichi
                   Building 101

                </address>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* شريط الحقوق السفلي الممتد مضافاً إليه روابط المنيو التنقلية */}
      <div className="max-w-[1320px] mx-auto pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-gray-400 font-medium tracking-wide">
          Plasman Solutions - Copyright All rights reserved.
        </p>
        
        <ul className="flex items-center flex-wrap justify-center gap-x-6 gap-y-2">
          {footerMenu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="text-[13px] text-gray-500 hover:text-plasman-purple font-semibold transition-colors duration-200 tracking-wide"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
