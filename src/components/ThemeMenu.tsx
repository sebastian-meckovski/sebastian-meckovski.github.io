"use client";
import { useRef, useState, useEffect } from "react";
import Popup from "./Popup";
import { getCookie } from "@/helpers/cookies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush, faClose } from "@fortawesome/free-solid-svg-icons";

export default function ThemeMenu() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<string>("auto");
  const [colorScheme, setColorScheme] = useState<string>("blue");

  const themes = ["light", "dark", "auto"] as const;
  const colorSchemes = ["blue", "red", "green"] as const;

  // Read theme and color-scheme from cookies on mount
  useEffect(() => {
    const themeCookie = getCookie("theme");
    if (themeCookie) {
      setTheme(themeCookie);
    } else {
      setTheme("auto");
    }
    const colorSchemeCookie = getCookie("color-scheme");
    if (colorSchemeCookie) {
      setColorScheme(colorSchemeCookie);
      document.documentElement.setAttribute(
        "data-color-scheme",
        colorSchemeCookie
      );
    } else {
      setColorScheme("blue");
      document.documentElement.setAttribute("data-color-scheme", "blue");
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

  // Handle color scheme change and cookie
  function handleColorSchemeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setColorScheme(value);
    document.cookie = `color-scheme=${value}; path=/;`;
    document.documentElement.setAttribute("data-color-scheme", value);
  }

  return (
    <>
      <button
        ref={buttonRef}
        className="text-[var(--foreground)] h-10 md:h-6 ml-auto md:ml-2 cursor-pointer"
        onClick={() => setOpen((o) => !o)}
        type="button"
        aria-label="Change theme and color scheme"
      >
        <span className="sr-only">Change theme</span>
        <FontAwesomeIcon
          icon={faBrush}
          className="max-h-full max-w-full"
          size="3x"
        />
      </button>
      <Popup open={open} anchorRef={buttonRef} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-start justify-start h-full">
          <button
            type="button"
            aria-label="Close popup"
            className="absolute top-4 right-4 text-[var(--foreground)] hover:text-[var(--accent)]"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close</span>
            <FontAwesomeIcon icon={faClose} size="2x" />
          </button>
          <h2 className="text-xl font-semibold mt-6 mb-4 text">
            Customize Appearance
          </h2>
          <div className="flex flex-col gap-4 items-center justify-start items-start">
            <div className="flex items-center gap-4">
              <span className="font-medium">Theme:</span>
              {themes.map((t) => (
                <label
                  key={t}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="theme"
                    value={t}
                    className="accent-[var(--accent)]"
                    checked={theme === t}
                    onChange={handleThemeChange}
                  />
                  <span>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                </label>
              ))}
            </div>
            <p className="text-xs">Auto uses your system setting.</p>
            <div className="flex items-center gap-4">
              <span className="font-medium">Accent:</span>
              {colorSchemes.map((c) => (
                <label
                  key={c}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="color-scheme"
                    value={c}
                    className="accent-[var(--accent)]"
                    checked={colorScheme === c}
                    onChange={handleColorSchemeChange}
                  />
                  <span>{c.charAt(0).toUpperCase() + c.slice(1)}</span>
                </label>
              ))}
            </div>
            <p className="text-xs">
              Settings are saved in your browser&apos;s cookies.
            </p>
          </div>
        </div>
      </Popup>
    </>
  );
}
