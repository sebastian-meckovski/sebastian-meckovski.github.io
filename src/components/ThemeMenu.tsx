"use client";
import { useRef, useState, useEffect } from "react";
import Popup from "./Popup";
import { getCookie } from "@/helpers/cookies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { themes, colorSchemes } from "@/data/theme-config";

export default function ThemeMenu() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<string>("auto");
  const [colorScheme, setColorScheme] = useState<string>("cyan");

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
      setColorScheme("cyan");
      document.documentElement.setAttribute("data-color-scheme", "cyan");
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
    const rootStyles = getComputedStyle(document.documentElement);
    const imageHue = rootStyles.getPropertyValue("--image-hue");
    const grayscale = rootStyles.getPropertyValue("--image-grayscale");
    const value = e.target.value;
    setColorScheme(value);
    document.cookie = `color-scheme=${value}; path=/;`;
    document.documentElement.setAttribute("data-color-scheme", value);

    // Animate image with id 'seb-portrait' before applying filter
    const img = document.getElementById("seb-portrait");
    if (img) {
      const clone = img.cloneNode(true) as HTMLElement;
      img.parentElement?.insertBefore(clone, img.nextSibling);
      clone.style.filter = `hue-rotate(${imageHue}) grayscale(${grayscale})`;
      clone.style.position = "absolute";
      clone.style.top = img.offsetTop + "px";
      clone.style.left = img.offsetLeft + "px";
      clone.style.width = img.offsetWidth + "px";
      clone.style.zIndex = "0";
      img.style.zIndex = "1";

      // img.style.filter = 'none';
      img.classList.add("img-fade");
      img.addEventListener(
        "animationend",
        () => {
          img.classList.remove("img-fade");
          img.style.filter = "";
          img.style.zIndex = "initial";
          clone.remove();
        },
        { once: true }
      );
    }
  }

  return (
    <>
      <button
        ref={buttonRef}
        className="text-[var(--foreground)] h-[2.2rem] md:h-[2rem] 2xl:h-[1.6vw] ml-auto md:ml-[1.6vw] cursor-pointer"
        onClick={() => setOpen((o) => !o)}
        type="button"
        aria-label="Change theme and color scheme"
      >
        <span className="sr-only">Change theme</span>
        <FontAwesomeIcon
          icon={faBrush}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </button>
      <Popup open={open} anchorRef={buttonRef} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-start justify-start h-full">
          <h2 className="text-2xl 2xl:text-[1.4vw] font-semibold my-4">
            Customize Appearance
          </h2>
          <div className="flex flex-col gap-2 2xl:gap-[2vh] items-center justify-start items-start w-full">
            <span className="text-xs 2xl:text-[0.8vw]">Theme:</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 2xl:gap-[0.7vw] mx-auto justify-items-center w-full">
              {themes.map((t) => (
                <label
                  key={t.name}
                  className="flex flex-col items-center gap-2 2xl:gap-[0.8vh] cursor-pointer min-w-[5rem]"
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
                      borderColor:
                        theme === t.name ? "var(--accent)" : undefined,
                    }}
                    className="w-10 h-10 2xl:w-[2.5vw] 2xl:h-[2.5vw] rounded-full border-3 flex items-center justify-center transition-colors m-auto"
                  >
                    <span className="w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></span>
                  </span>
                  <span className="text-xs 2xl:text-[0.8vw]">{t.label}</span>
                </label>
              ))}
            </div>
            <span className="text-xs 2xl:text-[0.8vw]">
              *Auto uses your system theme setting.
            </span>
            <span className="text-xs 2xl:text-[0.8vw]">Accent:</span>
            <div></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 2xl:gap-[0.7vw] mx-auto justify-items-center w-full">
              {colorSchemes.map((c) => (
                <label
                  key={c.name}
                  className="flex flex-col items-center gap-2 2xl:gap-[0.8vh] cursor-pointer min-w-[5rem]"
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
                    className={`w-10 h-10 2xl:w-[2.5vw] 2xl:h-[2.5vw] rounded-full border-3 flex items-center justify-center m-auto`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 mx-2`}
                    ></span>
                  </span>
                  <span
                    className="text-xs 2xl:text-[0.8vw]"
                    style={{ color: c.color }}
                  >
                    {c.label}
                  </span>
                </label>
              ))}
            </div>
            <span className="text-xs 2xl:text-[0.8vw]">
              Settings are saved in your browser&apos;s cookies.
            </span>
          </div>
        </div>
      </Popup>
    </>
  );
}
