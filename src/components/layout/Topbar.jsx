import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // تأكدي من تثبيت react-icons
import { FiClock } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="w-full bg-white border-b border-slate-100 text-xs hidden md:flex items-center justify-between h-10 select-none">
            <div 
        className="bg-[#1c2229] text-white flex items-center h-full pl-6 pr-12 font-medium transition-colors hover:text-[#635BFF] cursor-pointer"
        style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)' }}
      >
        <a href="#contact" className="flex items-center gap-1.5">
          Are you ready to grow up your business? Contact Us 
          <span className="text-sm font-bold">→</span>
        </a>
      </div>
      <div className="flex items-center h-full text-slate-600 font-medium">
                <div className="flex items-center gap-2 px-6">
          <FiClock className="text-sm text-slate-400" />
          <span>Working: 8.00am - 5.00pm</span>
        </div>
        <div className="w-[1px] h-full bg-slate-200 rotate-[20deg] transform origin-center opacity-70" />

        <div className="flex items-center gap-4 px-6">
          <span className="text-slate-400">Visit Us:</span>
          <div className="flex items-center gap-3.5 text-slate-700">
            <a href="#" className="hover:text-[#635BFF] transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#635BFF] transition-colors"><FaXTwitter /></a>
            <a href="#" className="hover:text-[#635BFF] transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-[#635BFF] transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>
    </div>
  );
}
