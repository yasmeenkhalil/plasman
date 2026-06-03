import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Business Solution",
      description: "Once planning is complete, site preparation begins.",
      icon: (
        <svg className="w-[28px] h-[28px] text-plasman-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Strategy Growth",
      description: "Strategy growth focuses on developing executing.",
      icon: (
        <svg className="w-[28px] h-[28px] text-plasman-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a3 3 0 110-6 3 3 0 010 6zm0 0v5.25m0 0a3 3 0 100 6 3 3 0 000-6zm0 0V6m0 0a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Finance Solution",
      description: "Finance solutions are strategic services and tools.",
      icon: (
        <svg className="w-[28px] h-[28px] text-plasman-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Market Research",
      description: "Business marketing research is the process of gathering.",
      icon: (
        <svg className="w-[28px] h-[28px] text-plasman-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-3-3.75V18M9.75 14.25V18M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.625 21h12.75c.621 0 1.125-.504 1.125-1.125m-18 0v-1.5c0-.621.504-1.125 1.125-1.125h16.5c.621 0 1.125.504 1.125 1.125v1.5m-18 0h18" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white pt-[100px] pb-[100px] overflow-hidden select-none">
      <div className="relative max-w-[1240px] mx-auto px-4 text-center mb-[60px] flex flex-col items-center">
        <span className="absolute top-[-50px] left-1/2 -translate-x-1/2 text-[150px] font-black text-plasman-gray opacity-40 tracking-tight z-0 leading-none">
          01
        </span>
        <span className="relative z-10 text-[14px] font-medium text-slate-400 tracking-[0.05em] block mb-2">
          Our Latest Services
        </span>
        <h2 className="relative z-10 text-[40px] font-bold text-plasman-dark tracking-tight">
          Service We Provide
        </h2>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px]">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} index={index} {...service} />
        ))}
      </div>
    </section>
  );
}
