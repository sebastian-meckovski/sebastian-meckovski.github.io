import { submitContactForm } from "./actions";

export const metadata = { title: "Contact" };

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { status } = await searchParams;

  console.log(status);

  const inputClass =
    "w-full px-4 py-2 border rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent)]";
  const labelClass = "block mb-2 text-lg font-medium";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
          Message Sent!
        </h1>
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
          Thank you for contacting me. I will get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-center">
        Contact Me
      </h1>
      <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-center mb-6">
        Have a question or want to work together? Feel free to reach out.
      </p>
      <form action={submitContactForm} className="w-full max-w-2xl space-y-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={inputClass}
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-8 py-2 rounded-full border text-lg font-bold hover:bg-[var(--accent)] hover:text-white"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
