import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Research & Development",
      description: "Creating cutting-edge plasma reactors and processes from concept to implementation.",
      icon: (
        <svg className="w-[28px] h-[28px] text-plasman-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1a4.25 4.25 0 00-4.25 4.25v1.071m0-6.321a4.25 4.25 0 01-3.25 4.104V15a4.25 4.25 0 004.25 4.25h5m0-16.146v1a4.25 4.25 0 014.25 4.25v1.071m0-6.321a4.25 4.25 0 003.25 4.104V15a4.25 4.25 0 01-4.25 4.25h-5m2.25 0v3a.75.75 0 00.75.75h2.25a.75.75 0 00.75-.75v-3M3 13h18M5 17h14" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Tailored Research Services",
      description: "Bespoke research projects including prototyping, data analysis, and technical support.",
      icon: (
        <svg className="w-[28px] h-[28px] text-plasman-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83m-3.75 3.75a3.75 3.75 0 11-5.303-5.304 3.75 3.75 0 015.303 5.304zm0 0l3.75-3.75M21 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Industry-Academia Research",
      description: "Connecting worldwide businesses with elite, specialized laboratories in Japan.",
      icon: (
        <svg className="w-[28px] h-[28px] text-plasman-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Expert Consultation",
      description: "Experimental design, data analysis, literature reviews, and publication editing.",
      icon: (
        <svg className="w-[28px] h-[28px] text-plasman-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.255-3.383a1.122 1.122 0 01.865-.5c1.153-.086 2.294-.214 3.423-.379g1.584-2.233c.759-.115 1.24-.815 1.24-1.582V6.75c0-1.657-1.343-3-3-3H6.75c-1.657 0-3 1.343-3 3v6.483z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Talent Dispatch",
      description: "Supplying highly skilled researchers, engineers, and technicians for specialized projects.",
      icon: (
        <svg className="w-[28px] h-[28px] text-plasman-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Training & Education",
      description: "Tailored training programs, workshops, and advanced courses for corporate and academia.",
      icon: (
        <svg className="w-[28px] h-[28px] text-plasman-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a48.47 48.47 0 0115.482 0m-15.482 0L12 14.065l7.74-3.918M21 12a9 9 0 01-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Scientific Equipment Trading",
      description: "Importing and exporting state-of-the-art scientific and analytical instruments globally.",
      icon: (
        <svg className="w-[28px] h-[28px] text-plasman-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
    {
      id: 8,
      title: "Web Development",
      description: "Building responsive, modern digital architectures tailored to elevate technological presence.",
      icon: (
        <svg className="w-[28px] h-[28px] text-plasman-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white pt-[30px] pb-[90px] overflow-hidden select-none">
      <div className="relative max-w-[1240px] mx-auto px-4 text-center mb-[60px] flex flex-col items-center">
        <span className="absolute top-[-50px] left-1/2 -translate-x-1/2 text-[150px] font-black text-plasman-gray opacity-40 tracking-tight z-0 leading-none">
          01
        </span>
        <span className="relative z-10 text-[14px] font-medium text-slate-400 tracking-[0.05em] block mb-2">
          Our Key Activities
        </span>
        <h2 className="relative z-10 text-[40px] font-bold text-plasman-dark tracking-tight">
          Services We Provide
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
