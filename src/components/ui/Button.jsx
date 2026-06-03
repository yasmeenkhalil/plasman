import { motion } from "framer-motion";

export default function Button({ children, variant = "primary", onClick, className = "" }) {
  const baseStyles = "px-6 py-3 font-semibold rounded-full transition-all duration-300 relative overflow-hidden text-sm md:text-base";
  
  const variants = {
    primary: "bg-[#0A2540] text-white hover:bg-[#635BFF]",
    secondary: "border-2 border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-950",
    accent: "bg-[#635BFF] text-white hover:shadow-lg hover:shadow-indigo-500/30",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
