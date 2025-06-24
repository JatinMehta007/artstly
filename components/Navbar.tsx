"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full px-6 py-4 border-b shadow-sm bg-black">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-light uppercase text-white tracking-widest">Artistly</h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-10 text-base font-medium text-white">
          <Link href="/" className="hover:text-neutral-300">Home</Link>
          <Link href="/artists" className="hover:text-neutral-300">Explore</Link>
          <Link href="/onboarding" className="hover:text-neutral-300">Onboard</Link>
          <Link href="/dashboard" className="hover:text-neutral-300">Dashboard</Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="sm:hidden text-gray-400">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden overflow-hidden  flex flex-col space-y-3 mt-3 text-sm font-medium text-gray-700"
          >
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/artists" onClick={() => setIsOpen(false)}>Explore</Link>
            <Link href="/onboarding" onClick={() => setIsOpen(false)}>Onboard</Link>
            <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};