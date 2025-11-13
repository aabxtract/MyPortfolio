import Footer from "../layout/footer";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-right-10 duration-800 ease-out flex-grow flex flex-col justify-center">
        <h2 className="text-center font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-12">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto text-center text-lg leading-relaxed text-foreground/80">
          I build web experiences that blend design, blockchain, and real-world impact.
        </p>
      </div>
      <footer className="py-8 mt-16 w-full">
        <p className="text-sm text-muted-foreground text-center">
          © 2025 Hesed Anu Afolami — Built with Next.js
        </p>
      </footer>
    </section>
  );
}
