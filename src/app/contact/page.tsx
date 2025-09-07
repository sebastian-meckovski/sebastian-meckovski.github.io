import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { submitContactForm } from "./actions";
import FormSubmitBehaviour from "./FormSumbitBehaviour";
import ButtonLink from "@/components/ButtonLink";

export const metadata = { title: "Contact" };

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { status } = await searchParams;

  console.log(status);

  const inputClass =
    "w-full px-4 py-2 border rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent)] h-12 2xl:h-[6vh]";
  const labelClass =
    "block text-2xl 2xl:text-[1.5vw] font-medium mb-2 2xl:mb-[0.5vh]";

  if (status === "success") {
    return (
      <div className="flex flex-col gap-4 2xl:gap-[2vh] items-center w-full">
        <h1 className="tracking-tight mb-2">Message Sent!</h1>
        <p>
          Thank you for contacting me. I will get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <>
      <FormSubmitBehaviour />
      <div className="flex flex-col gap-4 2xl:gap-[2vh] items-center w-full max-w-2xl 2xl:max-w-[55vw] ">
        <div className="w-full">
          <h1>Let's Connect</h1>
        </div>
        <div
          className={[
            // Spacing
            "space-y-4 2xl:space-y-[1vh] mb-4 2xl:mb-[2vh]",
          ].join(" ")}
        >
          <p
            className={[
              // Typography
              "text-lg 2xl:text-[1.2vw] font-semibold",
              // Colors
              "text-[var(--accent)]",
              // Transitions
              "transition-colors duration-150 md:duration-300 ease-out",
            ].join(" ")}
          >
            Ready to bring your ideas to life?
          </p>
          <p
            className={[
              // Typography
              "text-base 2xl:text-[1vw] leading-relaxed",
            ].join(" ")}
          >
            Whether you have a project in mind, need technical consultation, or
            just want to discuss the latest in web development, I'd love to hear
            from you. I'm always excited to collaborate on innovative solutions
            and help turn your vision into reality.
          </p>
          <p
            className={[
              // Typography
              "text-sm 2xl:text-[0.9vw]",
              // Colors
              "text-[var(--foreground)]/80",
            ].join(" ")}
          >
            I typically respond within 24 hours on business days. Let's start a
            conversation!
          </p>
        </div>
        <form
          action={submitContactForm}
          id="contact-form"
          className="w-full max-w-2xl 2xl:max-w-[55vw] flex flex-col gap-6 2xl:gap-[1.7vh]"
        >
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
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
              placeholder="your.email@example.com"
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
              placeholder="What would you like to discuss?"
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
              placeholder="Tell me about your project, ideas, or questions. I'd love to hear the details and understand how I can help you achieve your goals..."
              className={inputClass}
              style={{ height: "30vh" }}
              required
            ></textarea>
          </div>
          <ButtonLink variant="button" type="submit">
            Send Message
            <div className="hidden">
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            </div>
          </ButtonLink>
        </form>
      </div>
    </>
  );
}
