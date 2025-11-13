import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-right-10 duration-800 ease-out flex-grow flex flex-col justify-center">
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-12">
            About Me
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="text-lg leading-relaxed text-foreground/80">
              I build web experiences that blend design, blockchain, and real-world impact.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4E03AQGmq3Ek4uvhyw/profile-displayphoto-crop_800_800/B4EZfhBnYMHgAw-/0/1751826987553?e=1764806400&v=beta&t=aDuyPAF9CO7mlivZO4AeH7FGS3fpaX7DMaBQgHwFo78"
              alt="Hesed Anu Afolami"
              width={300}
              height={300}
              className="rounded-full object-cover"
              data-ai-hint="professional headshot"
            />
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
