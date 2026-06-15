import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted Data:', formData);
  };

  return (
    <section id="contact" className="bg-white pt-40 pb-16 px-4 md:pt-40 md:pb-24 scroll-mt-16">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-10">
        
        {/* Left Column: Contact Form Block */}
        <div className="flex-1 w-full max-w-xl">
          <span className="text-orange-600 font-semibold text-xs tracking-wider uppercase block mb-1">
            Hello Make An Appointment
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Request a free quote
          </h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
           Fill out the form below to receive a free custom pricing proposal for your business.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-none bg-slate-50 text-gray-800 text-sm focus:outline-none focus:border-orange-600 focus:bg-white focus:ring-4 focus:ring-orange-600/10 transition"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-200 rounded-none bg-slate-50 text-gray-800 text-sm focus:outline-none focus:border-orange-600 focus:bg-white focus:ring-4 focus:ring-orange-600/10 transition"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-200 rounded-none bg-slate-50 text-gray-800 text-sm focus:outline-none focus:border-orange-600 focus:bg-white focus:ring-4 focus:ring-orange-600/10 transition"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-200 rounded-none bg-slate-50 text-gray-800 text-sm focus:outline-none focus:border-orange-600 focus:bg-white focus:ring-4 focus:ring-orange-600/10 transition"
              />
            </div>
            
            <div className="w-full">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-200 rounded-none bg-slate-50 text-gray-800 text-sm focus:outline-none focus:border-orange-600 focus:bg-white focus:ring-4 focus:ring-orange-600/10 transition resize-none"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-black  hover:bg-[#2E255B]  text-white font-semibold px-8 py-3 rounded-none text-sm shadow-sm hover:shadow transition-colors duration-300 w-full md:w-auto"
            >
              Get a Quote
            </button>
          </form>
        </div>

        {/* Right Column: Contact Info Card (Fixed Padding and Tight spacing) */}
        <div className="w-full lg:w-[400px] pt-5">
          {/* space-y-6 forces elements to be close to each other, exactly like normal list items */}
          <div className="bg-white border border-slate-100 p-6 rounded-none shadow-xl shadow-slate-100/50 flex flex-col space-y-6">
            
            {/* Phone Item */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-none bg-orange-50 flex items-center justify-center text-base text-orange-600 shrink-0 border border-orange-100">
                📞
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Call Us 24/7</span>
                <strong className="text-gray-900 font-bold text-sm leading-tight">029-879-5541</strong>
              </div>
            </div>

            {/* Email Item */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-none bg-orange-50 flex items-center justify-center text-base text-orange-600 shrink-0 border border-orange-100">
                📍
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Address</span>
                <strong className="text-gray-900 font-bold text-sm leading-tight">〒305-0035 茨城県つくば市松代1丁目−18−4 学園第一ビル101
                    〒305-0035 Ibaraki, Tsukuba, Matsushiro, 1 Chome−18−4 Gakuen Daiichi
                    Building 101</strong>
              </div>
            </div>

            {/* Location Item */}
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-none bg-orange-50 flex items-center justify-center shrink-0 border border-indigo-100">
                    <svg 
                    xmlns="http://w3.org" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 text-[#2E255B]"
                    >
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.963L2 22l5.233-1.372a9.948 9.948 0 0 0 4.777 1.217h.005c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.04-5.178-2.928-7.064A9.923 9.923 0 0 0 12.012 2zm5.827 14.126c-.32.9-1.877 1.631-2.585 1.708-.636.07-1.464.088-2.34-.194a11.13 11.13 0 0 1-5.076-3.18 10.155 10.155 0 0 1-2.227-3.834c-.456-1.545-.04-2.628.384-3.11.317-.36.726-.454.97-.454.244 0 .438.004.614.012.19.01.442-.075.694.53.256.617.884 2.15.96 2.307.076.155.127.337.025.542-.1.205-.152.334-.305.513-.153.177-.32.395-.457.53-.153.15-.314.313-.135.62a8.03 8.03 0 0 0 2.052 2.115 6.7 6.7 0 0 0 2.766 1.34c.337.064.537.012.723-.19.186-.204.814-.945.918-1.25.105-.308.209-.256.362-.2.154.058.97.457 1.134.54.164.081.274.123.315.193.04.07.04.41-.12.91z"/>
                    </svg>
                    </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Our Location</span>
                <strong className="text-gray-900 font-bold text-sm leading-tight">XYZ Hilton Street, 125 Town United State</strong>
              </div>
            </div>

            {/* Working Hours Item */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-none bg-orange-50 flex items-center justify-center text-base text-orange-600 shrink-0 border border-orange-100">
                🕒
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Working Hours</span>
                <strong className="text-gray-900 font-bold text-sm leading-tight">Working: 8.00am - 5.00pm</strong>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
