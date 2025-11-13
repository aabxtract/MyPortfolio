const SKILLS = ["HTML", "CSS", "TypeScript", "Next.js", "React"];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-10 duration-800 ease-out">
        <h2 className="text-center font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-12">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {SKILLS.map((skill) => (
            <div key={skill} className="px-4 py-2 bg-card border border-border rounded-full text-foreground text-sm font-medium">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
