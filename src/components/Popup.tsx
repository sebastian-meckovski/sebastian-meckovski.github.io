"use client";
import { useRef, useEffect } from "react";

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
  }, [open, anchorRef]);

  if (!open) return null;

  return (
    <dialog
      ref={popupRef}
      open
      className="popup max-w-[95vw] fixed z-[1000] bg-[var(--background)] text-[var(--foreground)] shadow-lg rounded-xl border p-6"
      aria-modal="true"
      role="dialog"
    >
      {children}
    </dialog>
  );
}
