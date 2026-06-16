import { Award, Microscope, Globe } from "lucide-react";
import consultancyImage from "../../assets/images/close-up.jpg";

export default function ConsultancySection() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20 overflow-visible select-none">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        <div className="lg:col-span-5 relative w-full max-w-[480px] lg:max-w-full mx-auto shrink-0">
          
          <svg
            viewBox="-20 -20 560 500"
            className="absolute top-4 left-4 w-full h-full"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M245.525 0.0448032C293.821 -1.95867 353.202 63.741 389.029 94.5007C424.855 125.261 467.029 142.501 484.529 181.72C503.747 224.791 457.529 292.501 435.455 344.001C412.834 381.21 411.985 394 377.453 423.365C345.512 443.291 285.289 425.67 245.525 428.511C205.762 431.352 191.269 435.737 145.816 428.511C113.443 423.365 68.1206 399.147 37.9057 351.954C7.69082 304.761 -17.023 231.684 15.0287 181.72C32.2944 154.805 48.4434 161.925 113.443 87.518C158.334 36.13 197.11 2.05324 245.525 0.0448032Z" fill="#1E2A36" fillOpacity="0.99"/>
          </svg>

          {/* Main Image */}
          <svg
            viewBox="-20 -20 560 500"
            className="relative z-10 w-full h-auto"
          >
            <defs>
              <clipPath id="consultancy-shape">
                <path fillRule="evenodd" clipRule="evenodd" d="M245.525 0.0448032C293.821 -1.95867 353.202 63.741 389.029 94.5007C424.855 125.261 467.029 142.501 484.529 181.72C503.747 224.791 457.529 292.501 435.455 344.001C412.834 381.21 411.985 394 377.453 423.365C345.512 443.291 285.289 425.67 245.525 428.511C205.762 431.352 191.269 435.737 145.816 428.511C113.443 423.365 68.1206 399.147 37.9057 351.954C7.69082 304.761 -17.023 231.684 15.0287 181.72C32.2944 154.805 48.4434 161.925 113.443 87.518C158.334 36.13 197.11 2.05324 245.525 0.0448032Z" fill="#C4C4C4" fillOpacity="0.99"/>
              </clipPath>
            </defs>

            <image
              href={consultancyImage}
              x="-20"
              y="-20"
              width="560"
              height="500"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#consultancy-shape)"
            />
          </svg>
        </div>

        <div className="lg:col-span-7">
          <span className="inline-block border border-gray-200 px-5 py-2.5 uppercase text-[12px] font-bold tracking-[2px] text-violet-600 rounded-sm">
            Why choose us
          </span>

          <h2 className="mt-5 text-[34px] sm:text-[40px] leading-[1.15] font-extrabold uppercase text-slate-900 tracking-tight">
            Why We're The <br className="hidden sm:inline" />
            Perfect Fit For You
          </h2>

          <div className="mt-10 space-y-8">

            {/* Feature 1 */}
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center shrink-0 bg-slate-50 text-slate-800 shadow-sm">
                <Microscope size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 leading-none">
                  Full R&D Lifecycle Support
                </h3>
                <p className="mt-2 text-gray-500 leading-relaxed text-[14.5px]">
                  We move plasma technologies from initial concept and feasibility studies 
                  to system prototyping, experimental validation, and commercial scale-up.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center shrink-0 bg-slate-50 text-slate-800 shadow-sm">
                <Globe size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 leading-none">
                  Global Academic Networks
                </h3>
                <p className="mt-2 text-gray-500 leading-relaxed text-[14.5px]">
                  Through flexible collaboration models, we bridge industry and academia, 
                  connecting worldwide enterprises with elite research laboratories in Japan.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center shrink-0 bg-slate-50 text-slate-800 shadow-sm">
                <Award size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 leading-none">
                  Bespoke Expert Guidance
                </h3>
                <p className="mt-2 text-gray-500 leading-relaxed text-[14.5px]">
                  We operate as your long-term technical partner, providing custom data 
                  analysis, literature reviews, engineer dispatch, and technical equipment trading.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
