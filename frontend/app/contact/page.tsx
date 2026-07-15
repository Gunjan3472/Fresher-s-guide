"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Nunito } from "next/font/google";

// Initialize the custom font (you can change 'Nunito' to 'Poppins' or 'Quicksand' if you prefer)
const customFont = Nunito({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700", "900"] 
});

export default function CollegeProcessExplainer() {
  return (
    /* Applied the custom font to the main wrapper here */
    <div className={`min-h-screen bg-[#EDEDED] pb-20 ${customFont.className}`}>
      
      {/* TOP HERO SECTION */}
      <div className="bg-[#E0E0E0] w-full pt-20 pb-12 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-lg md:ml-12">
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight">
            College Process <br /> Explainer
          </h1>
          <p className="text-xl text-zinc-800 font-medium leading-relaxed max-w-sm">
            Step-by-Step guidance for every confusing college process-
            explained simply.
          </p>
        </div>
        
        {/* HERO CHARACTER IMAGE */}
        <div className="relative w-64 h-80 mt-10 md:mt-0 md:mr-24">
          <Image
            src="/download 1.png" /* Replace with your actual character image path */
            alt="Character Waving"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* BOTTOM SECTION: BUTTON GRID */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 mt-12">
        <h2 className="text-2xl font-black text-black mb-8">
          Select a Process to View details:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* ========================================== */}
          {/* BUTTON 1: College Life and Campus          */}
          {/* ========================================== */}
          <Link href="/contact/life">
            <button className="bg-white border-[1.5px] border-zinc-400 rounded-xl p-5 flex flex-row items-center justify-between text-left hover:shadow-lg transition-all duration-300 group w-full">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-black text-black mb-1 leading-tight">
                College life and <br /> Campus
              </h3>
              <p className="text-sm font-bold text-black leading-snug">
                Navigating <br /> social campus <br /> culture.
              </p>
            </div>
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/degree.png" /* Replace with your actual scroll icon path */
                alt="Scroll Icon"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </button>
          </Link>

          {/* ========================================== */}
          {/* BUTTON 2: Academic                         */}
          {/* ========================================== */}
          <Link href="/contact/acad">
            <button className="bg-white border-[1.5px] border-zinc-400 rounded-xl p-5 flex flex-row items-center justify-between text-left hover:shadow-lg transition-all duration-300 group w-full">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-black text-black mb-3 leading-tight">
                Academic
              </h3>
              <p className="text-sm font-bold text-black leading-snug">
                Mastering your <br /> course study
              </p>
            </div>
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/acad.png" /* Replace with your actual academic clipboard path */
                alt="Academic Clipboard Icon"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            </button>
          </Link>

          {/* ========================================== */}
          {/* BUTTON 3: Time Management                  */}
          {/* ========================================== */}
          <Link href="/contact/time">
            <button className="bg-white border-[1.5px] border-zinc-400 rounded-xl p-5 flex flex-row items-center justify-between text-left hover:shadow-lg transition-all duration-300 group w-full">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-black text-black mb-3 leading-tight">
                Time <br /> Management
              </h3>
              <p className="text-sm font-bold text-black leading-snug">
                Balancing life and <br /> tasks.
              </p>
            </div>
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/time.png" /* Replace with your actual time management icon path */
                alt="Time Management Icon"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            </button>
          </Link>

          {/* ========================================== */}
          {/* BUTTON 4: Career / Future                  */}
          {/* ========================================== */}
          <Link href="/contact/career">
            <button className="bg-white border-[1.5px] border-zinc-400 rounded-xl p-5 flex flex-row items-center justify-between text-left hover:shadow-lg transition-all duration-300 group w-full">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-black text-black mb-3 leading-tight">
                Career / Future
              </h3>
              <p className="text-sm font-bold text-black leading-snug">
                Planning <br /> professional <br /> growth paths.
              </p>
            </div>
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/future.png" /* Replace with your actual career icon path */
                alt="Career Shield Icon"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            </button>
          </Link>

          {/* ========================================== */}
          {/* BUTTON 5: Tech/ Essentials                 */}
          {/* ========================================== */}
          <Link href="/contact/tech">
            <button className="bg-white border-[1.5px] border-zinc-400 rounded-xl p-5 flex flex-row items-center justify-between text-left hover:shadow-lg transition-all duration-300 group w-full">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-black text-black mb-3 leading-tight">
                Tech/ <br /> Essentials
              </h3>
              <p className="text-sm font-bold text-black leading-snug">
                Tech, tools, and <br /> hardware
              </p>
            </div>
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/tech.png" /* Replace with your actual tech box icon path */
                alt="tech"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            </button>
          </Link>

          {/* ========================================== */}
          {/* BUTTON 6: Logistics & Miscellaneous        */}
          {/* ========================================== */}
          <Link href="/contact/lm">
            <button className="bg-white border-[1.5px] border-zinc-400 rounded-xl p-5 flex flex-row items-center justify-between text-left hover:shadow-lg transition-all duration-300 group w-full">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-black text-black mb-3 leading-tight">
                Logistics & <br /> Miscellaneous
              </h3>
              <p className="text-sm font-bold text-black leading-snug">
                Daily campus life <br /> basics
              </p>
            </div>
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/lm.png" /* Replace with your actual logistics icon path */
                alt="Logistics Clipboard Icon"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}