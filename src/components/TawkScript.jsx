"use client";

import { useEffect } from "react";

export default function TawkScript({ propertyId, widgetId }) {
  useEffect(() => {
    if (!propertyId || !widgetId) return;
    if (document.getElementById("tawk-messenger-script")) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.id = "tawk-messenger-script";
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    s0?.parentNode?.insertBefore(s1, s0);
  }, [propertyId, widgetId]);

  return null;
}

