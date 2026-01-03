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
    "w-16",
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
    "w-full h-full p-2",
  ].join(" ");
  const iconStyle = { width: "80%", height: "80%" };
  return (
    <div
      className={[
        // Layout
        "flex flex-col items-center justify-center",
        // Sizing
        "w-full h-full min-h-[calc(100vh-12rem)]",
        // Spacing
        "gap-6",
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
            "w-[24rem] 2xl:w-[33vh] 2xl:h-[33vh]",
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
      {/* Heading - uses h1 from typography.css */}
      <h1 className="text-center text-5xl">
        Hi, I&apos;m <span className="text-accent">Seb</span>
      </h1>

      {/* Subtitle with typewriter */}
      <div className="flex items-center justify-center text-subtitle text-2xl">
        <span>I&apos;m a</span>
        <Typewriter
          words={[" software engineer", " programmer", " web developer"]}
          className="transition-colors duration-300 ease-out text-2xl"
        />
      </div>

      {/* Description */}
      <p className="text-center text-lg">
        A versatile software engineer with 4 years of experience across
        frontend, backend, and testing. I love turning ideas into fast,
        accessible, and maintainable web products.
      </p>
      <div
        className={[
          // Layout
          "flex flex-wrap justify-center",
          // Spacing
          "gap-6",
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
