"use client";

import Image from "next/image";
import { Home, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#EEF2FF] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[600px] grid-cols-1 items-center gap-12 lg:grid-cols-5 pt-10 lg:pt-0"> {/* Adjusted min-h and pt */}

          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left z-10 lg:col-span-3"
          >

            {/* Heading */}
            <h1 className="font-istok font-bold leading-tight text-gray-900
              text-4xl sm:text-5xl md:text-6xl lg:text-[80px]"> {/* Adjusted font size slightly */}
              Streamline Your{" "}
              <span className="text-[#42A5E8]">Payroll</span> Today
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl font-inter text-[#6D6D6D]
              text-base sm:text-lg lg:text-[20px] leading-relaxed">
              Automate salary calculations, generate payslips in one click,
              and manage employee records with our all-in-one payroll suite.
            </p>

            {/* Feature Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
            >

              {/* Button 1 */}
              <div className="flex items-center gap-3 rounded-lg
                border border-[#42A5E8]/20 bg-white px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
                <Home
                  className="h-5 w-5 text-[#42A5E8] fill-current"
                />
                <span className="font-inter text-[16px] lg:text-[20px] font-medium text-[#42A5E8]">
                  Multi-Company Support
                </span>
              </div>

              {/* Button 2 */}
              <div className="flex items-center gap-3 rounded-lg
                border border-[#42A5E8]/20 bg-white px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
                <Shield
                  className="h-5 w-5 text-[#42A5E8] fill-current"
                />
                <span className="font-inter text-[16px] lg:text-[20px] font-medium text-[#42A5E8]">
                  Data-Driven Insights
                </span>
              </div>

            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5 lg:h-full"
          >
            <Image
              src="/hero.png"
              alt="Payroll dashboard preview"
              width={1000}
              height={900}
              priority
              className="w-full max-w-lg lg:max-w-none lg:h-full object-contain object-bottom-right scale-110 lg:scale-100" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
