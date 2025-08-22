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

  const themes = [
    { name: "light", backgroundColor: "#ffffff" },
    { name: "dark", backgroundColor: "#000000" },
    {
      name: "auto",
      backgroundColor: "linear-gradient(#ffffff 50%, #000000 50%)",
    },
  ] as const;

  const colorSchemes = [
    { name: "blue", color: "#00bcd4" },
    { name: "red", color: "#ff3b30" },
    { name: "green", color: "#2ecc40" },
  ] as const;

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
          <h2 className="text-xl font-semibold my-4">Customize Appearance</h2>
          <div className="flex flex-col gap-4 items-center justify-start items-start">
            <span className="font-medium">Theme:</span>
            <div className="flex items-center gap-2 flex-wrap">
              {themes.map((t) => (
                <label
                  key={t.name}
                  className="flex flex-col items-center gap-2 cursor-pointer min-w-[3rem]"
                >
                  <input
                    type="radio"
                    name="theme"
                    value={t.name}
                    className="sr-only peer"
                    checked={theme === t.name}
                    onChange={handleThemeChange}
                  />
                  <span
                      style={{
                        background: t.backgroundColor,
                        borderColor: theme === t.name ? 'var(--accent)' : undefined,
                      }}
                      className="w-10 h-10 rounded-full border-3 flex items-center justify-center transition-colors m-auto"
                  >
                    <span className="w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></span>
                  </span>
                  <span>
                    {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
                  </span>
                </label>
              ))}
            </div>
            <p className="text-xs">Auto uses your system setting.</p>
            <span className="font-medium">Accent:</span>
            <div className="flex items-center gap-2 flex-wrap">
              {colorSchemes.map((c) => (
                <label
                  key={c.name}
                  className="flex flex-col items-center gap-2 cursor-pointer min-w-[3rem]"
                >
                  <input
                    type="radio"
                    name="color-scheme"
                    value={c.name}
                    className="sr-only peer"
                    checked={colorScheme === c.name}
                    onChange={handleColorSchemeChange}
                  />
                  <span
                    style={{
                      borderColor: c.color,
                      backgroundColor:
                        colorScheme === c.name ? c.color : "transparent",
                    }}
                    className={`w-10 h-10 rounded-full border-3 flex items-center justify-center m-auto`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 mx-2`}
                    ></span>
                  </span>
                  <span style={{ color: c.color }}>
                    {c.name.charAt(0).toUpperCase() + c.name.slice(1)}
                  </span>
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
