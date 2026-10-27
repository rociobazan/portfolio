"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ProjectImage } from "@/data/types";

type Props = {
  projectName: string;
  images: ProjectImage[];
};

const iconButton =
  "grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25";

export function ProjectGallery({ projectName, images }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);

  const total = images.length;
  const current = images[index];
  const go = (step: number) => setIndex((i) => (i + step + total) % total);

  function open(i: number) {
    setIndex(i);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  }

  // Deslizar con el dedo en el celular.
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => open(0)}
        aria-label={`Abrir galería de ${projectName} (${total} capturas)`}
        className="group relative block aspect-video w-full overflow-hidden rounded-xl border border-border bg-background"
      >
        <Image
          src={images[0].src}
          alt={images[0].caption}
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-end justify-between bg-linear-to-t from-black/60 via-black/0 p-3 text-sm font-semibold text-white">
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="9" cy="10" r="2" />
              <path d="M21 16l-5-5-9 9" />
            </svg>
            Ver galería
          </span>
          <span className="rounded-full bg-black/40 px-2 py-0.5 text-xs">1 / {total}</span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`Galería de ${projectName}`}
        onKeyDown={onKeyDown}
        // Cerrar al tocar el fondo oscuro, fuera del contenido.
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        <div
          className="flex h-full flex-col items-center justify-center gap-4 p-4"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div className="flex w-full max-w-5xl items-center justify-between text-white">
            <p className="text-sm font-semibold">
              {projectName} <span className="font-normal text-white/70">· {index + 1} / {total}</span>
            </p>
            <button type="button" onClick={close} aria-label="Cerrar galería" className={iconButton}>
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="flex w-full max-w-5xl items-center gap-2">
            {total > 1 && (
              <button type="button" onClick={() => go(-1)} aria-label="Captura anterior" className={`${iconButton} hidden sm:grid`}>
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            <figure
              className="relative aspect-video max-h-[65dvh] flex-1"
              onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
              onTouchEnd={onTouchEnd}
            >
              <Image
                key={current.src}
                src={current.src}
                alt={current.caption}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="rounded-lg object-contain"
              />
            </figure>

            {total > 1 && (
              <button type="button" onClick={() => go(1)} aria-label="Captura siguiente" className={`${iconButton} hidden sm:grid`}>
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}
          </div>

          <p aria-live="polite" className="max-w-2xl text-center text-sm text-white/90">
            {current.caption}
          </p>

          {total > 1 && (
            <ul className="flex max-w-full gap-2 overflow-x-auto p-1">
              {images.map((img, i) => (
                <li key={img.src}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Ver captura ${i + 1}: ${img.caption}`}
                    aria-current={i === index}
                    className={`relative block h-12 w-20 overflow-hidden rounded-md border-2 transition-opacity sm:h-14 sm:w-24 ${
                      i === index ? "border-pink opacity-100" : "border-transparent opacity-50 hover:opacity-90"
                    }`}
                  >
                    <Image src={img.src} alt="" fill sizes="96px" className="object-cover object-top" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <p className="text-xs text-white/60 sm:hidden">Deslizá para ver más capturas</p>
        </div>
      </dialog>
    </>
  );
}
