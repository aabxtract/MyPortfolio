"use client";

import { Home, User, Code, Briefcase, Mail } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: Code },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function VerticalNav() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const mainContainer = document.querySelector('main');
        if(mainContainer) {
            mainContainer.scrollTo({
                left: targetElement.offsetLeft,
                behavior: 'smooth'
            });
        }
    }
  };


  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-black flex flex-col items-center justify-center z-50">
      <ul className="flex flex-col items-center justify-center space-y-10">
        {NAV_LINKS.map((link) => (
          <li key={link.href} className="group relative">
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center text-white"
            >
              <link.icon className="h-6 w-6 transition-colors group-hover:text-primary-alt" />
              <span className="absolute left-full ml-4 w-max origin-left scale-x-0 transform rounded-md bg-primary-alt px-3 py-1 text-sm text-white opacity-0 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100">
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
