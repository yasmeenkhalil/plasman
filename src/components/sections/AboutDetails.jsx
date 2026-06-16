import { CheckCircle2, PhoneCall } from "lucide-react";
import BusinessTeamImage from '../../assets/images/business-team.jpg';
import analysisImage from '../../assets/images/analysis.jpg';

export default function AboutDetails() {
  return (
    <section className="bg-white  px-8 md:p-12 select-none rounded-3xl border border-slate-200/80 shadow-sm mb-10">
      <div className="mx-auto max-w-[1300px]">
        
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:mx-0 min-h-[420px] md:min-h-[460px]">
            
            <div className="w-[85%] h-[340px] md:h-[380px] rounded-3xl overflow-hidden shadow-md border border-slate-100 bg-slate-50">
              <img 
                src={BusinessTeamImage} 
                alt="Team working on plasma research"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute right-0 bottom-4 w-[55%] h-[180px] md:h-[200px] rounded-3xl overflow-hidden border-[6px] border-white shadow-xl bg-slate-50">
              <img 
                src={analysisImage} 
                alt="Plasma lab system analysis"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute left-4 bottom-4 md:left-[-32px] md:top-12 md:bottom-auto bg-[#0F172A] text-white p-5 rounded-2xl shadow-2xl max-w-[140px] text-center border border-slate-800">
              <h3 className="text-3xl font-black text-[#C47B36] tracking-tight">24+</h3>
              <p className="text-[10px] font-medium text-slate-300 uppercase tracking-wider mt-1.5 leading-snug">
                Years of R&D Experience
              </p>
            </div>

          </div>

          <div className="lg:col-span-7 text-left lg:pl-4">
            
            <span className="text-[11px] font-black tracking-[0.2em] text-[#C47B36] uppercase block mb-2">
              More About Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-black text-[#0F172A] leading-tight tracking-tight max-w-xl">
              Our Development Focus
            </h2>
            
            <span className="text-[10px] font-bold text-[#C47B36] tracking-widest uppercase block mt-1 mb-6">
              Technical Excellence
            </span>

            <p className="text-sm leading-relaxed text-slate-600 max-w-2xl mb-8">
              We believe that every organization deserves to develop, validate, and deploy practical, scalable, and commercially viable technologies. Our mission is to accelerate plasma innovation from concept to market application.
            </p>

            <div className="space-y-4 max-w-2xl border-b border-slate-200/60 pb-8 mb-8">
              
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="h-5 w-5 text-[#C47B36] shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  Accelerating the commercial and practical applications of plasma technology worldwide.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="h-5 w-5 text-[#C47B36] shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  Developing innovative plasma systems to address the current complex challenges in environment, energy, agriculture, food processing, and material processing.
                </p>
              </div>

            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 max-w-xl">
              
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F172A] shadow-sm shrink-0 border border-slate-800">
                  <PhoneCall className="h-5 w-5 text-[#C47B36]" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-slate-400 uppercase leading-none">Call us anytime</span>
                  <a href="tel:+81568887980" className="text-sm font-black text-[#0F172A] mt-1 hover:text-[#C47B36] transition-colors">
                    +81-568-88-7980
                  </a>
                </div>
              </div>

              <div className="text-left md:text-right md:pr-4">
                <span className="font-serif italic text-xl md:text-2xl text-slate-700 block select-none">
                  Dr. Ayman
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-0.5 block">
                  R&D Lead Director
                </span>
              </div>

            </div>

          </div>

        </div> {/* END OF GRID */}
      </div>
    </section>
  );
}
