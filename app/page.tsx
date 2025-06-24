// app/page.tsx
"use client";

import { Navbar } from "@/components/Navbar";
import { CategoryCard } from "@/components/CategoryCard";
import { HeroSection } from "@/components/HeroSection";
import { LampContainer } from "@/components/UI/lamp";
import { motion } from "motion/react";



export default function HomePage() { 
const categories = [
  { name: "Singers", image: "/images/singer.jpg" },
  { name: "Dancers", image: "/images/dance.jpg" },
  { name: "Speakers", image: "/images/speaker.jpg" },
  { name: "DJs", image: "/images/romin.jpg" },
];
  return (
    <main className="min-h-screen " >
      <Navbar />

      {/* Hero Section */}
        <HeroSection></HeroSection>

      {/* Category Cards */}
       <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,   
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
      <section className="px-6 md:py-10 py-[80%]">
        <h3 className="text-4xl  font-bold text-center mb-8 text-white">Artist Categories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 ">
          {categories.map((cat) => (
            <CategoryCard key={cat.name} name={cat.name} image={cat.image} />
          ))}
        </div>
      </section>
          </motion.h1></LampContainer>
    </main>
  );
}
