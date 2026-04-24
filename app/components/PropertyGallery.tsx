"use client";

import Image from "next/image";
import { useState } from "react";

const properties = [
  {
    label: "El Dorado",
    title: "El Dorado",
    price: "Q300,000",
    location: "Km 173 Ruta a Esquipulas, Chiquimula",
    details: [
      { title: "Lotes de 10x20", value: "Q300,000" },
      { title: "Lotes de 10x25", value: "Q375,000" },
      { title: "Enganche desde 10%", value: "Q30,000" },
      { title: "Cuotas desde", value: "Q3,666/mes" },
    ],
    services: ["Agua", "Luz", "Drenajes", "Garita de seguridad", "Calles adoquinadas"],
    amenities: ["Parques infantiles", "Áreas verdes", "Área de piscinas"],
    gallery: [
      { type: "image", src: "/dorado5.jpg" },
      { type: "image", src: "/dorado1.jpg" },
      { type: "image", src: "/dorado2.jpg" },
      { type: "image", src: "/dorado3.jpg" },
      { type: "video", src: "https://www.youtube.com/embed/do2WAEab6_Y" },
      { type: "video", src: "https://www.youtube.com/embed/zGtU7Ph-LKM?si=1-Xz7PapU9lBdHKb" },
    ],
  },
  {
    label: "Verona",
    title: "Verona",
    price: "Q175,000",
    location: "Barrio el Molino, Chiquimula",
    details: [
      { title: "Lotes de 8x18", value: "Q175,000" },
      { title: "Enganche desde 6%", value: "Q10,000" },
      { title: "Financiamiento", value: "1-10 años" },
      { title: "Cuotas desde", value: "Q2,238/mes" },
    ],
    services: ["Agua", "Luz", "Drenajes", "Garita de seguridad", "Muro perimetral", "Calles adoquinadas"],
    amenities: ["Áreas verdes", "Calles amplias", "Seguridad perimetral", "Salon de eventos"],
    gallery: [
      { type: "image", src: "/verona2.jpg" },
      { type: "image", src: "/verona1.jpg" },
      { type: "video", src: "https://www.youtube.com/embed/J5LmJCptL30" },
      { type: "image", src: "/verona3.jpg" },
      { type: "image", src: "/verona4.jpg" },
      { type: "image", src: "/verona5.jpg" },
    ],
  },
  {
    label: "Morales",
    title: "Terreno Morales, Izabal",
    price: "Q20,000/mes",
    location: "km 258 aldea Benque el Amatillo, Morales, Izabal",
    details: [
      { title: "Medidas", value: "20x60 m" },
      { title: "Precio mensual", value: "Q20,000 IVA incluido" },
      { title: "Ideal para", value: "Bodega de distribución" },
      { title: "Incluye", value: "Agua, luz, drenaje, muro, garita" },
    ],
    services: ["Agua", "Luz", "Drenajes", "Muro perimetral"],
    
    gallery: [
      { type: "image", src: "/portada_izabal.jpg" },
      { type: "video", src: "https://www.youtube.com/embed/-IYUZWRRzvU" },
    ],
  },
];

export default function PropertyGallery() {
  const [selected, setSelected] = useState(properties[0]);
  const [activeImage, setActiveImage] = useState(0);
  const [open, setOpen] = useState(false);

  const displayGallery = selected?.gallery ?? [];
  const activeGalleryItem = displayGallery[activeImage] ?? displayGallery[0];
  const displayDetails = selected?.details ?? [];
  const displayServices = selected?.services ?? [];
  const displayAmenities = selected?.amenities ?? [];

  return (
    <>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {properties.map((home) => (
          <article key={home.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <div className="relative overflow-hidden rounded-t-[2rem]">
              <div className="relative aspect-[4/3] w-full bg-slate-200">
                {home.gallery?.[0]?.type === "image" ? (
                  <Image
                    src={home.gallery?.[0]?.src ?? "/verona1.jpg"}
                    alt={home.title}
                    fill
                    loading="eager"
                    quality={100}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : home.gallery?.[0]?.src ? (
                  <iframe
                    src={home.gallery?.[0]?.src ?? ""}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${home.title} video`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-slate-200 text-slate-500">
                    Imagen no disponible
                  </div>
                )}
              </div>
              <div className="absolute left-4 top-4 z-10 rounded-full bg-slate-950/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-sm">
                {home.label}
              </div>
            </div>
            <div className="p-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-950">{home.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{home.location}</p>
              </div>
              <div className="mt-4 text-2xl font-semibold text-amber-500">{home.price}</div>
              <div className="mt-6 grid gap-3 rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 sm:grid-cols-3">
                {(home.details ?? []).slice(0, 3).map((detail) => (
                  <div key={detail.title} className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm">•</span>
                    <span>{detail.value}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelected(home);
                  setActiveImage(0);
                  setOpen(true);
                }}
                className="mt-6 w-full rounded-full border border-amber-500 bg-transparent px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-600 transition hover:bg-amber-50"
              >
                Ver Detalles
              </button>
            </div>
          </article>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Detalle de propiedad</div>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">{selected.title}</h2>
                <p className="mt-2 text-sm text-slate-500">{selected.location}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
              >
                ×
              </button>
            </div>
            <div className="grid gap-6 p-6 lg:grid-cols-[1.8fr_1fr]">
              <div>
                <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-200">
                  <div className="relative h-[420px] w-full">
                    {activeGalleryItem?.type === "image" ? (
                      <Image
                        src={activeGalleryItem.src ?? "/verona1.jpg"}
                        alt={`${selected.title} imagen ${activeImage + 1}`}
                        fill
                        quality={100}
                        sizes="(max-width: 1024px) 90vw, 720px"
                        className="object-cover"
                      />
                    ) : activeGalleryItem?.src ? (
                      <iframe
                        src={activeGalleryItem.src}
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${selected.title} video`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-slate-200 text-slate-500">
                        Imagen no disponible
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {(selected.gallery ?? []).map((item, index) => (
                    <button
                      key={`gallery-item-${index}`}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`relative overflow-hidden rounded-3xl border p-1 transition ${
                        index === activeImage ? "border-amber-500" : "border-slate-200"
                      }`}
                    >
                      <div className="relative h-20 w-28 sm:h-24 sm:w-32">
                        {item.type === "image" ? (
                          <Image
                            src={item.src}
                            alt={`${selected.title} miniatura ${index + 1}`}
                            fill
                            quality={100}
                            sizes="(max-width: 768px) 25vw, 8vw"
                            className="rounded-3xl object-cover"
                          />
                        ) : (
                          <div className="relative h-full w-full overflow-hidden rounded-3xl bg-black">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path fill=\'%23ffffff\' d=\'M8 5v14l11-7z\'/></svg>')] bg-center bg-no-repeat opacity-80" />
                            <div className="absolute inset-0 bg-slate-950/60" />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                    {selected.label}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Precio</p>
                    <p className="mt-2 text-3xl font-semibold text-slate-950">{selected.price}</p>
                  </div>
                  <div className="grid gap-3">
                    {(selected.details ?? []).map((detail) => (
                      <div key={detail.title} className="rounded-3xl bg-white p-4 shadow-sm">
                        <p className="text-sm text-slate-500">{detail.title}</p>
                        <p className="mt-1 text-base font-semibold text-slate-950">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-amber-500">Servicios incluidos</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {(selected.services ?? []).map((service) => (
                        <li key={service}>• {service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-amber-500">Amenidades</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {(selected.amenities ?? []).map((amenity) => (
                        <li key={amenity}>• {amenity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href="https://wa.me/50253541465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Contactar vía WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
