"use client";
import React, { useState } from "react";

// 1. Add your questions and answers here!
const faqData = [
  {
    question: "What should I pack for college?",
    answer: "Pack for a season at a time. Basics like stationery, comfortable clothes, and a small first-aid kit are essential."
  },
  {
    question: "How do I do laundry?",
    answer: "Learn how to sort colors and set the machine. It’s a basic survival skill."
  },
  {
    question: "How do I open a bank account?",
    answer: "Check if your college has a partner bank on campus. If not, go to any local branch with your ID and address proof."
  },
  {
    question: "How do I handle college IDs?",
    answer: "Keep them safe and accessible. You will need them to enter the campus, library, and labs."
  },
  {
    question: "Where do I get my medical checkups?",
    answer: "Most campuses have a health center. Know its location and contact details before you need it."
  },
  {
    question: "How do I register for courses?",
    answer: "Follow the departmental guidelines. Do it as soon as the window opens to ensure you get your preferred subjects."
  },
  {
    question: "Is there a dress code for labs?",
    answer: "Check your lab manual. Usually, it requires safety shoes and sometimes aprons to protect your clothing."
  },
  {
    question: "How do I report issues to the college admin?",
    answer: "Use the formal channels—student portals, emails, or student representatives."
  },
  {
    question: "How do I find part-time gigs?",
    answer: "Look for on-campus work-study programs or freelance opportunities related to your skills."
  },
  {
    question: "Where do I buy stationery/supplies?",
    answer: "Usually, there’s a shop on or near campus. Check with seniors for the best, most affordable ones."
  },
  {
    question: "How do I get an internet connection?",
    answer: "Use the college Wi-Fi. If you live off-campus, research local ISPs that offer reliable student plans."
  },
  {
    question: "What should I do in an emergency?",
    answer: "Know the contact numbers for local police, ambulance, and your college security office. Save them in your phone."
  },
  {
    question: "How do I find internships during breaks?",
    answer: "Start applying a month before the break begins. Check portals like LinkedIn and Internshala."
  },
  {
    question: "How do I update my contact details?",
    answer: "Update your student record immediately whenever your phone number or address changes."
  },
  {
    question: "How do I look back and say 'I had a great year'?",
    answer: "Balance your academics with hobbies and friendships. Be kind to yourself, stay curious, and say 'yes' to new experiences."
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