
// app/page.tsx
"use client";

import { useScroll, useTransform } from "motion/react";
import React from "react";
import { GoogleGeminiEffect } from "@/components/UI/effect";


export const HeroSection=()=>{
    const ref = React.useRef(null);
     const { scrollYProgress } = useScroll({
       target: ref,
       offset: ["start start", "end start"],
     });
    
     const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
     const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
     const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
     const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
     const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
    return (
        <>
         <section className="px-6  py-5 md:py-16 text-center bg-gradient-to-br from-indigo-100 via-white to-white">
                <div
              className="h-[400px] md:h-[800px] bg-black w-full  rounded-md  pt-10 md:pt-40 overflow-clip"
              ref={ref}
            >      
            <GoogleGeminiEffect
                pathLengths={[
                  pathLengthFirst,
                  pathLengthSecond,
                  pathLengthThird,
                  pathLengthFourth,
                  pathLengthFifth,
                ]}
              />
        
               
            </div>
              </section>
        </>
    )
}