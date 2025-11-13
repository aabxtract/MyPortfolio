"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
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
    <section id="home" className="text-center flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center">
        <h1 className="font-headline text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-primary animate-in fade-in slide-in-from-right-5 duration-1000 ease-out">
          Hi — I’m Hesed Anu Afolami.
        </h1>
        <p className="mt-6 text-lg sm:text-xl leading-8 text-foreground/80 animate-in fade-in slide-in-from-right-5 duration-1000 ease-out delay-200">
          A Creative Web3 Developer and Block Adoption Advocate.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 animate-in fade-in slide-in-from-right-5 duration-1000 ease-out delay-400">
          <Button asChild size="lg">
            <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>Explore Projects</a>
          </Button>
        </div>
      </div>
      <footer className="py-8 mt-32 w-full">
        <p className="text-sm text-muted-foreground text-center">
          © 2025 Hesed Anu Afolami — Built with Next.js
        </p>
      </footer>
    </section>
  );
}
