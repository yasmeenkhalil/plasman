"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  const floatingVariants = {
    animate: {
      y: [0, -12, 0],
       x: [0, 5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative w-full bg-[#F8F9FB] pt-32 pb-16 px-6 md:px-16 lg:pl-28 overflow-hidden select-none">
      
      
      <h1 className="absolute top-10 left-12 text-[5rem] md:text-7rem] font-black text-slate-200/30 font-sans tracking-tight pointer-events-none z-0">
        About Us
      </h1>

      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute left-6 top-36 w-14 h-14 rounded-full border-[3px] border-slate-200/80 pointer-events-none z-0"
      />

      <motion.div 
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
        className="absolute left-[45%] top-28 w-11 h-11 rounded-full border-[3px] border-slate-200/80 pointer-events-none z-0"
      />

      <motion.div 
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, 2, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-12 md:right-24 top-36 w-16 h-16 opacity-30 pointer-events-none z-0 text-slate-400"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="3" strokeLinecap="round">
          <path d="M10,80 Q40,40 60,60 T90,20" />
          <polyline points="80,20 90,20 90,30" />
        </svg>
      </motion.div>
      
      <div className="relative z-10 max-w-4xl w-full pt-6">
        
        <span className="text-xs font-semibold tracking-wider text-slate-400 block mb-3 pl-0.5">
          About Plasma Solutions
        </span>

         <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] leading-[1.25] tracking-tight max-w-4xl">
          Advancing plasma science <br className="hidden lg:block" />
          from innovative concepts <br className="hidden lg:block" />
          to global commercial applications
        </h3>

      </div>

    </section>
  );
}
