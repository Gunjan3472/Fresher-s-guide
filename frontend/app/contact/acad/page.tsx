"use client";
import React, { useState } from "react";

// 1. Add your questions and answers here!
const faqData = [
  {
    question: "How different is college teaching from school?",
    answer: "In school, teachers guide you through every step. In college, you are expected to be a self-learner. Professors provide the structure, but your depth of knowledge depends on how much you research outside the classroom."
  },
  {
    question: "What is a credit system?",
    answer: "Credits measure the weight of a subject. A 4-credit course requires more time and carries more importance for your GPA than a 2-credit elective."
  },
  {
    question: "How do I maintain a high GPA?",
    answer: "Consistency is key. Focus on understanding concepts rather than memorizing, and stay on top of assignments throughout the semester instead of cramming before exams."
  },
  {
    question: "Are attendance policies strict?",
    answer: "Yes, most colleges require a minimum percentage (usually 75%) to sit for exams. Don't risk your eligibility; show up for your classes."
  },
  {
    question: "How do I handle backlogs if I fail a subject?",
    answer: "Don't panic. It happens to the best of us. Talk to your professor immediately to understand where you went wrong, and look for past question papers to prepare for the re-exam."
  },
  {
    question: "Is it mandatory to buy all textbooks?",
    answer: "Usually, no. Check with seniors first. Many subjects can be mastered using library books, online PDFs, or course lecture notes provided by professors."
  },
  {
    question: "How do I find the syllabus?",
    answer: "It is usually available on the official college website or the departmental notice board. If not, ask your subject professor during the first week."
  },
  {
    question: "Are lab journals graded strictly?",
    answer: "Yes, they often carry significant weight in your internal assessment. Keep your records neat, complete, and submit them on time."
  },
  {
    question: "Can I change my branch later?",
    answer: "It depends on college policy, but it usually requires an exceptionally high GPA in the first year and the availability of vacant seats in the desired branch."
  },
  {
    question: "What is a minor degree?",
    answer: "It is an additional area of study outside your major (e.g., a CS student taking a minor in Data Science). It adds value to your degree and broadens your skill set."
  },
  {
    question: "How do exams work in college?",
    answer: "There are usually internal assessments throughout the semester and a final end-semester exam. They test your ability to apply concepts to new problems."
  },
  {
    question: "What are internal assessments?",
    answer: "These include quizzes, assignments, projects, and mid-semester exams that contribute to your final course grade. Never skip these!"
  },
  {
    question: "Is it hard to balance projects and exams?",
    answer: "It can be, but it’s manageable with a planner. Start your projects early so you aren't rushing while preparing for finals."
  },
  {
    question: "How do I approach my professors?",
    answer: "Be professional, concise, and respectful. Use their office hours to ask meaningful questions about the coursework."
  },
  {
    question: "What are the best resources for coding/learning?",
    answer: "Platforms like LeetCode, CodeChef, and GeeksforGeeks are gold standards. For theory, follow official documentation or high-quality video courses."
  },
  {
    question: "Should I start learning my core subjects early?",
    answer: "Yes. A basic understanding of your branch's core subjects will make your first-semester lectures much easier to follow."
  },
  {
    question: "How do I find study groups?",
    answer: "Look for peers who are as serious as you are. Keep it small (3-4 people) to ensure the group stays productive rather than social."
  },
  {
    question: "Are group projects common?",
    answer: "Yes. They are meant to teach you collaboration. Choose your partners wisely and divide tasks clearly from the start."
  },
  {
    question: "How do I get an internship in the first year?",
    answer: "Focus on learning skills first. Most first-year internships are project-based or research-based. Build a strong portfolio on GitHub."
  },
  {
    question: "What is a 'CGPA' vs 'SGPA'?",
    answer: "SGPA is your performance in a single semester; CGPA is your cumulative average across all semesters so far."
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