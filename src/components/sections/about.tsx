import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-12 flex flex-col items-center justify-center w-full">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-right-10 duration-800 ease-out flex-grow flex flex-col justify-center">
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-10">
            About Me
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center md:order-last">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4E03AQGmq3Ek4uvhyw/profile-displayphoto-crop_800_800/B4EZfhBnYMHgAw-/0/1751826987553?e=1764806400&v=beta&t=aDuyPAF9CO7mlivZO4AeH7FGS3fpaX7DMaBQgHwFo78"
              alt="Hesed Anu Afolami"
              width={250}
              height={250}
              className="rounded-lg object-cover w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
              data-ai-hint="professional headshot"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
              I’m a young, vibrant, and creative developer passionate about innovation and building impactful things. I love solving problems, experimenting with new ideas, and bridging the gap between Web2 and Web3. My goal is to drive blockchain adoption and inspire others to go big on their ideas. Every project I work on is an opportunity to create, connect, and contribute to global change.
            </p>
          </div>
        </div>
      </div>
      <footer className="py-6 mt-12 w-full">
        <p className="text-sm text-muted-foreground text-center">
          © 2025 Hesed Anu Afolami — Built with Next.js
        </p>
      </footer>
    </section>
  );
}
