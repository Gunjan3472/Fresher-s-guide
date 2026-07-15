"use client";
import React, { useState } from "react";

// 1. Add your questions and answers here!
const faqData = [
  {
    question: "When should I start building my resume?",
    answer: "Start in your first year. Keep a running document of every project, skill, and event you participate in."
  },
  {
    question: "What is LinkedIn, and do I need it?",
    answer: "Yes. It’s where you build your professional identity and network. Connect with alumni and people in your field."
  },
  {
    question: "Is competitive programming essential?",
    answer: "If you are in a tech branch, it’s excellent for building problem-solving skills, but ensure you also build real-world projects."
  },
  {
    question: "Should I learn multiple languages?",
    answer: "Start with one and master it (e.g., C++ or Python). Once you know one well, learning others becomes much faster."
  },
  {
    question: "How do I choose a career path?",
    answer: "Explore different fields through electives and internships. You don't have to decide everything in the first year."
  },
  {
    question: "What is an 'extracurricular'?",
    answer: "Anything outside of academics—clubs, sports, volunteering. These show recruiters you are a well-rounded person."
  },
  {
    question: "How do I find mentors?",
    answer: "Look for seniors or alumni whose career path you admire. Send them a polite, specific message asking for advice."
  },
  {
    question: "Should I do hackathons?",
    answer: "Absolutely. They are the best way to apply your skills in a high-pressure, collaborative environment."
  },
  {
    question: "How do I prepare for job interviews?",
    answer: "Practice technical concepts, improve your communication, and do mock interviews with friends."
  },
  {
    question: "Is it too early to think about placements?",
    answer: "It’s never too early to build your skills, but don't stress about placements until your pre-final year."
  },
  {
    question: "How do I improve my communication skills?",
    answer: "Read widely, watch debates, and practice speaking in front of a mirror or with friends."
  },
  {
    question: "Is public speaking important?",
    answer: "Yes. Whether it’s presenting a project or speaking in an interview, the ability to clearly articulate your ideas is vital."
  },
  {
    question: "How do I build confidence?",
    answer: "Confidence comes from competence. The more you practice and learn, the more confident you will feel."
  },
  {
    question: "What is 'networking'?",
    answer: "Building authentic relationships. It’s not about using people; it’s about sharing ideas and supporting each other."
  },
  {
    question: "How do I handle peer pressure?",
    answer: "Stay firm in your values. You don't have to do what everyone else is doing to be accepted."
  }
];
export default function FAQAccordion() {
  // State to track which accordion is open. Set to null so they all start closed.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // If clicking the already open one, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // The background color here (#EFEFEF) must match the 'ring' color on the number badge for the cutout illusion to work!
    <div className="min-h-screen bg-[#EFEFEF] py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-4xl font-black text-center mb-16 text-zinc-800">
          Freshers&apos; FAQ
        </h2>

        <div className="space-y-6 pl-8">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            // Format number to always be two digits (01, 02, etc.)
            const displayNum = (index + 1).toString().padStart(2, "0");

            return (
              <div
                key={index}
                className="relative bg-white rounded-[24px] shadow-sm transition-all duration-300"
              >
                {/* 
                  THE NUMBER BADGE
                  The ring-[#EFEFEF] creates the "gap" or "cutout" illusion by matching the page background.
                */}
                <div className="absolute -left-8 top-5 w-16 h-16 bg-[#5D509E] rounded-full flex items-center justify-center text-white font-bold text-xl ring-[12px] ring-[#EFEFEF] z-10">
                  {displayNum}
                </div>

                {/* HEADER / CLICKABLE AREA */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-8 pr-8 pl-16 cursor-pointer outline-none"
                >
                  <h3 className="text-lg md:text-xl font-bold text-zinc-800 text-left pr-4">
                    {faq.question}
                  </h3>

                  {/* CHEVRON ICON */}
                  <div
                    className={`transform transition-transform duration-300 text-zinc-400 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>

                {/* ANSWER SECTION */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <p className="pl-16 pr-12 text-zinc-500 leading-relaxed font-medium text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}