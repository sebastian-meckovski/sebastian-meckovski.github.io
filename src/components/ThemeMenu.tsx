"use client";
import { useRef, useState, useEffect } from "react";
import Popup from "./Popup";
import { getCookie } from "@/helpers/cookies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";

export default function ThemeMenu() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<string>("auto");
  const [colorScheme, setColorScheme] = useState<string>("blue");

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
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-lg font-semibold mb-2">Popup Content</h2>
          <div className="flex flex-col gap-4 items-center">
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
            <div className="flex items-center gap-4">
              <span className="font-medium">Accent:</span>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="color-scheme"
                  value="blue"
                  className="accent-[var(--accent)]"
                  checked={colorScheme === "blue"}
                  onChange={handleColorSchemeChange}
                />
                <span>Blue</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="color-scheme"
                  value="red"
                  className="accent-[var(--accent)]"
                  checked={colorScheme === "red"}
                  onChange={handleColorSchemeChange}
                />
                <span>Red</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="color-scheme"
                  value="green"
                  className="accent-[var(--accent)]"
                  checked={colorScheme === "green"}
                  onChange={handleColorSchemeChange}
                />
                <span>Green</span>
              </label>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}
