"use client";

import { useState } from "react";

const locations = [
  {
    id: "verona",
    label: "Verona",
    description: "14°46'56.64\"N 89°33'30.79\"W",
    mapQuery: "14.7824,-89.55855",
  },
  {
    id: "dorado",
    label: "El Dorado",
    description: "QF7G+VW Chiquimula",
    mapQuery: "QF7G+VW Chiquimula",
  },
];

export default function LocationsSection() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(selectedLocation.mapQuery)}&z=15&output=embed`;

  return (
    <section id="ubicaciones" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-500">Nuestras Zonas</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Ubicaciones Estratégicas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Selecciona una ubicación para ver el mapa exacto y conocer los principales puntos de interés.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {locations.map((location) => (
              <button
                key={location.id}
                type="button"
                onClick={() => setSelectedLocation(location)}
                className={`flex items-center justify-between rounded-3xl border px-6 py-5 text-left transition ${
                  selectedLocation.id === location.id
                    ? "border-amber-300 bg-amber-50"
                    : "border-slate-200 bg-white hover:border-amber-300"
                }`}
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-500">{location.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{location.description}</p>
                </div>
                <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">Ver</span>
              </button>
            ))}
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative h-[420px] w-full">
              <iframe
                src={mapSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación ${selectedLocation.label}`}
              />
            </div>
            <div className="space-y-4 p-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-slate-950/95 px-4 py-2 text-sm text-white">
                <span className="text-amber-300">{selectedLocation.label}</span>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-700">
                Visualiza la ubicación exacta de {selectedLocation.label} en el mapa. Usa las coordenadas o el código Plus para encontrarla fácilmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
