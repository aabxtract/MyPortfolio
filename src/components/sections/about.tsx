import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-right-10 duration-800 ease-out flex-grow flex flex-col justify-center">
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-12">
            About Me
          </h2>
        </div>
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <p className="text-lg leading-relaxed text-foreground/80">
              I build web experiences that blend design, blockchain, and real-world impact.
            </p>
          </div>
        </div>
      </div>
      <footer className="py-8 mt-16 w-full">
        <p className="text-sm text-muted-foreground text-center">
          © 2025 Hesed Anu Afolami — Built with Next.js
        </p>
      </footer>
    </section>
  );
}
