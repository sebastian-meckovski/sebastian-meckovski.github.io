import Typewriter from "@/components/typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";

export const metadata = {
  title: "Home | Sebastian Meckovski | Web Developer & Software Engineer",
  description:
    "Versatile software engineer with 4 years of experience across frontend, backend, and testing — passionate about learning and shipping modern, performant web solutions.",
};

export default function Home() {
  const socialCircleClass = [
    // Layout & positioning
    "flex items-center justify-center",
    // Sizing
    "w-12 2xl:w-[3vw] h-12 2xl:h-[3vw]",
    // Appearance
    "rounded-full outline outline-1",
    // Colors
    "text-[var(--accent)]",
    // Hover & active effects
    "hover:bg-[var(--accent)] hover:text-white active:bg-[var(--accent)] active:text-white",
    "hover:shadow-[0_0_16px_4px_var(--accent)] active:shadow-[0_0_16px_4px_var(--accent)]",
    // Transitions
    "transition-colors duration-150 md:duration-300 ease-out",
  ].join(" ");

  const socialLinkClass = [
    // Layout & positioning
    "flex items-center justify-center",
    // Sizing
    "w-full h-full p-[0.25vw]",
  ].join(" ");
  const iconStyle = { width: "80%", height: "80%" };
  return (
    <div
      className={[
        // Layout
        "flex flex-col items-center",
        // Sizing
        "w-full",
        // Spacing
        "gap-4 2xl:gap-[2vh]",
      ].join(" ")}
    >
      <div
        className={[
          // Positioning
          "relative",
          // Layout
          "flex items-center justify-center",
        ].join(" ")}
      >
        <Image
          src="/seb-portrait.jpg"
          id="seb-portrait"
          alt="Sebastian Meckovski portrait"
          width={1024}
          height={1024}
          className={[
            // Sizing
            "w-[24rem] 2xl:w-[39vh] 2xl:h-[39vh]",
            // Positioning
            "relative",
            // Appearance
            "object-cover rounded-full",
            // Filters
            "hue-rotate-[var(--image-hue)] grayscale-[var(--image-grayscale)]",
          ].join(" ")}
          priority
        />
        <span
          aria-hidden="true"
          className={[
            // Interaction
            "pointer-events-none",
            // Positioning
            "absolute inset-0",
            // Appearance
            "rounded-full blur-[1px]",
            // Effects
            "shadow-[0_0_45px_2px_var(--accent)] opacity-[var(--image-shadow-blur)]",
          ].join(" ")}
        />
      </div>
      <h1>Hi, Seb here</h1>
      <div
        className={[
          // Layout
          "flex flex-row items-center",
          // Text handling
          "whitespace-nowrap min-w-0",
          // Mobile responsive
          "[@media(max-width:320px)]:flex-col [@media(max-width:320px)]:items-start",
        ].join(" ")}
      >
        <span
          className={[
            // Typography
            "text-2xl 2xl:text-[1.5vw]",
            // Sizing
            "w-full",
            // Positioning
            "text-center",
          ].join(" ")}
        >
          I am a{" "}
        </span>
        <Typewriter
          words={[" software engineer", " programmer", " web developer"]}
          className="text-2xl 2xl:text-[1.5vw] transition-colors duration-150 md:duration-300 ease-out"
        />
      </div>
      <p className="text-center">
        A versatile software engineer with 4 years of experience across frontend,
        backend, and testing. I love turning ideas into fast, accessible, and
        maintainable web products.
      </p>
      <div
        className={[
          // Layout
          "flex flex-wrap justify-center",
          // Spacing
          "gap-6 2xl:gap-[1vw]",
        ].join(" ")}
      >
        <span className={socialCircleClass}>
          <Link
            href="https://www.linkedin.com/in/sebastian-meckovski"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}
          >
            <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
          </Link>
        </span>
        <span className={socialCircleClass}>
          <Link
            href="https://www.facebook.com/sebastian.meckovski"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}
          >
            <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
          </Link>
        </span>
        <span className={socialCircleClass}>
          <Link
            href="https://www.instagram.com/sebastian_meckovski/"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}
          >
            <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
          </Link>
        </span>
        <span className={socialCircleClass}>
          <Link
            href="https://www.github.com/sebastian-meckovski/"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}
          >
            <FontAwesomeIcon icon={faGithub} style={iconStyle} />
          </Link>
        </span>
      </div>
      <ButtonLink variant="link" href="/contact">
        Hire Me
      </ButtonLink>
    </div>
  );
}
