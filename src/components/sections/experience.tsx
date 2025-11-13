const experiences = [
  {
    role: "Intern Web3 Developer",
    duration: "Jan 2025 – Present",
  },
  {
    role: "UI/UX Designer",
    duration: "Nov 2023 – Present",
    years: "2 years"
  },
  {
    role: "Graphic Designer",
    duration: "Jan 2022 – Present",
    years: "3 years"
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-right-10 duration-800 ease-out">
        <h2 className="text-center font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-12">
          Experience
        </h2>
        <div className="max-w-xl mx-auto">
          <ul className="space-y-8">
            {experiences.map((exp) => (
              <li key={exp.role} className="flex justify-between items-baseline gap-4">
                <h3 className="font-bold text-lg text-foreground">{exp.role}</h3>
                <p className="text-sm text-muted-foreground text-right shrink-0">
                  {exp.years ? `${exp.years} (${exp.duration})` : exp.duration}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
