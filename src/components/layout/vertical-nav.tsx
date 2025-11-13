"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, User, Code, Briefcase, Mail, Shapes, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Shapes },
  { href: "#projects", label: "Projects", icon: Code },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function VerticalNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const mainContainer = document.querySelector("main");
      if (mainContainer) {
        mainContainer.scrollTo({
          left: targetElement.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  const listItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav className="fixed right-0 top-0 hidden h-screen w-16 bg-[#0a0a0a] md:flex md:w-20 md:flex-col md:items-center md:justify-center z-50">
        <ul className="flex flex-col items-center justify-center space-y-8 md:space-y-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="group relative">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center text-white"
              >
                <link.icon className="h-5 w-5 md:h-6 md:w-6 text-foreground/70 transition-all duration-300 group-hover:text-primary-alt group-hover:scale-125 group-hover:-translate-x-1 group-hover:opacity-100" />
                <span className="absolute right-full mr-4 w-max origin-right scale-x-0 transform rounded-md bg-primary-alt px-3 py-1 text-sm text-white opacity-0 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100 hidden md:block">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-4 right-4 z-[100]">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-primary/80 text-primary-foreground"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-[90] flex items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.ul
              className="flex flex-col items-center justify-center space-y-8"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: {},
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={listItemVariants}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex flex-col items-center text-foreground/80 hover:text-primary transition-colors text-lg"
                  >
                    <link.icon className="h-8 w-8 mb-1" />
                    <span>{link.label}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
