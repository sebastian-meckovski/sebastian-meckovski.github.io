"use client";
import { useRef, useState } from "react";
import Popup from "./Popup";

export default function HeaderPopupButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        ref={buttonRef}
        className="px-4 py-2 rounded bg-[var(--accent)] text-white font-bold shadow"
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        Open Popup
      </button>
      <Popup
        open={open}
        anchorRef={buttonRef}
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-lg font-semibold mb-2">Popup Content</h2>
          <p>This is a client-side rendered popup.</p>
        </div>
      </Popup>
    </>
  );
}
