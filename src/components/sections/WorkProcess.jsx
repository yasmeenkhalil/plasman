import teamImage from '../../assets/images/close-up.jpg';

const WorkProcess = () => {
  const steps = [
    {
      id: '01',
      title: 'Concept & Feasibility',
      description: 'We evaluate initial concepts, conduct feasibility studies, and design specialized system architectures.',
      icon: (
        <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: '02',
      title: 'R&D & Validation',
      description: 'Moving to hands-on development, custom prototyping, precision measurements, and performance validation.',
      icon: (
        <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83m-3.75 3.75a3.75 3.75 0 11-5.303-5.304 3.75 3.75 0 015.303 5.304zm0 0l3.75-3.75M21 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      id: '03',
      title: 'Deployment & Scaling',
      description: 'Optimizing reactors and implementing scalable, practical plasma solutions built for viable commercial growth.',
      icon: (
        <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94M15 15h.008v.008H15V15zm0-3h.008v.008H15V12zm0-3h.008v.008H15V9zm-3 6h.008v.008H12V15zm0-3h.008v.008H12V12zm0-3h.008v.008H12V9zm-3 6h.008v.008H9V15zm0-3h.008v.008H9V12zm0-3h.008v.008H9V9z" />
        </svg>
      ),
    }
  ];

  return (
    <section className="bg-[#1f242d] text-white py-16 px-4 sm:px-6 md:px-12 font-sans select-none antialiased">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        <div className="lg:col-span-7 space-y-12">
          <div>
            <span className="text-[13px] font-medium text-slate-400 tracking-[0.08em] block mb-2 uppercase text-center lg:text-left">
              Our Development Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-white text-center lg:text-left mb-2">
              Easy 3 Steps To Work
            </h2>
          </div>

          <div className="space-y-12 md:space-y-8 mt-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col md:flex-row items-center md:items-center relative gap-6 md:gap-0">
                
                {/* 1. Icon Box */}
                <div className="bg-[#2d333f] w-[100px] h-[100px] rounded-sm flex items-center justify-center relative shrink-0 border border-gray-700/30">
                  {step.icon}
                  
                  {/* The Right Outward Notch */}
                  <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#2d333f] w-6 h-6 rounded-full items-center justify-center z-20">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* 2. Elongated Dashed Line */}
                <div className="hidden md:block absolute left-[100px] w-[115px] border-t-2 border-dashed border-gray-600/60 z-0"></div>

                {/* 3. Main Step Card */}
                <div className="bg-[#373e4a] py-6 px-6 sm:px-10 rounded-sm w-full md:flex-1 flex flex-col justify-center ml-0 md:ml-[115px] relative min-h-[145px] shadow-md border border-gray-700/20 text-center md:text-left">
                  
                  {/* 4. Left Semi-Circle Tag for ID */}
                  <div className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#373e4a] w-12 h-12 rounded-full items-center justify-center z-10">
                    <div className="bg-[#1f242d] text-white text-[14px] font-bold w-9 h-9 rounded-full flex items-center justify-center border border-gray-600">
                      {step.id}
                    </div>
                  </div>

                  {/* Mobile Fallback ID */}
                  <div className="md:hidden mx-auto bg-[#1f242d] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border border-gray-600 mb-2">
                    {step.id}
                  </div>
                  
                  {/* Text Contents */}
                  <div className="space-y-3 md:pl-4">
                    <h3 className="text-xl font-bold text-white tracking-wide">{step.title}</h3>
                    <p className="text-gray-300 text-[14px] leading-relaxed max-w-xl font-normal mx-auto md:mx-0">{step.description}</p>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Side Team Image */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end lg:mt-6 w-full">
          <div className="relative rounded-sm overflow-hidden shadow-xl max-w-full lg:max-w-md w-full">
            <img 
              src={teamImage} 
              alt="Plasma R&D Laboratory Team" 
              className="w-full h-auto object-cover min-h-[350px] md:min-h-[480px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkProcess;
