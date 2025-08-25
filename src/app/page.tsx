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
  return (
    <div className="flex flex-col items-center w-full">
      {/* Example: apply hue-cyan, hue-purple, etc. based on theme */}
      <Image
        src="/seb-portrait.jpg"
        id="seb-portrait"
        alt="Sebastian Meckovski portrait"
        width={600}
        height={600}
        className="w-90 h-90 mb-8 object-cover rounded-full border-2 border-gray-300 hue-rotate-[var(--image-hue)] grayscale-[var(--image-grayscale)]"
        priority
      />
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-center">
        Hi, Seb here
      </h1>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">I am a</span>
        <Typewriter
          words={["software engineer", "programmer", "web developer"]}
        />
      </div>
      <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-center mb-6">
        A versatile software developer with 3 years of experience in frontend,
        backend, testing, and web technologies. Passionate about learning and
        implementing new technologies.
      </p>
      <div className="flex gap-6 mb-6">
        <Link
          href="https://www.linkedin.com/in/sebastian-meckovski"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ width: "2.5rem", height: "2.5rem" }}
          />
        </Link>
        <Link
          href="https://www.facebook.com/sebastian.meckovski"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ width: "2.5rem", height: "2.5rem" }}
          />
        </Link>
        <Link
          href="https://www.instagram.com/sebastian_meckovski/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ width: "2.5rem", height: "2.5rem" }}
          />
        </Link>
        <Link
          href="https://www.instagram.com/sebastian_meckovski/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={{ width: "2.5rem", height: "2.5rem" }}
          />
        </Link>
      </div>
      <button className="py-2 px-8 rounded-full text-lg font-bold border border-gray-400 bg-transparent">
        Hire Me
      </button>
    </div>
  );
}
