export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-10 duration-800 ease-out">
        <h2 className="text-center font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-12">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto text-center text-lg leading-relaxed text-foreground/80">
          I build web experiences that blend design, blockchain, and real-world impact.
        </p>
      </div>
    </section>
  );
}
