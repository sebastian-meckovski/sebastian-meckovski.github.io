import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ButtonLinkProps {
  children: React.ReactNode;
  className?: string;
  variant: "button" | "link";
}

type ButtonProps = ButtonLinkProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = ButtonLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ButtonLink(props: ButtonProps | LinkProps) {
  const { children, className = "", variant, ...rest } = props;

  const baseClassName = [
    // Layout & positioning
    "group relative flex mx-auto items-center justify-center overflow-hidden",
    // Spacing
    "px-4 2xl:px-[1vw] py-2 2xl:py-[1vh]",
    // Appearance
    "rounded-full 2xl:rounded-[10vw] border",
    // Typography
    "text-lg 2xl:text-[1.5vw] font-bold",
    // Transitions
    "md:transition-all duration-300 md:ease-out",
    // Hover effects
    "hover:bg-[var(--accent)] hover:text-white hover:pr-12 2xl:hover:pr-[3vw]",
    "hover:shadow-lg hover:shadow-[var(--accent)]/25 hover:scale-105",
  ].join(" ");
  const combinedClassName = `${baseClassName} ${className}`.trim();

  const content = (
    <>
      <span
        className={[
          "transition-transform duration-300 ease-out",
          "group-hover:-translate-x-1 2xl:group-hover:-translate-x-[0.25vw]",
        ].join(" ")}
      >
        {children}
      </span>
      <FontAwesomeIcon
        icon={faArrowRight}
        className={[
          // Positioning
          "absolute right-3 2xl:right-[0.75vw]",
          // Initial state
          "opacity-0 translate-x-10 2xl:translate-x-[4vw]",
          // Sizing
          "text-2xl 2xl:text-[1.5vw]",
          // Transitions
          "transition-all duration-300 ease-out",
          // Hover effects
          "group-hover:opacity-100 group-hover:translate-x-0",
        ].join(" ")}
      />
    </>
  );

  if (variant === "link") {
    return (
      <a
        className={combinedClassName}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
