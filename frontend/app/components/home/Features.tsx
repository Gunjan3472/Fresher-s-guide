"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Features() {
  const [hasAppeared, setHasAppeared] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasAppeared(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-12 px-4 md:px-10 font-sans overflow-hidden"
    >
      {/* Container with soft lavender background matching the image */}
      <div
        className={`max-w-6xl mx-auto rounded-[40px] p-8 md:p-14 bg-[#EBE4FF] transition-all duration-1000 transform ${
          hasAppeared ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 px-2">
          <h2
            className="text-4xl md:text-5xl font-black text-black tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            What do you need?
          </h2>
          <div className="max-w-[400px] mt-4 md:mt-0 md:text-left">
            <p className="text-[14px] text-zinc-700 leading-relaxed font-medium">
              Stop juggling apps. Plan your semester from here. <br />
              Categories, smart tools, peer support, and guidance; everything in
              one place.
            </p>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8">
          
          {/* ======================================= */}
          {/* CARD 1: NOTEBOOK                        */}
          {/* ======================================= */}
          <div className="p-6 rounded-[30px] flex flex-col items-center justify-between text-center transition-transform duration-300 hover:scale-105 h-full min-h-[400px] bg-white text-black border-[1px] border-zinc-200 shadow-sm">
            
            {/* NOTEBOOK IMAGE CONTAINER - Adjust h-[340px] or scale-125 here specifically for this image */}
            <div className="relative w-full h-[340px] md:h-[340px] mb-4 mt-2">
              <Image
                src="/image 2.png"
                alt="Notebook"
                fill
                className="object-contain object-bottom scale-110 origin-bottom"
                priority
              />
            </div>

            <div className="flex flex-col items-center mt-auto w-full z-10">
              <h3 className="text-3xl font-bold mb-4">Notebook</h3>
              <button className="px-6 py-2.5 rounded-full font-bold text-sm bg-[#A5C0E3] text-[#1E3A8A] hover:bg-[#8CA8D1] transition-colors shadow-sm">
                Grab Yours
              </button>
            </div>
          </div>

          {/* ======================================= */}
          {/* CARD 2: CONFIDENCE (HIGHLIGHTED)        */}
          {/* ======================================= */}
          <div className="p-6 rounded-[30px] flex flex-col items-center justify-between text-center transition-transform duration-300 hover:scale-105 h-full min-h-[400px] bg-[#B488FF] text-black">
            
            {/* CONFIDENCE IMAGE CONTAINER - Adjust h-[340px] or scale-125 here specifically for this image */}
            <div className="relative w-full h-[280px] md:h-[340px] mb-4 mt-2">
              <Image
                src="/image 4.png"
                alt="Confidence"
                fill
                className="object-contain object-bottom scale-100 origin-bottom"
                priority
              />
            </div>

            <div className="flex flex-col items-center mt-auto w-full z-10">
              <h3 className="text-3xl font-bold mb-4">Confidence</h3>
              {/* No button for the middle card based on your reference */}
            </div>
          </div>

          {/* ======================================= */}
          {/* CARD 3: LAPTOP                          */}
          {/* ======================================= */}
          <div className="p-6 rounded-[30px] flex flex-col items-center justify-between text-center transition-transform duration-300 hover:scale-105 h-full min-h-[400px] bg-white text-black border-[1px] border-zinc-200 shadow-sm">
            
            {/* LAPTOP IMAGE CONTAINER - Adjust h-[340px] or scale-125 here specifically for this image */}
            <div className="relative w-full h-[340px] md:h-[340px] mb-2 mt-2">
              <Image
                src="/image 5.png"
                alt="Laptop"
                fill
                className="object-contain object-bottom scale-110 origin-bottom"
                priority
              />
            </div>

            <div className="flex flex-col items-center mt-auto w-full z-10">
              <h3 className="text-3xl font-bold mb-4">Laptop</h3>
              <button className="px-6 py-2.5 rounded-full font-bold text-sm bg-[#A5C0E3] text-[#1E3A8A] hover:bg-[#8CA8D1] transition-colors shadow-sm">
                Get Yours
              </button>
            </div>
          </div>

        </div>

        {/* SECTION FOOTER */}
        <div
          className={`mt-14 text-center space-y-2 transition-opacity duration-1000 delay-500 ${
            hasAppeared ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl text-black font-medium">
            Not sure which laptop will survive four years of assignments?
          </p>
          <p className="text-lg md:text-xl text-black font-medium">
            Try our Laptop Predictor to find your perfect match given below! ✨
          </p>
        </div>
      </div>
    </section>
  );
}