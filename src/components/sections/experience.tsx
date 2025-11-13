"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: 'Intern Web3 Developer',
    duration: 'Jan 2025 – Present',
  },
  {
    role: 'UI/UX Designer',
    duration: 'Nov 2023 – Present',
    years: '2 years',
  },
  {
    role: 'Graphic Designer',
    duration: 'Jan 2022 – Present',
    years: '3 years',
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-12 w-full"
    >
      <div className="container mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex-grow w-full animate-in fade-in slide-in-from-right-10 duration-800 ease-out">
          <h2 className="mb-10 text-center font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Experience
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={listVariants}
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.role}
                className="p-4"
                variants={itemVariants}
              >
                <h3 className="text-lg font-bold text-foreground">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {exp.years ? `${exp.years} (${exp.duration})` : exp.duration}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <footer className="mt-12 w-full py-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Hesed Anu Afolami — Built with Next.js
          </p>
        </footer>
      </div>
    </section>
  );
}
