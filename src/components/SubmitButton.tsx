"use client";

import { useFormStatus } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ButtonHTMLAttributes } from "react";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function SubmitButton({
  children,
  className = "",
  ...rest
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  const baseClassName = [
    // Layout & positioning
    "group relative flex mx-auto items-center justify-center overflow-hidden",
    // Spacing
    "px-4 py-2",
    // Appearance
    "rounded-full border",
    // Typography
    "text-lg font-bold",
    // Transitions
    "md:transition-all duration-300 md:ease-out",
    // Hover effects (disabled when pending)
    pending
      ? "opacity-75 cursor-not-allowed pr-12 bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/25"
      : "hover:bg-[var(--accent)] hover:text-white hover:pr-12 hover:shadow-lg hover:shadow-[var(--accent)]/25 hover:scale-105",
  ].join(" ");

  const combinedClassName = `${baseClassName} ${className}`.trim();

  return (
    <button
      type="submit"
      disabled={pending}
      className={combinedClassName}
      {...rest}
    >
      <span
        className={[
          "transition-transform duration-300 ease-out",
          !pending && "group-hover:-translate-x-1",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </span>
      {pending ? (
        <FontAwesomeIcon
          icon={faSpinner}
          className={[
            // Positioning
            "absolute right-3",
            // Sizing
            "text-2xl",
            // Animation
            "animate-spin",
          ].join(" ")}
        />
      ) : (
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
      )}
    </button>
  );
}

