import {
  ArrowRight,
  BriefcaseBusiness,
  BrainCircuit,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Business Solution",
    description:
      "We provide smart, scalable business solutions tailored to help companies streamline operations, boost productivity.",
    image: "https://unsplash.com",
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    title: "Strategy Growth",
    description:
      "We identify untapped markets and customer segments to drive business growth. By leveraging competitive analysis.",
    image: "https://unsplash.com",
    icon: BrainCircuit,
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Our marketing experts create data-driven campaigns that increase visibility and maximize conversions.",
    image: "https://unsplash.com",
    icon: BriefcaseBusiness,
  },
  {
    id: 4,
    title: "Project Management",
    description:
      "Efficient project planning and execution ensuring timely delivery and measurable business outcomes.",
    image: "https://unsplash.com",
    icon: BrainCircuit,
  },
  {
    id: 5,
    title: "Consulting Services",
    description:
      "Professional consulting solutions designed to optimize performance and accelerate growth.",
    image: "https://unsplash.com",
    icon: BriefcaseBusiness,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-[60px] md:py-[120px]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        
        {/* ==================== SECTION HEADER (العناوين) ==================== */}
        <div className="flex flex-col items-center text-center mb-[50px] md:mb-[70px]">
          {/* العنوان الصغير المؤطر المكتوب بـ الجاكارتا سانس */}
          <span className="inline-block border border-[#E2E8F0] text-[#5E6472] text-[13px] md:text-[14px] font-medium tracking-[0.05em] px-[22px] py-[10px] uppercase rounded-none bg-white mb-[18px]">
            Our Latest Services
          </span>
          {/* العنوان الرئيسي الكبير الفخم باللون الكحلي الداكن */}
          <h2 className="text-[34px] sm:text-[40px] md:text-[48px] font-bold text-[#0F1B2D] tracking-[-0.03em] leading-[1.2]">
            Service We Provide
          </h2>
        </div>
        {/* ================================================================== */}

        {/* LIST OF SERVICES */}
        <div className="relative">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="
                  mb-[25px]
                  md:mb-[35px]
                  group
                  relative
                  overflow-visible
                  bg-white
                  grid
                  grid-cols-1
                  lg:grid-cols-[300px_1fr_90px]
                  gap-8
                  lg:gap-12
                  items-center
                  p-6
                  sm:p-8
                  md:px-[48px]
                  md:py-8
                  transition-all
                  duration-500
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                  border
                  border-[#E2E8F0]
                  cursor-pointer
                "
                style={{
                  zIndex: service.id,
                }}
              >
                {/* Left Side: Blob Image */}
                <div className="hidden lg:flex flex-col items-center justify-center relative w-full max-w-[240px]">
                  {/* Dark Shape Background */}
                  <div
                    className="absolute w-full aspect-square bg-[#0F1B2D] rounded-full"
                    style={{
                      borderRadius: "30% 70% 70% 30% / 30% 34% 66% 70%",
                      transform: "translate(12px, 12px)",
                    }}
                  />
                  
                  {/* Main Image with Blob Shape */}
                  <div
                    className="absolute inset-0 bg-cover bg-center z-10 group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      borderRadius: "30% 70% 70% 30% / 50% 34% 66% 70%",
                    }}
                  />
                </div>

                {/* Left Side: Icon & Title */}
                <div className="relative z-10 flex lg:flex-col lg:items-start lg:gap-[16px] items-center gap-[20px] md:gap-[28px] w-full lg:w-auto">
                  <Icon
                    className="
                      w-[48px]
                      h-[48px]
                      md:w-[58px]
                      md:h-[58px]
                      stroke-[1.4]
                      text-[#0F1B2D]
                      transition-all
                      duration-500
                      group-hover:text-[#0F1B2D]
                      group-hover:scale-110
                      shrink-0
                    "
                  />

                  <h3
                    className="
                      text-[20px]
                      md:text-[22px]
                      font-semibold
                      tracking-[-0.02em]
                      text-[#0F1B2D]
                      transition-colors
                      duration-500
                      group-hover:text-[#0F1B2D]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description - Mobile only */}
                  <p
                    className="
                      lg:hidden
                      text-[15px]
                      md:text-[16px]
                      leading-[28px]
                      md:leading-[32px]
                      text-[#5E6472]
                      transition-colors
                      duration-500
                    "
                  >
                    {service.description}
                  </p>
                </div>

                {/* Middle: Description - Desktop only */}
                <div className="hidden lg:block relative z-10 lg:pr-[20px] w-full text-left">
                  <p
                    className="
                      text-[15px]
                      md:text-[16px]
                      leading-[28px]
                      md:leading-[32px]
                      text-[#5E6472]
                      transition-colors
                      duration-500
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
                      md:w-[64px]
                      md:h-[64px]
                      bg-[#101C2C]
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500
                      group-hover:bg-white
                      hover:shadow-lg
                    "
                  >
                    <ArrowRight
                      size={20}
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
