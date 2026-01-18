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
    "px-5 py-5",
    // Appearance
    "rounded-full border",
    // Typography
    "text-xl font-bold",
    // Transitions
    "md:transition-all duration-300 md:ease-out",
    // Hover effects
    "hover:bg-[var(--accent)] hover:text-white hover:pr-12",
    "hover:shadow-lg hover:shadow-[var(--accent)]/25 hover:scale-105",
  ].join(" ");
  const combinedClassName = `${baseClassName} ${className}`.trim();

  const content = (
    <>
      <span
        className={[
          "transition-transform duration-300 ease-out",
          "group-hover:-translate-x-1",
        ].join(" ")}
      >
        {children}
      </span>
      <FontAwesomeIcon
        icon={faArrowRight}
        className={[
          // Positioning
          "absolute right-3",
          // Initial state
          "opacity-0 translate-x-10",
          // Sizing
          "text-2xl",
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
