"use client";
import React, { useState } from "react";

// 1. Add your questions and answers here!
const faqData = [
  {
    question: "Which laptop is best for my branch?",
    answer: "Engineering students need good processors (i5/i7 or Ryzen 5/7) and at least 16GB of RAM. Design students should prioritize a high-color-accuracy display and a dedicated GPU."
  },
  {
    question: "Do I need an expensive laptop?",
    answer: "No. You need a capable one. Use our Price Predictor to find a machine that fits your budget and meets your curriculum requirements."
  },
  {
    question: "What software should I pre-install?",
    answer: "VS Code, a reliable PDF reader, a cloud storage client (Google Drive), and any branch-specific software (like MATLAB or AutoCAD) if needed."
  },
  {
    question: "How do I protect my data?",
    answer: "Use two-factor authentication (2FA) for all accounts and keep backups of your projects in at least two places (Cloud + External Drive)."
  },
  {
    question: "Is a tablet useful for notes?",
    answer: "Yes, if you prefer digital handwritten notes. It’s a great way to save paper and keep all your subjects organized in one device."
  },
  {
    question: "Should I use a Mac or Windows?",
    answer: "Windows is more versatile for engineering software. Mac is great for design and development but check if your branch-specific software runs on macOS first."
  },
  {
    question: "How much storage do I really need?",
    answer: "Get at least 512GB of SSD storage. You will accumulate a lot of project files and software packages over four years."
  },
  {
    question: "Is a mechanical keyboard worth it?",
    answer: "It’s a luxury, not a necessity. Only invest if you spend hours typing code daily and prefer the tactile feedback."
  },
  {
    question: "How do I organize my files?",
    answer: "Use a folder structure: Branch/Semester/Subject/Assignments. Name your files clearly with dates and versions."
  },
  {
    question: "What cloud storage is best?",
    answer: "Google Drive is most common because it integrates with college emails, but OneDrive is great if your college uses Microsoft 365."
  },
  {
    question: "Do I need a high-end mouse?",
    answer: "A comfortable, reliable optical mouse is sufficient. Ergonomics matter more than 'gaming' features."
  },
  {
    question: "What is the best way to back up my projects?",
    answer: "Use GitHub for code and Google Drive/OneDrive for documents and other files."
  },
  {
    question: "How often should I clean my laptop?",
    answer: "Physically? Once a month. Digitally? Once a semester—delete old temporary files and uninstall programs you no longer use."
  },
  {
    question: "Should I learn Linux?",
    answer: "Absolutely. Learning the command line and how Linux works will give you a significant advantage in almost any technical field."
  },
  {
    question: "What is a VPN, and do I need one?",
    answer: "It helps secure your connection on public networks. You might need one if your college restricts access to certain research databases or web resources."
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