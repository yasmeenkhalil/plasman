import { Award, Headphones } from 'lucide-react';
import consultancyImage from '../../assets/images/close-up.jpg'; 

export default function ConsultancySection() {
  return (
    <section className="bg-white py-[60px] md:py-[120px] px-6 md:px-12 lg:px-24 font-sans select-none antialiased">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ==================== LEFT SIDE: 100% PERFECT MATCH SHAPED IMAGE ==================== */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start w-full">
          <div className="relative w-full max-w-[490px] aspect-[1/1] sm:aspect-square">
            
            {/* 1. Behind Dark Shape Layer (الخلفية الداكنة الخلفية المزيحة) */}
            <div 
              className="absolute inset-0 bg-[#0F1B2D] translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 z-0"
              style={{ 
                // الانحناء الهندسي الأصلي الدقيق من القالب (Blob Shape Layout)
                borderRadius: "30% 70% 70% 30% / 30% 34% 66% 70%" 
              }}
            />

            {/* 2. Main Foreground Image Layer (الصورة الأمامية المتطابقة) */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-10"
              style={{ 
                backgroundImage: `url(${consultancyImage})`,
                // نفس الانحناء الهندسي تماماً ليتطابق التموج البصري عند التداخل
                borderRadius: "30% 10% 70% 30% / 50% 34% 66% 70%" 
              }}
            />

          </div>
        </div>

        {/* ==================== RIGHT SIDE: CONTENTS ==================== */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          <div className="space-y-4">
            <span className="inline-block border border-gray-200 text-plasman-purple text-[13px] md:text-[14px] font-bold tracking-[0.06em] px-[22px] py-[10px] uppercase rounded-none bg-white">
              Business Consultancy
            </span>
            
            <h2 className="text-[32px] sm:text-[38px] md:text-[46px] font-extrabold text-plasman-dark tracking-tight uppercase leading-[1.15]">
              Why We're The <br />
              <span className="text-plasman-dark">Perfect Fit For You</span>
            </h2>
          </div>

          <div className="space-y-8 pt-4">
            
            <div className="flex items-start gap-6 group">
              <div className="w-[64px] h-[64px] rounded-full border border-gray-200 flex items-center justify-center shrink-0 bg-white group-hover:bg-plasman-purple group-hover:border-plasman-purple transition-all duration-400">
                <Award className="w-[28px] h-[28px] stroke-[1.3] text-plasman-dark group-hover:text-white transition-colors duration-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-[20px] font-bold text-plasman-dark tracking-tight">
                  Best Business Consulting
                </h3>
                <p className="text-[#5E6472] text-[16px] leading-[28px] font-normal max-w-lg">
                  We specialize in helping businesses unlock their full potential through expert guidance,
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-[64px] h-[64px] rounded-full border border-gray-200 flex items-center justify-center shrink-0 bg-white group-hover:bg-plasman-purple group-hover:border-plasman-purple transition-all duration-400">
                <Headphones className="w-[28px] h-[28px] stroke-[1.3] text-plasman-dark group-hover:text-white transition-colors duration-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-[20px] font-bold text-plasman-dark tracking-tight">
                  24/7 Customer Support
                </h3>
                <p className="text-[#5E6472] text-[16px] leading-[28px] font-normal max-w-lg">
                  Our dedicated support team is available 24/7 to assist you with any questions or issues anytime.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
