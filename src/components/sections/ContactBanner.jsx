import { motion } from "framer-motion";
import heroImg from "../../assets/images/contactUs.jpg"; 
export default function ContactBanner() {
  return (
    <section className="relative w-full overflow-hidden select-none bg-plasman-dark border-b border-slate-800">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Contact Support Team"
          className="w-full h-full object-cover object-center brightness-[0.3] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-plasman-dark/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-[65px] flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-white text-base md:text-[22px] font-bold tracking-wide leading-snug">
            Contact Our Agent For Any kind of Help{" "}
            <span className="text-plasman-purple font-black">(24/7 Available)</span>
          </p>
        </div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-4 cursor-pointer group shrink-0"
        >
          <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/10 backdrop-blur-xs group-hover:bg-plasman-purple group-hover:border-transparent transition-all duration-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          
          <span className="text-2xl md:text-[28px] font-black text-white tracking-wider group-hover:text-plasman-purple transition-colors duration-300">
            080-5939-1979
          </span>
        </motion.div>

      </div>
    </section>
  );
}
