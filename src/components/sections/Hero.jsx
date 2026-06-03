import { motion } from "framer-motion";
import heroImg from "../../assets/images/meeting.jpg";

export default function Hero() {
  const gridVariants = {
    animate: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      className="relative w-full min-h-screen bg-[#f8f9fa] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center 
      pt-40 md:pt-30 pb-20 md:pb-0
      [clip-path:polygon(0_0,_100%_0,_100%_88%,_50%_100%,_0_100%)] 
      md:[clip-path:polygon(0_0,_100%_0,_100%_85%,_80%_98%,_20%_98%,_0_85%)]"
    >
      <div className="w-full md:col-span-7 lg:col-span-7 flex items-center justify-start pl-6 pr-4 py-16 md:py-0 z-10">
        <div className="max-w-2xl w-full relative">
          <motion.div 
            variants={gridVariants}
            animate="animate"
            className="absolute -top-32 -left-4 grid grid-cols-3 grid-rows-3 w-56 h-56 pointer-events-none opacity-20 z-0"
          >
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border-[0.01px] border-slate-400"></div>
            ))}
          </motion.div>

          <motion.div 
            variants={gridVariants}
            animate="animate"
            transition={{ delay: 2 }}
            className="absolute -bottom-32 left-90 grid grid-cols-3 grid-rows-3 w-56 h-56 pointer-events-none opacity-20 z-0"
          >
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border-[0.01px] border-slate-400"></div>
            ))}
          </motion.div>

          <div className="relative z-10 text-left pt-9">
            <span className="text-2xl font-medium text-slate-400 block mb-3 tracking-wide">
              20+ Years In Business
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.7rem] font-normal text-plasman-dark leading-[1.15] tracking-tight mb-6">
              Empowering Your <br />
              {/* تعديل الألوان لتقرأ من المتغيرات العامة */}
              <span className="text-plasman-dark font-extralight italic">Success</span>
              <span className="text-plasman-dark"> at a Time</span>
            </h1>

            <div className="mt-6">
              {/* تعديل لون الزر والـ hover ليتناسب مع الهوية */}
              <button className="bg-plasman-dark hover:bg-plasman-deep text-white font-semibold text-sm px-6 py-3 rounded-md transition-all duration-300 shadow-sm active:scale-95">
                View Solutions
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[45.5%] top-[47%] -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block pointer-events-none">
        <div className="absolute inset-0 bg-slate-200/40 blur-2xl rounded-full scale-110 animate-pulse" />
        
        <motion.div
          animate={{ 
            rotate: 360,
            y: [0, -18, 0]
          }}
          transition={{
            rotate: { repeat: Infinity, duration: 14, ease: "linear" },
            y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
          }}
          className="relative w-28 h-28 flex items-center justify-center"
        >
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.03)]"
          >
            <polygon 
              points="50,15 15,80 85,80" 
              fill="transparent" 
              stroke="var(--color-plasman-light)" 
              strokeWidth="10" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      <div className="w-full md:col-span-5 lg:col-span-5 relative h-[400px] md:h-screen self-stretch z-0 
      [clip-path:polygon(40%_0,100%_0,100%_100%,0_100%,0_20%)]">
        <motion.div
          className="absolute inset-0 bg-slate-100"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        >
          <img
            src={heroImg}
            alt="Business Meeting"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa]/40 via-[#f8f9fa]/10 to-transparent pointer-events-none hidden md:block" />
        </motion.div>
      </div>
    </section>
  );
}
