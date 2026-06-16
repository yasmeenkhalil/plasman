import {
  School,
  Cpu,
  Leaf,
  Droplets,
} from "lucide-react";

export default function TargetMarketSection() {
  const sectors = [
    {
      icon: <School size={52} strokeWidth={1.25} />,
      title: "Universities & Institutes",
      description:
        "Bridging high-level academic research with viable infrastructure.",
    },
    {
      icon: <Cpu size={52} strokeWidth={1.25} />,
      title: "Plasma Tech Companies",
      description:
        "Accelerating advanced plasma systems for industrial applications.",
    },
    {
      icon: <Leaf size={52} strokeWidth={1.25} />,
      title: "Sustainability Ventures",
      description:
        "Developing scalable green solutions to address energy challenges.",
    },
    {
      icon: <Droplets size={52} strokeWidth={1.25} />,
      title: "Water & Wastewater",
      description:
        "Innovative custom systems optimized for treatment processing.",
    },
  ];

  const diagonalClipStyle = {
    clipPath: "polygon(15% 10px, 100% 0, 100% calc(100% - 90px), calc(100% - 90px) 100%, 0 100%, 0 35%)"
  };

  return (
    <section className="relative pb-10 select-none w-full z-10">
      
      <div className="mx-4 md:mx-12 max-w-[1300px] xl:mx-auto relative">
        
     
        <div 
          className="absolute inset-0 bg-slate-200/80 rounded-3xl pointer-events-none"
          style={diagonalClipStyle}
        />

      
        <div 
          className="relative inset-[1px] bg-white rounded-3xl shadow-sm p-8 md:p-16 overflow-hidden"
          style={diagonalClipStyle}
        >
          
          {/* ===== Header ===== */}
          <div className="text-center mb-10 relative">
            <span className="text-xs font-bold tracking-widest text-[#C47B36] uppercase block mb-2">
              Our Served Sectors
            </span>

            <h2 className="text-3xl md:text-[36px] font-black text-[#0F172A] tracking-tight leading-tight">
              Target Market
            </h2>
          </div>

          {/* ===== Cards Grid ===== */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {sectors.map((item, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center group cursor-pointer"
              >
                <div className="mx-auto mb-6 relative w-[180px] h-[180px] flex items-center justify-center">
                  
                  <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 transition-transform duration-700 group-hover:rotate-45" />

                  <div className="absolute inset-[14px] rounded-full bg-[#FBFBFB] border border-slate-100/80 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(15,23,42,0.04)] group-hover:bg-white">
                    <div className="text-slate-700 transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-base md:text-[18px] font-black text-[#0F172A] mb-2 tracking-tight transition-colors duration-200 group-hover:text-slate-700">
                  {item.title}
                </h3>

                <p className="text-xs md:text-[13px] text-slate-400 font-medium leading-relaxed max-w-[220px] mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
