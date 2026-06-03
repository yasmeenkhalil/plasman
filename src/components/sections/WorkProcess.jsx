import teamImage from '../../assets/images/close-up.jpg';

const WorkProcess = () => {
  const steps = [
    {
      id: '01',
      title: 'Client Discovery',
      description: 'Client Discovery is the foundation of every successful project.',
      icon: (
        <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.2-2.4 1.2.5-2.6-1.9-1.8 2.6-.4L12 2.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v0M8.5 2l.5.5M15.5 2l-.5.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 5.5l.8 1.6 1.8.3-1.3 1.2.3 1.8-1.6-.8-1.6.8.3-1.8-1.3-1.2 1.8-.3L6 5.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 5.5l.8 1.6 1.8.3-1.3 1.2.3 1.8-1.6-.8-1.6.8.3-1.8-1.3-1.2 1.8-.3L18 5.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.5a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 20.5a5 5 0 017.5-4.3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 14.5a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 16.2a5 5 0 017.5 4.3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 13a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 21a5.5 5.5 0 0111 0H6.5z" />
        </svg>
      ),
    },
    {
      id: '02',
      title: 'Research & Analysis',
      description: 'Research & Analysis phase, we dive deep into understanding your market.',
      icon: (
        <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 10v2m3-4v4m3-6v6" />
        </svg>
      ),
    },
    {
      id: '03',
      title: 'Strategy Development',
      description: 'Based on insights from the research phase, we craft a tailored strategy.',
      icon: (
        <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    }
  ];

  return (
    <section className="bg-[#1f242d] text-white py-16 px-4 sm:px-6 md:px-12 font-sans select-none antialiased">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        <div className="lg:col-span-7 space-y-12">
          <div>
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
                    <p className="text-gray-300 text-[14px] leading-relaxed max-w-xl font-normalmx-auto md:mx-0">{step.description}</p>
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
              alt="Team working" 
              className="w-full h-auto object-cover min-h-[350px] md:min-h-[480px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkProcess;
