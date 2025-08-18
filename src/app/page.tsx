import Typewriter from "@/components/typewriter";

export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Hi, Seb here</h1>
      <span className="text-2xl">I am a </span>
      <Typewriter words={["software engineer", "programmer", "web developer"]}/>
      <p className="max-w-prose leading-relaxed">
        A versatile software developer with 3 years of experience in frontend, backend, testing, and web technologies. Passionate about learning and implementing new technologies.
      </p>
    </section>
  );
}
