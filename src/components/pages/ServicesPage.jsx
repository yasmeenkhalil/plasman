"use client";
import {
  Atom,
  FlaskConical,
  Globe2,
  HelpCircle,
  UserCheck,
  GraduationCap,
  Activity,
  Code2
} from "lucide-react";
import { ArrowRight } from "lucide-react";

 const services = [
  {
    id: 1,
    title: "Research and Development",
    description:
      "Creating cutting-edge plasma reactors and processes for diverse applications, from initial concept to R&D implementation, ensuring efficiency and technological advancements. This can be done via two flexible ways: Conducting the work at our internal advanced facilities, or deploying direct implementation within your framework.",
    icon: Atom,
    gradient: "from-[#C47B36]/10 to-[#0F172A]/80"
  },
  {
    id: 2,
    title: "Tailored Research Services",
    description:
      "Conducting bespoke research projects for clients, including feasibility studies, prototyping, measurements, data analysis, and dissemination of achieved results. We also offer sustained high-level research support in technical fields for modern companies or specialized research laboratories.",
    icon: FlaskConical,
    gradient: "from-[#0F172A]/90 to-[#C47B36]/20"
  },
  {
    id: 3,
    title: "Industry-Academia Collaborative Research",
    description:
      "Providing a wide range of collaboration models to align with project needs and available funding. Facilitating partnerships and joint ventures between universities and businesses worldwide to accelerate innovation. A special focus is dedicated to seamlessly connecting worldwide companies with laboratories located in Japan well known for their global experience.",
    icon: Globe2,
    gradient: "from-[#C47B36]/15 to-[#0F172A]/90"
  },
  {
    id: 4,
    title: "Consultation Services",
    description:
      "Offering expert consultation to universities, research institutes, and companies. Services include performing experiments, experimental design and execution, data analysis, literature reviews, and publication editing. Providing in-depth guidance and support, helping clients optimize their research processes and maximize the potential of plasma technology.",
    icon: HelpCircle,
    gradient: "from-[#0F172A]/80 to-[#C47B36]/10"
  },
  {
    id: 5,
    title: "Researcher and Engineer Dispatch",
    description:
      "Supplying highly skilled and vetted researchers, precision engineers, and expert technicians to directly support, manage, and execute specialized deep-tech projects according to your custom dynamic milestones.",
    icon: UserCheck,
    gradient: "from-[#C47B36]/20 to-[#0F172A]/95"
  },
  {
    id: 6,
    title: "Training and Education",
    description:
      "Providing highly tailored training programs, advanced engineering workshops, and structured educational courses designed for universities, corporations, and public institutions to enhance laboratory skills and technical knowledge.",
    icon: GraduationCap,
    gradient: "from-[#0F172A]/85 to-[#C47B36]/15"
  },
  {
    id: 7,
    title: "Scientific Equipment Trading",
    description:
      "Importing and exporting state-of-the-art scientific instruments and analytical hardware tools globally to support and empower cutting-edge research, infrastructure deployment, and industrial development lines.",
    icon: Activity,
    gradient: "from-[#C47B36]/15 to-[#0F172A]/90"
  },
  {
    id: 8,
    title: "Web Development & Digital Solutions",
    description:
      "Building specialized digital architectures, secure research databases, and responsive data-visualization dashboards tailored custom-made to elevate the presence of scientific institutions, corporate firms, and analytical laboratories.",
    icon: Code2,
    gradient: "from-[#0F172A]/95 to-[#C47B36]/10"
  }
];


export default function ServicesPage() {
   return (
     <section className="bg-white py-[120px] md:py-[150px] select-none">
       <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
         
         {/* ==================== SECTION HEADER (الهيدر المطابق للصورة بالملي) ==================== */}
         <div className="flex flex-col items-center text-center mb-[60px] md:mb-[80px] relative">
           
           {/* النص المائي الضخم المفرغ بالخلفية "Our Services" */}
           <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[56px] sm:text-[90px] md:text-[130px] font-black tracking-tight select-none pointer-events-none text-transparent [text-shadow:1px_0_0_#ECECEC,-1px_0_0_#ECECEC,0_1px_0_0_#ECECEC,0_-1px_0_0_#ECECEC] whitespace-nowrap opacity-70">
             Our Services
           </span>

           {/* العنوان الرئيسي الظاهر فوق النص المائي */}
           <h2 className="relative z-10 text-[36px] sm:text-[44px] md:text-[54px] font-black text-[#0F1B2D] tracking-[-0.03em] leading-tight">
             Services We Provide
           </h2>

           {/* الوصف النصي أسفل العنوان تماماً كما في الصورة */}
           <p className="relative z-10 mt-5 text-[14px] md:text-[16px] leading-relaxed text-[#5E6472] max-w-2xl font-medium">
             With a team of experienced professionals and a passion for innovation, we combine cutting-edge strategies
           </p>

         </div>
         {/* ================================================================== */}
 
         {/* LIST OF STICKY STACKING SERVICES */}
         <div className="relative">
           {services.map((service) => {
             const Icon = service.icon;
 
             return (
               <div
                 key={service.id}
                 className="
                   sticky
                   top-[40px]
                   md:top-[120px]
                   mb-[25px]
                   md:mb-[35px]
                   group
                   relative
                   overflow-hidden
                   min-h-[156px]
                   bg-[#F5F5F5]
                   flex
                   flex-col
                   lg:grid
                   lg:grid-cols-[380px_1fr_90px]
                   items-start
                   lg:items-center
                   p-6
                   sm:p-8
                   md:px-[48px]
                   md:py-8
                   transition-all
                   duration-500
                   hover:-translate-y-[3px]
                   hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                   cursor-pointer
                   gap-6
                   lg:gap-0
                 "
                 style={{
                   zIndex: service.id,
                 }}
               >
                 {/* Premium Plasma Gradient Mesh (تأثير أطياف البلازما المتوهجة عند الـ Hover) */}
                 <div
                   className={`
                     absolute
                     inset-0
                     bg-gradient-to-br
                     ${service.gradient}
                     opacity-0
                     scale-105
                     transition-all
                     duration-700
                     group-hover:opacity-100
                     group-hover:scale-100
                     pointer-events-none
                   `}
                 />
 
                 {/* Left Side: Icon & Title */}
                 <div className="relative z-10 flex items-center gap-[20px] md:gap-[28px] w-full lg:w-auto">
                   <Icon
                     className="
                       w-[44px]
                       h-[44px]
                       md:w-[50px]
                       md:h-[50px]
                       stroke-[1.25]
                       text-[#0F1B2D]
                       transition-all
                       duration-500
                       group-hover:text-white
                       group-hover:scale-110
                       shrink-0
                     "
                   />
 
                   <h3
                     className="
                       text-[18px]
                       md:text-[20px]
                       font-bold
                       tracking-tight
                       text-[#0F1B2D]
                       transition-colors
                       duration-500
                       group-hover:text-white
                       leading-tight
                     "
                   >
                     {service.title}
                   </h3>
                 </div>
 
                 {/* Description */}
                 <div className="relative z-10 lg:pr-[50px] w-full text-left">
                   <p
                     className="
                       text-[13px]
                       md:text-[14px]
                       leading-[26px]
                       md:leading-[30px]
                       text-[#5E6472]
                       font-medium
                       transition-colors
                       duration-500
                       group-hover:text-white/80
                     "
                   >
                     {service.description}
                   </p>
                 </div>
 
                 {/* Arrow Button */}
                 <div className="relative z-10 flex lg:justify-end w-full lg:w-auto justify-end">
                   <div
                     className="
                       w-[52px]
                       h-[52px]
                       md:w-[60px]
                       md:h-[60px]
                       bg-[#101C2C]
                       flex
                       items-center
                       justify-center
                       transition-all
                       duration-500
                       group-hover:bg-white
                     "
                   >
                     <ArrowRight
                       size={18}
                       strokeWidth={2}
                       className="
                         text-white
                         transition-all
                         duration-500
                         group-hover:text-[#101C2C]
                         group-hover:translate-x-1
                       "
                     />
                   </div>
                 </div>
               </div>
             );
           })}
         </div>
       </div>
     </section>
   );
}
