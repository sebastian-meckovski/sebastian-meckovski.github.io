"use client";
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
      let left = anchorRect.left;
      // Check for overflow
      if (top + popupRect.height > window.innerHeight) {
        top = anchorRect.top - popupRect.height - 8;
      }
      if (left + popupRect.width > window.innerWidth) {
        left = window.innerWidth - popupRect.width - 8;
      }
      popup.style.top = `${Math.max(top, 8)}px`;
      popup.style.left = `${Math.max(left, 8)}px`;
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
      className={`${
        open ? "popup-fade-in" : "popup-fade-out"
      } max-w-[95vw] fixed z-[1000] bg-[var(--background)] text-[var(--foreground)] shadow-2xl rounded-2xl border border-solid border-[var(--foreground)]/20 p-8`}
      onAnimationEnd={onAnimationEnd}
      aria-modal="true"
      role="dialog"
    >
      {children}
    </dialog>
  );
}
