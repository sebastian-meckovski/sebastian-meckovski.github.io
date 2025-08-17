"use client";
import { useRef, useState, useEffect } from "react";
import Popup from "./Popup";
import { getCookie } from "@/helpers/cookies";

export default function HeaderPopupButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<string>("auto");

  // Read theme from cookie on mount
  useEffect(() => {
    const cookieValue = getCookie("theme");
    console.log("Current theme:", cookieValue);
    if (cookieValue) {
      setTheme(cookieValue);
    } else {
      setTheme("auto");
    }
  }, []);

  // Handle theme change and cookie
  function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setTheme(value);
    if (value === "auto") {
      document.cookie =
        "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.cookie = `theme=${value}; path=/;`;
      document.documentElement.setAttribute("data-theme", value);
    }
  }

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
      <Popup open={open} anchorRef={buttonRef} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-lg font-semibold mb-2">Popup Content</h2>
          <div className="flex items-center gap-4">
            <span className="font-medium">Theme:</span>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="light"
                className="accent-[var(--accent)]"
                checked={theme === "light"}
                onChange={handleThemeChange}
              />
              <span>Light</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="dark"
                className="accent-[var(--accent)]"
                checked={theme === "dark"}
                onChange={handleThemeChange}
              />
              <span>Dark</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="auto"
                className="accent-[var(--accent)]"
                checked={theme === "auto"}
                onChange={handleThemeChange}
              />
              <span>Auto</span>
            </label>
          </div>
        </div>
      </Popup>
    </>
  );
}
