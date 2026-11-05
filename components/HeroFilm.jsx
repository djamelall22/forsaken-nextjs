"use client";

import { useEffect, useRef } from "react";

const titles = {
  fr: "Le film promotionnel",
  en: "The official trailer",
  es: "El tráiler promocional",
  ko: "공식 예고편",
  ja: "プロモーション映像",
};

export default function HeroFilm({ locale }) {
  const video = useRef(null);

  useEffect(() => {
    const element = video.current;
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotion = enabled => {
      if (enabled) element.play().catch(() => {});
      else element.pause();
    };
    const onPreference = () => applyMotion(!reducedMotion.matches);
    const onMotion = event => applyMotion(event.detail.enabled);
    let resumeAfterDialog = false;
    const onDialog = event => {
      if (event.detail.open) {
        resumeAfterDialog = !element.paused;
        element.pause();
      } else if (resumeAfterDialog && !reducedMotion.matches && document.documentElement.dataset.magic !== "off") {
        element.play().catch(() => {});
      }
    };
    onPreference();
    reducedMotion.addEventListener("change", onPreference);
    window.addEventListener("forsaken:motion", onMotion);
    window.addEventListener("forsaken:film", onDialog);
    return () => {
      element.pause();
      reducedMotion.removeEventListener("change", onPreference);
      window.removeEventListener("forsaken:motion", onMotion);
      window.removeEventListener("forsaken:film", onDialog);
    };
  }, []);

  return <figure className="hero-film">
    <div className="hero-film__frame">
      <video ref={video} src="/assets/promotion.mp4" poster="/assets/castle-enchanted.png" muted loop controls playsInline preload="metadata" aria-label={titles[locale]} />
    </div>
    <figcaption>{titles[locale]}</figcaption>
  </figure>;
}
