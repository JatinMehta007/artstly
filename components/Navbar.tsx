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
        <h1 className="text-2xl font-bold text-white tracking-tight">Artistly</h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 text-sm font-medium text-white">
          <Link href="/">Home</Link>
          <Link href="/artists">Explore</Link>
          <Link href="/onboarding">Onboard</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="sm:hidden text-gray-700">
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
            className="sm:hidden overflow-hidden flex flex-col space-y-3 mt-3 text-sm font-medium text-gray-700"
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