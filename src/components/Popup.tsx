"use client";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect, useState } from "react";

interface PopupProps {
  open: boolean;
  anchorRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Popup({
  open,
  anchorRef,
  onClose,
  children,
}: PopupProps) {
  const popupRef = useRef<HTMLDialogElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
    }
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose, anchorRef]);

  // Positioning logic
  useEffect(() => {
    function positionPopup() {
      if (!open || !popupRef.current || !anchorRef.current) return;
      const popup = popupRef.current;
      const anchor = anchorRef.current;
      const anchorRect = anchor.getBoundingClientRect();
      const popupRect = popup.getBoundingClientRect();
      let top = anchorRect.bottom + 2;
      let right = window.innerWidth - (anchorRect.left + popupRect.width);
      // Check for overflow
      if (top + popupRect.height > window.innerHeight) {
        top = anchorRect.top - popupRect.height - 8;
      }
      if (right < 8) {
        right = 8;
      }
      popup.style.top = `${Math.max(top, 8)}px`;
      popup.style.right = `${Math.max(right, 8)}px`;
      popup.style.left = "auto";
    }
    positionPopup();
    if (!open) return;
    window.addEventListener("resize", positionPopup);
    return () => {
      window.removeEventListener("resize", positionPopup);
    };
  }, [open, anchorRef]);

  function onAnimationEnd(e: React.AnimationEvent<HTMLDialogElement>): void {
    if (e.animationName === "popup-fade-out" && popupRef.current) {
      setVisible(false);
    }
  }

  if (!open && !visible) {
    return null;
  }
  return (
    <dialog
      ref={popupRef}
      open
      className={[
        // Animation
        open ? "popup-fade-in" : "popup-fade-out",
        // Positioning
        "fixed z-[1000]",
        // Sizing
        "max-w-[95vw] sm:max-w-[50vw] 2xl:max-w-[25vw] max-h-[95vh]",
        // Appearance
        "bg-[var(--background)] text-[var(--foreground)] shadow-2xl",
        "rounded-2xl 2xl:rounded-[1vw] border border-solid border-[var(--foreground)]/20",
        // Spacing
        "p-8 2xl:p-[1vw]",
        // Overflow
        "overflow-y-auto",
      ].join(" ")}
      onAnimationEnd={onAnimationEnd}
      aria-modal="true"
      role="dialog"
    >
      <button
        type="button"
        aria-label="Close popup"
        className={[
          // Positioning
          "absolute top-4 right-4",
          // Sizing
          "h-[2.2rem] md:h-[2rem] 2xl:h-[1.6vw]",
          // Colors
          "text-[var(--foreground)]",
          // Hover & active effects
          "hover:text-[var(--accent)] active:text-[var(--accent)]",
          // Transitions
          "md:transition-colors duration-150 md:duration-300 md:ease-out",
        ].join(" ")}
        onClick={() => onClose()}
      >
        <span className="sr-only">Close</span>
        <FontAwesomeIcon
          icon={faClose}
          style={{ width: "100%", height: "100%" }}
        />
      </button>
      {children}
    </dialog>
  );
}
