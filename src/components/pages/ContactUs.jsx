import { useState } from 'react';
import teamImage from '../../assets/images/close-up.jpg';
import Footer from '../layout/Footer'; 

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' أو 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formPayload = new FormData();
    formPayload.append("access_key", "02a4e0d9-15b3-4198-a21f-e99215c572a4");
    formPayload.append("name", formData.fullName); // تحويل fullName إلى name للسيرفر
    formPayload.append("phone", formData.phone);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);
    formPayload.append("subject", `New Contact Form from ${formData.fullName}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload 
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ fullName: '', phone: '', email: '', message: '' });
      } else {
        console.error("Web3Forms Server Error:", result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Network Error Details:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <> 
      <section id="contact" className="bg-white py-40 px-6 lg:px-24 overflow-hidden select-none">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: FORM */}
          <div className="lg:col-span-7 relative w-full">
            <span className="absolute top-[-45px] left-0 text-[100px] font-black text-slate-100 opacity-70 tracking-tight z-0 leading-none select-none pointer-events-none">
              Hello
            </span>

            <div className="relative z-10">
              <span className="text-[12px] font-bold text-slate-400 tracking-[0.06em] block mb-2 uppercase">
                Make An Appointment
              </span>
              <h2 className="text-[36px] sm:text-[42px] font-extrabold text-plasman-dark tracking-tight leading-none mb-8">
                Request a free quote
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold rounded-xl transition-all duration-300">
                   Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm font-semibold rounded-xl transition-all duration-300">
                   Oops! Something went wrong. Please check your internet or key status.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-5 py-4 border border-slate-100 bg-slate-50/50 text-slate-800 text-[15px] rounded-xl focus:outline-none focus:border-plasman-purple focus:bg-white focus:ring-4 focus:ring-plasman-purple/5 transition duration-200"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Number"
                  className="w-full px-5 py-4 border border-slate-100 bg-slate-50/50 text-slate-800 text-[15px] rounded-xl focus:outline-none focus:border-plasman-purple focus:bg-white focus:ring-4 focus:ring-plasman-purple/5 transition duration-200"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-5 py-4 border border-slate-100 bg-slate-50/50 text-slate-800 text-[15px] rounded-xl focus:outline-none focus:border-plasman-purple focus:bg-white focus:ring-4 focus:ring-plasman-purple/5 transition duration-200"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="w-full">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type Your Message"
                  rows="5"
                  className="w-full px-5 py-4 border border-slate-100 bg-slate-50/50 text-slate-800 text-[15px] rounded-xl focus:outline-none focus:border-plasman-purple focus:bg-white focus:ring-4 focus:ring-plasman-purple/5 transition duration-200 resize-none"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-plasman-dark hover:bg-plasman-deep text-white font-bold text-[14px] px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.98] tracking-wide cursor-pointer shadow-sm flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-slate-100">
              <img 
                src={teamImage} 
                alt="Plasma Solutions Customer Consultation" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer /> 
    </> 
  );
}
