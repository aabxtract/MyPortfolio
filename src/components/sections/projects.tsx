import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

const projects = [
  {
    name: "MemeVibe",
    description:
      "A Farcaster mini-app for engaging content. Built with a focus on leveraging social graphs in unique ways.",
    stack: ["HTML", "CSS", "TypeScript", "Next.js"],
    repo: "https://github.com/aabxtract",
    live: null,
  },
  {
    name: "Web3Nova Experience",
    description:
      "Mastered blockchain development, smart contracts, and dApp engineering. Built and audited smart contracts.",
    stack: ["Solidity", "Smart Contracts", "dApp Tooling"],
    repo: null,
    live: null,
  },
  {
    name: "Walure Kenya UI",
    description:
      "Designed the UI for Walure’s new EdTech platform in Kenya, focusing on user registration and online learning.",
    stack: ["HTML", "CSS", "JS", "Figma"],
    repo: null,
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 flex flex-col items-center justify-center w-full">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-right-10 duration-800 ease-out flex-grow flex flex-col justify-center">
        <h2 className="text-center font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="flex flex-col bg-card hover:border-primary transition-colors duration-300"
            >
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg font-bold">{project.name}</CardTitle>
                <CardDescription className="pt-2 text-foreground/70 text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 bg-background border border-border rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 sm:space-x-4 mt-auto p-4 sm:p-6 pt-0">
                {project.live && (
                  <Button variant="outline" asChild size="sm">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" /> Live
                    </a>
                  </Button>
                )}
                {project.repo && (
                  <Button variant="outline" asChild size="sm">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Repo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <footer className="py-6 mt-24 w-full">
        <p className="text-sm text-muted-foreground text-center">
          © 2025 Hesed Anu Afolami — Built with Next.js
        </p>
      </footer>
    </section>
  );
}
