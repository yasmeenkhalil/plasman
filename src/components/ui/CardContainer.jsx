import { motion } from "framer-motion";

export default function CardContainer({ children, className = "", index = 0 }) {
  return (
 
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="bg-[#dcdfe3] p-[2px] transition-all duration-300 ease-out hover:-translate-y-1 shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(85,31,168,0.04)]"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 48px), calc(100% - 48px) 100%, 0 100%)" }}
    >
      <div
        className={`
          w-full h-full bg-white
          px-[25px] pt-[45px] pb-[35px] 
          flex flex-col items-center text-center
          ${className}
        `}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 46px), calc(100% - 46px) 100%, 0 100%)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
