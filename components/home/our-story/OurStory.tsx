'use client'

import { TimelineEvent } from "./TimelineEvent";

const events = [
  {
    date: "Junio 2024",
    title: "El Primer Encuentro",
    description: "Todo comenzó siendo vecinos en la Universidad. Con un solo mensaje nació esta hermosa conexión que poco a poco se transformó en una historia única. Lo que parecía coincidencia fue el inicio de un camino lleno de complicidad, sonrisas y mil momentos inolvidables que hoy nos siguen uniendo.  ",
    image: "/story-00.jpg"
  },
  {
    date: "Noviembre 2024",
    title: "primeros desafios",
    description: "Lo que inició con la cercanía y un simple mensaje enfrentó pronto nuevos desafíos: descubrirnos emocional y personalmente, adaptarnos a los cambios y aceptar que el trabajo nos hizo vernos menos de lo habitual. Sin embargo, cada prueba fortaleció nuestro amor y nos preparó para celebrar juntos esta nueva etapa.",
    image: "/story-01.jpg"
  },
  {
    date: "año 2025",
    title: "nuevas etapas",
    description: "En 2025 llegaron los encuentros familiares, nuevas oportunidades de trabajo, mudanzas, graduaciones y el inicio de nuevos estudios. Cada paso, cada cambio y cada logro compartido nos acercó aún más, convirtiendo nuestro camino en una verdadera aventura de crecimiento y amor..",
    image: "/story-02.jpg"
  },
  {
    date: "Mayo 2025",
    title: "La Propuesta",
    description: "Durante una romántica cena al atardecer, Emanuel preparó una sorpresa inolvidable. Con velas y rosas, le pidió a Vanessa que fuera su compañera de vida para siempre.",
    image: "/story-04.jpg"
  }
];

export const OurStory = () => {
  return (
    <section id="story" className="font-cormorant py-16 md:py-24 bg-red-50 dark:bg-red-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-pinyon-script text-red-800 dark:text-red-500">Nuestra Historia</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto px-4">
            Cada gran historia de amor tiene su propio camino, y esta es la nuestra. 
            Un viaje lleno de momentos especiales que nos han traído hasta aquí.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {events.map((event, index) => (
            <TimelineEvent
              key={event.date}
              {...event}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-2xl md:text-3xl font-pinyon-script text-red-800 dark:text-red-500 px-4">
            Y esto es solo el comienzo de nuestra aventura juntos...
          </p>
        </div>
      </div>
    </section>
  );
}