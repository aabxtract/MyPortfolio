import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    label: "hesedanu@gmail.com",
    href: "mailto:hesedanu@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/aabxtract",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/theafolamianu/",
    icon: Linkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/anuafolami_",
    icon: Twitter,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-right-10 duration-800 ease-out">
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities.
          </p>
        </div>
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          {contactLinks.map((link) => (
            <Button key={link.href} variant="outline" asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
