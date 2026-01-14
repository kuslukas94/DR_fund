import { Quote, Heart } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      quote: "Podpora tohoto divadla je jedna z nejobohacujících věcí, které dělám. Sledovat mladé lidi, jak objevují svou vášeň pro umění, je k nezaplacení.",
      author: "Petra Nováková (příklad)",
      role: "Loutkářský učedník od roku 2026",
      type: "recurring"
    },
    {
      quote: "Představení zde se vyrovnají čemukoli, co byste viděli ve velkých městech. Jsem hrdý, že mohu pomoci udržet tento kulturní klenot v naší komunitě.",
      author: "Martin Svoboda (příklad)",
      role: "Patron divadelní magie",
      type: "recurring"
    },
    {
      quote: "Jako rodič jsem viděl, jak programy pro mládež proměnily sebevědomí mé dcery. Toto divadlo mění životy.",
      author: "Jana Dvořáková (příklad)",
      role: "Mistr marionet",
      type: "recurring"
    },
    {
      quote: "Byla jsem na úžasném představení a rozhodla jsem se přispět. Chtěla jsem poděkovat za krásný zážitek a podpořit další tvorbu.",
      author: "Lucie Horáková (příklad jednorázového,půjde-li)",
      role: "Jednorázový dar 1 000 Kč",
      type: "one-time"
    },
    {
      quote: "Divadlo je důležitou součástí naší kultury. Jsem rád, že jsem mohl přispět k zachování kvalitního umění pro další generace.",
      author: "Tomáš Veselý (příklad jednorázového,půjde-li)",
      role: "Jednorázový dar 2 000 Kč",
      type: "one-time"
    },
    {
      quote: "Vnučka mě vzala na představení a bylo to nádherné. Chtěla jsem vyjádřit svou vděčnost a přispět malým darem.",
      author: "Marie Procházková (příklad jednorázového,půjde-li)",
      role: "Jednorázový dar 500 Kč",
      type: "one-time"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Proč přispívají další</h2>
          <p className="text-gray-600">Připojte se ke komunitě našich podporovatelů</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm relative">
              {testimonial.type === 'one-time' && (
                <div className="absolute top-4 right-4">
                  <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
                </div>
              )}
              <Quote className="w-8 h-8 text-purple-300 mb-4" />
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <div className="text-purple-900">{testimonial.author}</div>
                <div className={`text-sm ${testimonial.type === 'one-time' ? 'text-rose-600' : 'text-gray-500'}`}>
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}