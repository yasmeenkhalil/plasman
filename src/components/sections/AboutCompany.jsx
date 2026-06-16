import { motion } from "framer-motion";
import aboutImg from "../../assets/images/aboutUs.jpg"; 
export default function AboutCompany() {
  const features = [
    { id: "01", text: "The Great Mission" },
    { id: "04", text: "Start Mission" },
    { id: "02", text: "Working with you" },
    { id: "05", text: "Great Partners" },
    { id: "03", text: "Our Destination" },
  ];

  return (
    <section className="w-full bg-white pt-[90px] pb-[60px] overflow-hidden select-none">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-6 relative flex justify-center items-center">
          
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[30px] top-[-10px] w-[50%] h-[95%] bg-plasman-dark rounded-[16px] z-0" 
          />
          
          <div className="relative w-[80%] h-[480px] md:h-[520px] z-10 
          [clip-path:polygon(0_0,100%_0,100%_76%,70%_100%,0_100%,0_14%)]">
            <img
              src={aboutImg}
              alt="About Our Company Manager"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col text-left relative">
          <div className="absolute top-[-30px] left-0 flex gap-1 opacity-20 pointer-events-none z-0">
            <div className="w-12 h-12 rounded-full border border-plasman-purple" />
            <div className="w-12 h-12 rounded-full border border-plasman-purple -ml-6" />
          </div>

          <span className="relative z-10 text-[14px] font-semibold text-slate-400 uppercase tracking-widest block mb-3">
            About Our Company
          </span>

          <h2 className="text-[36px] sm:text-[44px] font-extrabold text-plasman-dark leading-[1.2] tracking-tight mb-6">
            Delivering Excellence, Every <br />
            Step of the Way
          </h2>

          <p className="text-[15px] text-slate-400 font-normal leading-[1.7] mb-8 max-w-[540px]">
            We are a plasma technology R&D and consulting company that helps
            organizations develop, validate, and deploy plasma-based solutions. We work
            with industry, universities, and public institutions to move plasma technologies from
            concept to application.
          </p>

          <div className="grid grid-cols-2 border border-[#edf0f2] rounded-[12px] overflow-hidden mb-10 text-[15px] font-bold text-plasman-dark bg-white">
            {features.map((item, idx) => (
              <div
                key={idx}
                className={`
                  py-4 px-6 flex items-center gap-3 border-[#edf0f2] transition-colors duration-200 hover:bg-plasman-gray/30
                  ${idx % 2 === 0 ? "border-r" : ""} 
                  ${idx < 4 ? "border-b" : ""}
                  ${idx === 4 ? "col-span-1" : ""}
                `}
              >
                <span className="text-plasman-purple font-extrabold">{item.id}.</span>
                <span className="text-[#334155] font-semibold">{item.text}</span>
              </div>
            ))}
            <div className="py-4 px-6 border-b border-[#edf0f2] bg-white hidden sm:block" />
          </div>


        </div>
      </div>
    </section>
  );
}
