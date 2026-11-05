"use client";

import { useEffect, useState } from "react";
import { RELEASE_DATE, RELEASE_TIME_ZONE } from "../lib/release";

const copy = {
  fr: { title: "L’aventure commence dans", units: ["Jours", "Heures", "Minutes", "Secondes"], reached: "Le jour de la sortie est arrivé" },
  en: { title: "The adventure begins in", units: ["Days", "Hours", "Minutes", "Seconds"], reached: "Release day has arrived" },
  es: { title: "La aventura comienza en", units: ["Días", "Horas", "Minutos", "Segundos"], reached: "Ha llegado el día del lanzamiento" },
  ko: { title: "모험이 시작되기까지", units: ["일", "시간", "분", "초"], reached: "출시일이 되었습니다" },
  ja: { title: "冒険の始まりまで", units: ["日", "時間", "分", "秒"], reached: "発売日を迎えました" },
};

export default function ReleaseCountdown({ locale }) {
  const [remaining, setRemaining] = useState(null);
  const labels = copy[locale];

  useEffect(() => {
    const update = () => setRemaining(Math.max(0, Math.ceil((Date.parse(RELEASE_DATE) - Date.now()) / 1000)));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const values = remaining === null ? [null, null, null, null] : [
    Math.floor(remaining / 86400),
    Math.floor(remaining / 3600) % 24,
    Math.floor(remaining / 60) % 60,
    remaining % 60,
  ];
  const dateLabel = new Intl.DateTimeFormat(locale, {
    day: "numeric", month: "long", year: "numeric", timeZone: RELEASE_TIME_ZONE,
  }).format(new Date(RELEASE_DATE));

  return <div className="release-countdown">
    <p className="release-countdown__title">{remaining === 0 ? labels.reached : labels.title}</p>
    <div className="release-countdown__clock" role="timer" aria-live="off" aria-label={labels.title}>
      {values.map((value, index) => <div className="release-countdown__unit" key={labels.units[index]}>
        <span className="release-countdown__number">{value === null ? "—" : String(value).padStart(2, "0")}</span>
        <span className="release-countdown__label">{labels.units[index]}</span>
      </div>)}
    </div>
    <time className="release-countdown__date" dateTime={RELEASE_DATE}>{dateLabel}</time>
  </div>;
}
