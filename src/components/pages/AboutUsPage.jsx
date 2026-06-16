"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, BookOpen, Target } from "lucide-react";
import AboutHero from '../sections/AboutHero';
import AboutDetails from '../sections/AboutDetails';
import TargetMarketSection from '../sections/TargetMarketSection';
import Footer from '../layout/Footer';

export default function AboutUsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB] pt-35  px-6 md:px-12 overflow-hidden">
       <AboutHero />
      <div className="mx-auto max-w-[1300px] pb-10">


        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 bg-[#0F172A] rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-[#C47B36]/5 blur-[80px] pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C47B36]/20 mb-4">
              <Target className="h-5 w-5 text-[#C47B36]" />
            </div>
            <span className="text-[10px] font-bold tracking-widest text-[#C47B36] uppercase block mb-1">Our Core Purpose</span>
            <h2 className="text-xl md:text-2xl font-bold italic text-slate-100 leading-relaxed">
              "To drive innovation by providing universities and businesses with expert consultation, cutting-edge research, and technical resources."
            </h2>
          </div>
        </motion.div>
        <section className="mb-10 grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-widest text-[#C47B36] uppercase">Core Capabilities</span>
            <h2 className="mt-2 text-2xl font-black text-[#0F172A] md:text-[36px] leading-tight">
              Who We Are & What We Do
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-slate-600">
                <ShieldCheck className="h-4 w-4 text-[#C47B36] shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Smart Scalable Solutions</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Users className="h-4 w-4 text-[#C47B36] shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Japan-Global Academic Network</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-8 md:p-10 shadow-sm space-y-6 text-sm text-slate-600 leading-relaxed">
            <p>
              We are a plasma technology R&D and consulting company that helps organizations develop, validate, and deploy plasma-based solutions. We work with industry, universities, and public institutions to move plasma technologies from concept to application.
            </p>
            <p>
              Our core value lies in accelerating innovation through smart solutions. We support the full development cycle, including feasibility studies, system and reactor development, experimental validation, performance optimization, and R&D implementation. Our solutions are designed to be practical, scalable, and commercially viable.
            </p>
            <p>
              A key differentiator is our ability to through flexible collaboration models, we help in establishing enable industry–academia collaboration, particularly by connecting global companies with leading research laboratories in Japan and vice versa.
            </p>
          </div>
        </section>
        <AboutDetails />

         <TargetMarketSection/>
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto items-stretch"
        >
          <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F172A] mb-5">
                <BookOpen className="h-5 w-5 text-[#C47B36]" />
              </div>
              <h3 className="text-xl font-black text-[#0F172A] mb-1">Message from the Head</h3>
              <span className="text-[10px] font-bold text-[#C47B36] tracking-wider uppercase block mb-4">Strategic Vision</span>
              
              <div className="text-xs leading-relaxed text-slate-500 space-y-4">
                <p>
                  At our company, we operate at the intersection of advanced plasma science, applied research, and strategic consulting. Our mission is to transform cutting-edge plasma research into practical, efficient, and scalable solutions that support innovation across industry, academia, and public institutions.
                </p>
                <p>
                  We place strong emphasis on industry–academia collaborative research, offering flexible collaboration models that align with project objectives and available funding schemes. By facilitating partnerships between universities and companies worldwide, we accelerate innovation and technology transfer.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F172A] mb-5">
                <Award className="h-5 w-5 text-[#C47B36]" />
              </div>
              <h3 className="text-xl font-black text-[#0F172A] mb-1">About the Head</h3>
              <span className="text-[11px] font-bold text-[#C47B36] tracking-wider uppercase block mb-4">Dr. Ayman — R&D Lead</span>
              
              <div className="text-xs leading-relaxed text-slate-500 space-y-4">
                <p>
                  Dr. Ayman leads the company’s research, consulting, and collaborative activities, bringing extensive experience in plasma technology, applied research, and international R&D coordination. With more than 24 years of experience, Dr. Ayman’s expertise spans plasma reactor development, sustainable conversion of waste and air into value-added chemicals, and advanced material synthesis.
                </p>
                <p>
                  Dr. Ayman contributed to and developed advanced research projects and establishing plasma laboratories and systems through his work in universities and research institutes in different countries including Japan, UK, and Egypt.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

      </div> 
      <Footer/>
    </main>
  );
}
