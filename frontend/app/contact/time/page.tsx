"use client";
import React, { useState } from "react";

// 1. Add your questions and answers here!
const faqData = [
  {
    question: "How many hours should I study daily?",
    answer: "Focus on quality over quantity. 2-3 hours of deep, focused study is better than 6 hours of distracted work."
  },
  {
    question: "How do I stop procrastinating?",
    answer: "Use the 5-minute rule: commit to doing a task for just 5 minutes. Often, that’s enough to overcome the initial resistance."
  },
  {
    question: "What is the best time-management app?",
    answer: "Any tool that works for you—Google Calendar for scheduling, Notion for notes, or even a simple physical planner."
  },
  {
    question: "Should I join multiple clubs?",
    answer: "Start with one or two. You need time to adjust to your academic workload first."
  },
  {
    question: "How do I manage a sleep schedule?",
    answer: "Aim for 7-8 hours. Sleep is when your brain processes the information you learned during the day."
  },
  {
    question: "How do I prioritize assignments?",
    answer: "Use the Eisenhower Matrix: categorize tasks by urgency and importance. Do the urgent/important ones first."
  },
  {
    question: "Is it okay to take breaks?",
    answer: "Essential! Use the Pomodoro technique—25 minutes of work followed by a 5-minute break."
  },
  {
    question: "How do I manage stress?",
    answer: "Identify what triggers it. Use exercise, talk to friends, and ensure you aren't overloading your schedule."
  },
  {
    question: "What should I do on weekends?",
    answer: "Use them to catch up on studies, work on personal projects, and rest. Don't spend the entire weekend working, though."
  },
  {
    question: "Is it easy to get distracted?",
    answer: "Yes, especially with your phone. Keep it in another room while you study."
  },
  {
    question: "How do I create a study plan?",
    answer: "Map out your exam dates and work backward. Break subjects into smaller, manageable chunks."
  },
  {
    question: "How do I manage my money/allowance?",
    answer: "Keep a simple tracker app. Avoid eating out for every meal—learning to manage your daily budget is a crucial life skill."
  },
  {
    question: "What is a healthy college diet?",
    answer: "Try to include fruits and vegetables. Avoid excessive junk food, as it will drain your energy levels during the day."
  },
  {
    question: "How do I keep my room organized?",
    answer: "Declutter once a week. If everything has a place, it’s much easier to keep clean."
  },
  {
    question: "How do I handle group conflicts?",
    answer: "Address issues immediately and professionally. Focus on finding a solution that moves the project forward."
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