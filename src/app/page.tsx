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

export default function Home() {
  const socialCircleClass =
    "w-12 2xl:w-[3vw] h-12 2xl:h-[3vw] flex items-center justify-center rounded-full border text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:shadow-[0_0_16px_4px_var(--accent)]";
  const socialLinkClass = "flex items-center justify-center w-full h-full p-[0.25vw]";
  const iconStyle = { width: "74%", height: "100%" };
  return (
    <div className="flex flex-col gap-3 2xl:gap-[2vh] items-center w-full">
      <div className="relative flex items-center justify-center">
        <Image
          src="/seb-portrait.jpg"
          id="seb-portrait"
          alt="Sebastian Meckovski portrait"
          width={1024}
          height={1024}
          className="w-[24rem] 2xl:w-[39vh] 2xl:h-[39vh] relative object-cover rounded-full hue-rotate-[var(--image-hue)] grayscale-[var(--image-grayscale)]"
          priority
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_45px_2px_var(--accent)] opacity-[var(--image-shadow-blur)] blur-[1px]"
        />
      </div>
      <h1 className="text-4xl 2xl:text-[2.5svw] font-bold tracking-tight text-center">
        Hi, Seb here
      </h1>
      <div
        className="
        flex flex-row items-center whitespace-nowrap min-w-0
        [@media(max-width:320px)]:flex-col
        [@media(max-width:320px)]:items-start
      "
      >
        <span className="text-2xl 2xl:text-[1.5vw] [@media(max-width:320px)]:text-center w-full">
          I am a{" "}
        </span>
        <Typewriter
          words={[" software engineer", " programmer", " web developer"]}
          className="text-2xl 2xl:text-[1.5vw]"
        />
      </div>
      <p className="max-w-2xl 2xl:max-w-[55vw] text-base 2xl:text-[1.2vw] leading-relaxed text-center ">
        A versatile software developer with 3 years of experience in frontend,
        backend, testing, and web technologies. Passionate about learning and
        implementing new technologies.
      </p>
      <div className="flex gap-6 2xl:gap-[1vw]">
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
      <Link
        href="/contact"
        className="inline-flex items-center px-8 2xl:px-[2vw] py-2 2xl:py-[1vh] rounded-full border text-lg 2xl:text-[1.2vw] font-bold hover:bg-[var(--accent)] hover:text-white"
      >
        Hire Me
      </Link>
    </div>
  );
}
