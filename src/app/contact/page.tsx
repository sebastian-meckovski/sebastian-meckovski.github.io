import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { submitContactForm } from "./actions";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import FormSubmitBehaviour from "./FormSumbitBehaviour";

export const metadata = { title: "Contact" };

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { status } = await searchParams;

  console.log(status);

  const inputClass =
    "w-full px-4 py-2 border rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent)] h-12 2xl:h-[7vh]";
  const labelClass = "block text-2xl 2xl:text-[1.5vw] font-medium";

  if (status === "success") {
    return (
      <div className="flex flex-col gap-4 2xl:gap-[2vh] items-center w-full">
        <h1 className="tracking-tight mb-2">
          Message Sent!
        </h1>
        <p className="text-base 2xl:text-[1.2vw] max-w-2xl leading-relaxed">
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
        <h1 className="tracking-tight mb-2 text-center">
          Contact Me
        </h1>
        <p className="text-base 2xl:text-[1.2vw] leading-relaxed text-center mb-6">
          Have a question or want to work together? Feel free to reach out.
        </p>
        <form
          action={submitContactForm}
          id="contact-form"
          className="w-full max-w-2xl 2xl:max-w-[55vw] space-y-6"
        >
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
              style={{height: "30vh"}}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex mx-auto items-center gap-2 px-8 py-2 rounded-full border text-lg 2xl:text-[1.5vw] font-bold hover:bg-[var(--accent)] hover:text-white"
          >
            Send Message
            <div className="hidden">
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            </div>
          </button>
        </form>
      </div>
    </>
  );
}
