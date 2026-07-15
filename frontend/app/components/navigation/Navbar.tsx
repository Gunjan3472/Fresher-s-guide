"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Palette,
  Calculator,
  CheckSquare,
  Folder,
  UserCheck,
  BookOpen,
  AlertCircle,
  Users,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const featureIcons: Record<string, typeof Calendar> = {
    Events: Calendar,
    Design: Palette,
    Calculator: Calculator,
    Tasks: CheckSquare,
    Projects: Folder,
    Mentorship: UserCheck,
    Resources: BookOpen,
    Support: AlertCircle,
    Community: Users,
    Feedback: MessageSquare,
  };

  const featureUrlMap: Record<string, string> = {
    Events: "/contact",
    Design: "/designmania_old",
    Calculator: "/tools/gpa-calculator",
    Tasks: "#",
    Projects: "#",
    Mentorship: "#",
    Resources: "#",
    Support: "/contact",
    Community: "#",
    Feedback: "/contact",
  };

  return (
    <nav className="w-full border-b border-zinc-200 bg-white px-4 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between font-medium text-zinc-900">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/LOGO.png"
            alt="NextSem Logo"
            width={70}
            height={70}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/">Home</Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/contact">Doubts and Tips</Link>
          </motion.div>
        </div>

        {/* Sign In */}
        <Link href="/Authentication/Login" className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-zinc-900 px-4 py-1.5 text-sm"
          >
            Welcome
          </motion.button>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center p-2 rounded hover:bg-zinc-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-2 space-y-2 border-t border-zinc-200 pt-2 overflow-hidden"
          >
            <Link href="/" className="block px-2 py-2 rounded hover:bg-zinc-100">
              Home
            </Link>

            <div>
              <button
                className="w-full flex justify-between items-center px-2 py-2 rounded hover:bg-zinc-100"
                onClick={() => setFeaturesOpen(!featuresOpen)}
              >
                Features {featuresOpen ? "▴" : "▾"}
              </button>

              {featuresOpen && (
                <div className="mt-2 ml-2 space-y-1">
                  {Object.keys(featureIcons).map((item) => {
                    const Icon = featureIcons[item];
                    const href = featureUrlMap[item] ?? "#";
                    return (
                      <Link
                        href={href}
                        key={item}
                        className="flex items-center gap-2 px-2 py-1 rounded hover:bg-zinc-100"
                      >
                        <Icon size={16} className="text-zinc-500" />
                        <span>{item}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/contact" className="block px-2 py-2 rounded hover:bg-zinc-100">
              Contact
            </Link>
            <Link href="/Authentication/Login" className="block px-2 py-2 rounded hover:bg-zinc-100">
              Sign In
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}