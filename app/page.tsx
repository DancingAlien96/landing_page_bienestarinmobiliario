import HeroCarousel from "./components/HeroCarousel";
import LocationsSection from "./components/LocationsSection";
import PropertyGallery from "./components/PropertyGallery";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-950">
      <main className="overflow-hidden">
        <HeroCarousel />

        <section id="propiedades" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-500">Selección Curada</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Propiedades Exclusivas</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Descubre nuestra selección de inmuebles premium en las mejores ubicaciones de la ciudad.
              </p>
            </div>
            <PropertyGallery />
          </div>
        </section>

        <section id="testimonios" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-500">Clientes Satisfechos</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Lo Que Dicen Nuestros Clientes</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Experiencias reales de familias que encontraron su hogar ideal con nosotros.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                { quote:'Bienestar Inmobiliario superó todas mis expectativas. Encontraron el penthouse perfecto en tiempo récord. Su servicio personalizado y conocimiento del mercado son incomparables.', name:'Carlos Mendoza' },
                { quote:'La atención fue excepcional desde el primer contacto. Lograron entender exactamente lo que buscaba y me presentaron propiedades que jamás hubiera encontrado por mi cuenta.', name:'Gabriela Torres' },
                { quote:'Invertí en tres propiedades con su asesoría y el retorno ha sido excelente. Son verdaderos expertos en el mercado premium.', name:'Roberto Jiménez' },
              ].map((testimonial) => (
                <article key={testimonial.name} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <p className="text-slate-700">“{testimonial.quote}”</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-slate-200" />
                    <div>
                      <p className="font-semibold text-slate-950">{testimonial.name}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <LocationsSection />

        <footer className="bg-slate-950 py-12 text-slate-300">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.8fr]">
              <div>
                <div className="mb-4 text-2xl font-semibold text-white">Bienestar Inmobiliario</div>
                <p className="max-w-sm text-sm leading-7">
                  Tu hogar, tu bienestar. Más de 8   años conectando familias con los inmuebles de sus sueños.
                </p>
              </div>
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">Explorar</p>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li>Propiedades en Venta</li>
                  <li>Propiedades en Renta</li>
                  <li>Desarrollos Nuevos</li>
                  <li>Inversiones</li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">Servicios</p>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li>Asesoría Personalizada</li>
                  <li>Valuación Gratuita</li>
                  <li>Documentación legal</li>
                  <li>Consultoría Legal</li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">Contáctanos</p>
                <div className="space-y-3 text-sm text-slate-400">
                  <p>+502 5354 1465</p>
                  <p>contacto@bienestarinmobiliario.mx</p>
                  <p>Km 173 Ruta a Esquipulas, Chiquimula</p>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
              © 2026 Bienestar Inmobiliario. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
