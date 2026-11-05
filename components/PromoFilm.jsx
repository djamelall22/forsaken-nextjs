"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Play, X } from "lucide-react";

const labels = {
  fr: { trigger: "Clip promotionnel", title: "FORSAKEN — Le film", close: "Fermer le film", error: "La vidéo ne peut pas être lue dans ce navigateur.", download: "Ouvrir le fichier vidéo" },
  en: { trigger: "Watch the trailer", title: "FORSAKEN — The film", close: "Close the film", error: "This browser could not play the video.", download: "Open the video file" },
  es: { trigger: "Tráiler promocional", title: "FORSAKEN — La película", close: "Cerrar el vídeo", error: "Este navegador no puede reproducir el vídeo.", download: "Abrir el archivo de vídeo" },
  ko: { trigger: "공식 예고편", title: "FORSAKEN — 예고편", close: "영상 닫기", error: "이 브라우저에서 영상을 재생할 수 없습니다.", download: "영상 파일 열기" },
  ja: { trigger: "プロモーション映像", title: "FORSAKEN — 予告編", close: "映像を閉じる", error: "このブラウザーでは動画を再生できません。", download: "動画ファイルを開く" },
};

export default function PromoFilm({ locale }) {
  const copy = labels[locale];
  const titleId = useId();
  const dialog = useRef(null);
  const video = useRef(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new CustomEvent("forsaken:film", { detail: { open: true } }));
    element.showModal();
    video.current?.play().catch(() => {});
    return () => {
      video.current?.pause();
      element.close();
      document.body.style.overflow = previousOverflow;
      window.dispatchEvent(new CustomEvent("forsaken:film", { detail: { open: false } }));
    };
  }, [open]);

  return <>
    <button className="header-film" onClick={() => { setError(false); setOpen(true); }} aria-haspopup="dialog">
      <Play size={13} strokeWidth={1.5} aria-hidden="true" />
      <span>{copy.trigger}</span>
    </button>
    <dialog ref={dialog} className="film-dialog" aria-labelledby={titleId} onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }}>
      <div className="film-dialog__body">
        <div className="film-dialog__heading"><h2 id={titleId}>{copy.title}</h2><button autoFocus onClick={() => setOpen(false)} aria-label={copy.close}><X size={24} strokeWidth={1.5} /></button></div>
        <video ref={video} src={open ? "/assets/promotion.mp4" : undefined} poster="/assets/castle-enchanted.png" controls playsInline preload="none" aria-label={copy.title} onError={() => setError(true)} />
        {error && <p role="alert">{copy.error} <a href="/assets/promotion.mp4">{copy.download}</a></p>}
      </div>
    </dialog>
  </>;
}
