"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white sticky top-0 z-50 border-b border-gray-100"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Payroll</span>
            <div className="relative w-32 h-10">
               <Image
                 src="/logo.png"
                 alt="Payroll Logo"
                 width={128}  // Providing explicit dimensions since 'fill' can be tricky in navbars without specific parent height
                 height={40}
                 className="object-contain object-left"
                 priority
               />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button (Placeholder for functionality) */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#features" className="text-sm font-semibold leading-6 text-gray-900 font-inter hover:text-[#42A5E8] transition-colors">
            Features
          </Link>
          <Link href="#product" className="text-sm font-semibold leading-6 text-gray-900 font-inter hover:text-[#42A5E8] transition-colors">
            Product
          </Link>
          <Link href="#pricing" className="text-sm font-semibold leading-6 text-gray-900 font-inter hover:text-[#42A5E8] transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-semibold leading-6 text-gray-900 font-inter hover:text-[#42A5E8] transition-colors">
            Contact Us
          </Link>
        </div>

      </nav>
    </motion.header>
  );
}
