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
      "Meme Vibe is a Farcaster miniapp distributed directly in the feed that leverages the social graph in unique ways. A consumer-facing app for engaging and entertaining content.",
    stack: ["HTML", "CSS", "TypeScript", "Next.js"],
    repo: "https://github.com/aabxtract",
    live: null,
  },
  {
    name: "Web3Nova Experience",
    description:
      "Where I mastered blockchain development, smart contracts, and dApp engineering. Built and audited smart contracts, worked with real-world DApps and DeFi, and collaborated in a vibrant blockchain community.",
    stack: ["Solidity", "Smart Contracts", "dApp Tooling"],
    repo: null,
    live: null,
  },
  {
    name: "Walure Kenya UI",
    description:
      "UI for Walure’s new EdTech base in Kenya — designed for registration and online tech learning.",
    stack: ["HTML", "CSS", "JS"],
    repo: null,
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-10 duration-800 ease-out">
        <h2 className="text-center font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="flex flex-col bg-card hover:border-primary transition-colors duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
                <CardDescription className="pt-2 text-foreground/70">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-4 mt-auto pt-6">
                {project.live && (
                  <Button variant="outline" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" /> Live
                    </a>
                  </Button>
                )}
                {project.repo && (
                  <Button variant="outline" asChild>
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
    </section>
  );
}
