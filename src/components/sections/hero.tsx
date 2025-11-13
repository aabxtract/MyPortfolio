import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="py-24 sm:py-32 lg:py-40 text-center">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-headline text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-primary animate-in fade-in slide-in-from-bottom-5 duration-1000 ease-out">
          Hi — I’m Hesed Anu Afolami.
        </h1>
        <p className="mt-6 text-lg sm:text-xl leading-8 text-foreground/80 animate-in fade-in slide-in-from-bottom-5 duration-1000 ease-out delay-200">
          A Creative Web3 Developer and Block Adoption Advocate.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 animate-in fade-in slide-in-from-bottom-5 duration-1000 ease-out delay-400">
          <Button asChild size="lg">
            <a href="#projects">Explore Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
