import Typewriter from "@/components/typewriter";

export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Hi, Seb here</h1>
      <h2 className="text-xl font-semibold text-[var(--accent)]">I am a Web Developer</h2>
      <p className="max-w-prose leading-relaxed">
        A versatile software developer with 3 years of experience in frontend, backend, testing, and web technologies. Passionate about learning and implementing new technologies.
      </p>
      <Typewriter words={["Software Engineer", "Programmer", "Web Developer"]}/>
    </section>
  );
}
