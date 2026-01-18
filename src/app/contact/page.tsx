import { submitContactForm } from "./actions";
import SubmitButton from "@/components/SubmitButton";

export const metadata = {
  title: "Contact | Sebastian Meckovski | Web Developer & Software Engineer",
  description:
    "Get in touch with Sebastian to discuss your project, collaboration, or technical consultation.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { status } = await searchParams;

  if (status === "success") {
    return (
      <div
        className={[
          // Layout
          "flex flex-col items-center justify-center",
          // Spacing
          "space-y-6 py-12",
          // Typography
          "text-center",
        ].join(" ")}
      >
        <h1>Message Sent!</h1>
        <p
          className={[
            // Appearance
            "text-[var(--foreground)]/80",
          ].join(" ")}
        >
          Thank you for contacting me. I will get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <div
      className={[
        // Layout
        "flex flex-col",
        // Spacing
        "space-y-4",
      ].join(" ")}
    >
      <h1 className="text-4xl text-left">Let&apos;s Connect</h1>
      <div
        className={[
          // Layout
          "flex flex-col",
          // Spacing
          "space-y-4",
          // Typography
          "text-center",
        ].join(" ")}
      >
        <h2
          className={[
            // Typography
            "font-semibold",
            // Appearance
            "text-[var(--accent)]",
            // Typography
            "text-left",
          ].join(" ")}
        >
          Ready to bring your ideas to life?
        </h2>
        <p
          className={[
            // Typography
            "leading-relaxed",
            // Appearance
            "text-[var(--foreground)]/80",
            // Typography
            "text-left",
          ].join(" ")}
        >
          Whether you have a project in mind, need technical consultation, or
          just want to discuss the latest in web development, I&apos;d love to
          hear from you. I&apos;m always excited to collaborate on innovative
          solutions and help turn your vision into reality.
        </p>
        <p
          className={[
            // Appearance
            "text-[var(--foreground)]/60",
            // Typography
            "text-left",
          ].join(" ")}
        >
          I typically respond within 24 hours on business days. Let&apos;s start
          a conversation!
        </p>
      </div>
      <form
        action={submitContactForm}
        id="contact-form"
        className={[
          // Layout
          "flex flex-col",
          // Spacing
          "space-y-6",
        ].join(" ")}
      >
        <div
          className={[
            // Layout
            "flex flex-col",
            // Spacing
            "space-y-2",
          ].join(" ")}
        >
          <label
            htmlFor="name"
            className={[
              // Typography
              "font-semibold",
              // Appearance
              "text-[var(--foreground)]",
            ].join(" ")}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            required
            className={[
              // Sizing
              "w-full",
              // Spacing
              "px-4 py-3",
              // Appearance
              "rounded-lg",
              "border border-[var(--foreground)]/20",
              "bg-[var(--background)]",
              // Typography
              "text-[var(--foreground)]",
              "placeholder:text-[var(--foreground)]/40",
              // Focus state
              "focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent",
              // Transitions
              "transition-all duration-200 ease-out",
            ].join(" ")}
          />
        </div>
        <div
          className={[
            // Layout
            "flex flex-col",
            // Spacing
            "space-y-2",
          ].join(" ")}
        >
          <label
            htmlFor="email"
            className={[
              // Typography
              "font-semibold",
              // Appearance
              "text-[var(--foreground)]",
            ].join(" ")}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your.email@example.com"
            required
            className={[
              // Sizing
              "w-full",
              // Spacing
              "px-4 py-3",
              // Appearance
              "rounded-lg",
              "border border-[var(--foreground)]/20",
              "bg-[var(--background)]",
              // Typography
              "text-[var(--foreground)]",
              "placeholder:text-[var(--foreground)]/40",
              // Focus state
              "focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent",
              // Transitions
              "transition-all duration-200 ease-out",
            ].join(" ")}
          />
        </div>
        <div
          className={[
            // Layout
            "flex flex-col",
            // Spacing
            "space-y-2",
          ].join(" ")}
        >
          <label
            htmlFor="subject"
            className={[
              // Typography
              "font-semibold",
              // Appearance
              "text-[var(--foreground)]",
            ].join(" ")}
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="What would you like to discuss?"
            required
            className={[
              // Sizing
              "w-full",
              // Spacing
              "px-4 py-3",
              // Appearance
              "rounded-lg",
              "border border-[var(--foreground)]/20",
              "bg-[var(--background)]",
              // Typography
              "text-[var(--foreground)]",
              "placeholder:text-[var(--foreground)]/40",
              // Focus state
              "focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent",
              // Transitions
              "transition-all duration-200 ease-out",
            ].join(" ")}
          />
        </div>
        <div
          className={[
            // Layout
            "flex flex-col",
            // Spacing
            "space-y-2",
          ].join(" ")}
        >
          <label
            htmlFor="message"
            className={[
              // Typography
              "font-semibold",
              // Appearance
              "text-[var(--foreground)]",
            ].join(" ")}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about your project, ideas, or questions. I'd love to hear the details and understand how I can help you achieve your goals..."
            required
            className={[
              // Sizing
              "w-full h-[30vh]",
              // Spacing
              "px-4 py-3",
              // Appearance
              "rounded-lg",
              "border border-[var(--foreground)]/20",
              "bg-[var(--background)]",
              // Typography
              "text-[var(--foreground)]",
              "placeholder:text-[var(--foreground)]/40",
              // Focus state
              "focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent",
              // Transitions
              "transition-all duration-200 ease-out",
              // Behavior
              "resize-none",
            ].join(" ")}
          ></textarea>
        </div>
        <SubmitButton>Send Message</SubmitButton>
      </form>
    </div>
  );
}
