import { Award, Headphones } from "lucide-react";
import consultancyImage from "../../assets/images/close-up.jpg";

export default function ConsultancySection() {
  return (
    <section className="bg-white py-20 px-6 lg:px-24 overflow-visible">
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

      <div className="relative w-full max-w-[540px]">

  {/* Shadow */}
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

        {/* CONTENT */}
        <div>
          <span className="inline-block border border-gray-200 px-6 py-3 uppercase text-[13px] font-semibold tracking-[2px] text-violet-600">
            Business Consultancy
          </span>

          <h2 className="mt-6 text-[42px] leading-[1.1] font-extrabold uppercase text-slate-900">
            Why We're The <br />
            Perfect Fit For You
          </h2>

          <div className="mt-12 space-y-10">

            <div className="flex gap-5">
              <div className="w-16 h-16 rounded-full border flex items-center justify-center">
                <Award size={28} />
              </div>

              <div>
                <h3 className="text-[22px] font-bold text-slate-900">
                  Best Business Consulting
                </h3>

                <p className="mt-2 text-gray-500 leading-8">
                  We specialize in helping businesses unlock their full
                  potential through expert guidance and consulting solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-16 h-16 rounded-full border flex items-center justify-center">
                <Headphones size={28} />
              </div>

              <div>
                <h3 className="text-[22px] font-bold text-slate-900">
                  24/7 Customer Support
                </h3>

                <p className="mt-2 text-gray-500 leading-8">
                  Our support team is available around the clock to assist you
                  with any questions or issues.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}