"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const SKILLS = [
  {
    name: "HTML",
    description: "The standard markup language for creating web pages and web applications."
  },
  {
    name: "CSS",
    description: "A style sheet language used for describing the presentation of a document written in a markup language like HTML."
  },
  {
    name: "JavaScript",
    description: "A high-level, interpreted programming language that conforms to the ECMAScript specification."
  },
  {
    name: "TypeScript",
    description: "A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability."
  },
  {
    name: "Next.js",
    description: "A React framework for building full-stack web applications with features like server-side rendering and static site generation."
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces, particularly for single-page applications."
  },
  {
    name: "Solidity",
    description: "An object-oriented programming language for writing smart contracts on various blockchain platforms, most notably Ethereum."
  }
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section id="skills" className="py-12 flex flex-col items-center justify-center w-full">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-right-10 duration-800 ease-out flex-grow flex flex-col justify-center">
        <h2 className="text-center font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" onMouseLeave={() => setHoveredIndex(null)}>
          {SKILLS.map((skill, idx) => (
            <div
              key={skill.name}
              className={cn(
                "relative group block p-2 h-full w-full",
                skill.name === 'Solidity' && 'col-span-2 md:col-span-1 md:col-start-2'
              )}
              onMouseEnter={() => setHoveredIndex(idx)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-primary block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div
                className={cn(
                  "rounded-2xl h-full w-full p-4 overflow-hidden bg-card border border-transparent group-hover:border-primary relative z-20 transition-colors duration-300",
                )}
              >
                <div className="text-center">
                    <h4 className="font-bold tracking-wide text-primary text-base sm:text-lg transition-colors group-hover:text-white">{skill.name}</h4>
                    <AnimatePresence>
                    {hoveredIndex === idx && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
                        exit={{ opacity: 0, y: 20 }}
                        className="mt-2 text-xs sm:text-sm text-white/80"
                    >
                        {skill.description}
                    </motion.div>
                    )}
                    </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="py-6 mt-12 w-full">
        <p className="text-sm text-muted-foreground text-center">
          © 2025 Hesed Anu Afolami — Built with Next.js
        </p>
      </footer>
    </section>
  );
}
