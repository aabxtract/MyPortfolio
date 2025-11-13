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

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-16 sm:py-24"
    >
      <div className="container mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex-grow animate-in fade-in slide-in-from-right-10 duration-800 ease-out">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Experience
          </h2>
          <div className="relative">
            {/* Central Spine */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.role}
                  className="relative flex items-center justify-center"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 transform rounded-full bg-primary ring-4 ring-background"></div>

                  {/* Content Block */}
                  <div
                    className={`flex w-full ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                      }`}
                    >
                      <h3 className="text-lg font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {exp.years ? `${exp.years} (${exp.duration})` : exp.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer className="mt-16 w-full py-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Hesed Anu Afolami — Built with Next.js
          </p>
        </footer>
      </div>
    </section>
  );
}
