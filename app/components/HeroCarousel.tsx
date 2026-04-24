"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/dorado1.jpg",
    alt: "Fachada moderna de una casa de lujo iluminada de noche",
  },
  {
    src: "/dorado2.jpg",
    alt: "Pool house con iluminación cálida y arquitectura elegante",
  },
  {
    src: "/dorado3.jpg",
    alt: "Interior elegante con vista amplia y decoración sofisticada",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="relative min-h-[760px] sm:min-h-[840px] lg:min-h-[900px]">
        <Image
          src={slides[active].src}
          alt={slides[active].alt}
          fill
          quality={100}
          sizes="100vw"
          className="object-cover transition duration-1000 ease-out"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-slate-950/10 to-slate-950/80" />

        <header className="absolute inset-x-0 top-0 z-30">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
            <a href="#" className="flex items-center gap-3 font-semibold text-white">
              <div className="relative h-12 w-12 overflow-hidden rounded-3xl bg-white/10 shadow-lg">
                <Image
                  src="/logo_bienestar_inmobiliario.png"
                  alt="Logo Bienestar Inmobiliario"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="text-sm uppercase tracking-[0.22em]">Bienestar Inmobiliario</span>
            </a>
            <nav className="hidden gap-8 text-sm font-medium text-slate-100 md:flex">
              <a href="#propiedades" className="transition hover:text-white">Propiedades</a>
              <a href="#testimonios" className="transition hover:text-white">Testimonios</a>
              <a href="#ubicaciones" className="transition hover:text-white">Ubicaciones</a>
            </nav>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white transition hover:bg-slate-800 md:hidden"
              aria-label="Abrir menú móvil"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="flex h-full w-full flex-col items-center justify-center gap-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
              </span>
            </button>
          </div>
          {menuOpen && (
            <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 backdrop-blur-md md:hidden">
              <div className="flex flex-col gap-4 text-sm font-medium text-slate-100">
                <a href="#propiedades" onClick={() => setMenuOpen(false)} className="transition hover:text-white">
                  Propiedades
                </a>
                <a href="#testimonios" onClick={() => setMenuOpen(false)} className="transition hover:text-white">
                  Testimonios
                </a>
                <a href="#ubicaciones" onClick={() => setMenuOpen(false)} className="transition hover:text-white">
                  Ubicaciones
                </a>
              </div>
            </div>
          )}
        </header>

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-28 pb-12 sm:px-8 lg:px-12 lg:pt-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-amber-300 shadow-sm shadow-black/20">
              Propiedades Premium 2026
            </span>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl font-display">
              Tu Hogar, <span className="text-amber-400">Tu Bienestar</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
              Propiedades exclusivas seleccionadas para ti. Más de 15 años conectando familias con los mejores inmuebles del país.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#propiedades"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:bg-amber-400"
              >
                Explorar Propiedades
              </a>
              <a
                href="https://wa.me/50253541465"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Hablar con un asesor
              </a>
            </div>
            <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 text-center text-white sm:max-w-2xl">
              <div>
                <span className="block text-3xl font-semibold">500+</span>
                <span className="mt-2 block text-sm text-slate-200">Ventas</span>
              </div>
              <div>
                <span className="block text-3xl font-semibold">15</span>
                <span className="mt-2 block text-sm text-slate-200">Años</span>
              </div>
              <div>
                <span className="block text-3xl font-semibold">98%</span>
                <span className="mt-2 block text-sm text-slate-200">Satisfacción</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-4 px-6 sm:px-8">
          <div className="flex items-center gap-2 rounded-full bg-slate-950/60 px-4 py-3 text-sm text-slate-100 shadow-2xl shadow-black/30 backdrop-blur">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  active === index ? "bg-amber-400" : "bg-slate-400/60"
                }`}
                onClick={() => setActive(index)}
                aria-label={`Ver imagen ${index + 1}`}
                type="button"
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setActive((current) => (current - 1 + slides.length) % slides.length)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 text-white shadow-lg transition hover:bg-slate-800"
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setActive((current) => (current + 1) % slides.length)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 text-white shadow-lg transition hover:bg-slate-800"
              aria-label="Siguiente imagen"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
