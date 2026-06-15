"use client";

import { Leaf, Droplets, Zap, Sprout, HeartPulse, Layers } from "lucide-react";
import CleanAir from '../../assets/images/Clean_air.jpg'
import Energy from '../../assets/images/energy.jpg'
import agriculture from '../../assets/images/smart-agriculture.jpg'
import factory from '../../assets/images/factory.jpg'
import medical from '../../assets/images/hands-medical-doctor.jpg'
import water from '../../assets/images/waste-water.jpg'

export default function TechnologiesPage() {
  const techSectors = [
    {
      id: 1,
      title: "Clean Air Technology",
      image: CleanAir,
      icon: <Leaf size={18} className="text-[#C47B36] shrink-0" />
    },
    {
      id: 2,
      title: "Water & Wastewater Treatment",
      image: water,
      icon: <Droplets size={18} className="text-[#C47B36] shrink-0" />
    },
    {
      id: 3,
      title: "Energy Solutions",
      image: Energy,
      icon: <Zap size={18} className="text-[#C47B36] shrink-0" />
    },
    {
      id: 4,
      title: "Agriculture & Food Systems",
      image: agriculture,
      icon: <Sprout size={18} className="text-[#C47B36] shrink-0" />
    },
    {
      id: 5,
      title: "Medical Applications",
      image: medical,
      icon: <HeartPulse size={18} className="text-[#C47B36] shrink-0" />
    },
    {
      id: 6,
      title: "Material Processing",
      image: factory,
      icon: <Layers size={18} className="text-[#C47B36] shrink-0" />
    }
  ];

  return (
    <section className="bg-white py-[150px] md:py-[150px] select-none w-full relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ==================== SECTION HEADER ==================== */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block border border-[#E2E8F0] text-[#5E6472] text-[13px] font-medium tracking-[0.05em] px-[22px] py-[10px] uppercase bg-white mb-[18px]">
            Our Served Sectors
          </span>

          <h2 className="text-[34px] sm:text-[40px] font-bold text-[#0F1B2D] tracking-[-0.03em] leading-[1.2]">
            Our Technologies
          </h2>
        </div>

        {/* ==================== THE STAGGERED PILL GRID ==================== */}
        <div className="flex flex-col items-center gap-5 md:gap-6 max-w-5xl mx-auto">
          
          {/* السطر الأول: يحتوي على قطاعين */}
          <div className="flex flex-wrap justify-center gap-5 w-full">
            {techSectors.slice(0, 2).map((tech) => (
              <div
                key={tech.id}
                className="group flex items-center gap-4 bg-[#F8F9FB] border border-slate-100 p-2 pr-6 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:bg-white hover:border-[#C47B36]/20 hover:shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-all duration-500 cursor-pointer min-w-[280px] sm:min-w-[320px]"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0 relative">
                  <img 
                    src={tech.image} 
                    alt={tech.title} 
                    loading="lazy" // خدعة التسريع 1: التحميل الذكي عند التمرير فقط
                    decoding="async" // خدعة التسريع 2: المعالجة غير المتزامنة للبكسلات لسرعة الاستجابة
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                <div className="flex items-center gap-2.5">
                  {tech.icon}
                  <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1E293B] tracking-tight transition-colors duration-300 group-hover:text-[#C47B36]">
                    {tech.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* السطر الثاني: ثلاثة قطاعات متراصة ومتداخلة بدقة بالمنتصف */}
          <div className="flex flex-wrap justify-center gap-5 w-full">
            {techSectors.slice(2, 5).map((tech) => (
              <div
                key={tech.id}
                className="group flex items-center gap-4 bg-[#F8F9FB] border border-slate-100 p-2 pr-6 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:bg-white hover:border-[#C47B36]/20 hover:shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-all duration-500 cursor-pointer min-w-[280px] sm:min-w-[300px]"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0 relative">
                  <img 
                    src={tech.image} 
                    alt={tech.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                <div className="flex items-center gap-2.5">
                  {tech.icon}
                  <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1E293B] tracking-tight transition-colors duration-300 group-hover:text-[#C47B36]">
                    {tech.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* السطر الثالث: التكنولوجيا السادسة متموضعة في الأسفل بشكل مركزي ناعم */}
          <div className="flex flex-wrap justify-center gap-5 w-full">
            {techSectors.slice(5, 6).map((tech) => (
              <div
                key={tech.id}
                className="group flex items-center gap-4 bg-[#F8F9FB] border border-slate-100 p-2 pr-6 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:bg-white hover:border-[#C47B36]/20 hover:shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-all duration-500 cursor-pointer min-w-[280px] sm:min-w-[320px]"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0 relative">
                  <img 
                    src={tech.image} 
                    alt={tech.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                <div className="flex items-center gap-2.5">
                  {tech.icon}
                  <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1E293B] tracking-tight transition-colors duration-300 group-hover:text-[#C47B36]">
                    {tech.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
