"use client";
import React, { useState } from "react";

// 1. Add your questions and answers here!
const faqData = [
  {
    question: "How do I make new friends?",
    answer: "Just introduce yourself! Everyone is just as anxious as you are. Participating in events or joining a club is the easiest way to find like-minded people."
  },
  {
    question: "Are seniors scary?",
    answer: "Some might seem intimidating, but most are happy to help if you ask questions politely. They have already gone through what you are about to face."
  },
  {
    question: "How do I join student societies?",
    answer: "Watch for recruitment drives during the first month. Choose societies that align with your interests, whether it's dance, debate, or coding."
  },
  {
    question: "What is a 'fresher's party'?",
    answer: "A welcome event for new students to socialize, meet seniors, and get a feel for the college's culture."
  },
  {
    question: "How do I balance social life and studies?",
    answer: "Use a calendar. Schedule your study time, but also make sure you carve out time for your friends. Balance is a learned skill."
  },
  {
    question: "What is the dress code?",
    answer: "Check your college handbook. Most colleges are casual, but labs often require closed-toed shoes and specific safety gear."
  },
  {
    question: "How safe is the campus at night?",
    answer: "Stick to well-lit areas and stay with friends. If you have late labs, walk back with a group."
  },
  {
    question: "Are there ragging-free policies?",
    answer: "Yes, most campuses have strict anti-ragging laws. If you ever feel uncomfortable, report it to the college anti-ragging cell or a trusted professor immediately."
  },
  {
    question: "How do I handle homesickness?",
    answer: "Stay busy, join clubs, and call home regularly. It gets easier as you build your own community on campus."
  },
  {
    question: "Where is the best place to eat on campus?",
    answer: "Ask your seniors—they will know which canteen has the best food and the most reasonable prices."
  },
  {
    question: "How do I navigate the library?",
    answer: "Visit it during orientation week. Learn the catalog system and ask the librarian for a quick tour."
  },
  {
    question: "What happens if I miss a lecture?",
    answer: "Ask a classmate for their notes. Do not make missing class a habit, as you might miss important announcements."
  },
  {
    question: "Are there sports facilities?",
    answer: "Most colleges have them. Check if there’s a gym, badminton court, or sports ground—it's a great way to relieve stress."
  },
  {
    question: "How do I sign up for events?",
    answer: "Follow your college's official social media pages and check notice boards regularly."
  },
  {
    question: "What is the orientation week for?",
    answer: "It’s to introduce you to the campus, academic expectations, and facilities. Don't skip it!"
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