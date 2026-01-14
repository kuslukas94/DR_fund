import { Clock, Heart, Users, Briefcase, Scale, Palette, Camera, Megaphone, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Footer } from '../components/Footer';

const volunteerAreas = [
  {
    icon: <Scale className="h-6 w-6" />,
    title: 'Právní poradenství',
    description: 'Pomoc s právními záležitostmi, smlouvami a legislativou',
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: 'Organizace akcí',
    description: 'Pomoc při pořádání speciálních akcí divadla',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Hledištní podpora',
    description: 'Asistence při představeních, v šatně nebo v hledišti',
  },
];

const benefits = [
  'Volné vstupenky na vybraná představení',
  'Pozvánky na premiéry a speciální akce',
  'Certifikát o dobrovolnické činnosti',
  'Networking s profesionály z kulturní sféry',
];

export function VolunteersPage() {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dobrovolníci</h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              Darujte svůj čas a talent.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Introduction */}
          <section className="mb-16 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-5">
              Radost netvoří jen herci na jevišti, ale celé soukolí dovedností a nápadů. 
              Pokud cítíte, že byste nám mohli pomoci svými profesními zkušenostmi nebo volným časem, 
              budeme rádi, když se stanete součástí našeho týmu. Vaše expertíza je pro nás darem, 
              který nám dává svobodu tvořit a rozvíjet se tam, kde by nám samotným chyběly síly 
              nebo specializované know-how.
            </p>
            <br />
            <p className="text-lg text-gray-700">
              Hledáme dobrovolníky z různých oborů, kteří by nám pomohli rozšířit naše aktivity 
              a zlepšit provoz divadla. Vaše odborné znalosti mohou mít obrovský dopad.
            </p>
          </section>

          {/* Engagement Levels */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Úrovně zapojení v naší komunitě
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-10">
              V rámci naší komunity rozlišujeme dvě úrovně zapojení, aby si každý našel formu, která mu sedí.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-teal-200 rounded-xl p-6 bg-white shadow-sm">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                    Přítel zákulisí
                  </span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pro koho</h3>
                    <p>
                      Pro ty, kteří nám chtějí pomoci nárazově nebo v menším rozsahu (např. pomoc při akcích,
                      drobná administrativa nebo manuální výpomoc).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Poděkování od nás</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li className="list-item">
                        <span className="inline-flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Základní sada vstupenek za symbolickou cenu 50 Kč</span>
                        </span>
                      </li>
                      <li className="list-item">
                        <span className="inline-flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Certifikát o spolupráci</span>
                        </span>
                      </li>
                      <li className="list-item">
                        <span className="inline-flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Veřejné poděkování na webu</span>
                        </span>
                      </li>
                      <li className="list-item">
                        <span className="inline-flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Přístup k exkluzivním informacím ze zákulisí v newsletteru</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border border-teal-200 rounded-xl p-6 bg-white shadow-sm">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                    Spřátelený tvůrce
                  </span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pro koho</h3>
                    <p>
                      Pro odborníky a experty, kteří nám věnují své znalosti ve větší míře (např. IT podpora,
                      marketingové konzultace, odborné texty, právní či technické rady).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Poděkování od nás</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li className="list-item">
                        <span className="inline-flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Rozšířená sada vstupenek za symbolickou cenu 50 Kč</span>
                        </span>
                      </li>
                      <li className="list-item">
                        <span className="inline-flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Certifikát o spolupráci</span>
                        </span>
                      </li>
                      <li className="list-item">
                        <span className="inline-flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Veřejné poděkování na webu</span>
                        </span>
                      </li>
                      <li className="list-item">
                        <span className="inline-flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Přístup k exkluzivním informacím ze zákulisí v newsletteru</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Proč do toho jít s námi?
              </h3>
              <p className="text-gray-700 text-lg max-w-4xl mx-auto text-center">
                Nenabízíme jen „práci zdarma“. Nabízíme vám možnost nahlédnout za oponu instituce se 75letou tradicí,
                stát se součástí komunity lidí, kterým záleží na kultuře i pro ty nejmenší, a mít zásadní podíl na tom, že Radost
                zůstává živým a inspirativním místem pro další generace dětí i dospělých.
              </p>
              <p className="text-gray-700 text-lg max-w-4xl mx-auto text-center mt-5">
                Zaujala vás možnost expertního dobrovolnictví? Napište nám krátce o sobě a o tom, co by vás v divadle
                zajímalo. Rádi se s vámi potkáme a probereme, jak můžeme společně vytvářet prostor pro příběhy, které si
                lidé pamatují.
              </p>
            </div>
          </section>

          {/* Volunteer Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Jak můžete pomoci
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteerAreas.map((area, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="inline-flex p-3 rounded-lg bg-teal-100 text-teal-600 mb-4">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Nenašli jste svůj obor?{' '}
                <a href="#dobrovolnici-cta" className="text-teal-600 hover:text-teal-700">
                  Kontaktujte nás
                </a>{' '}
                – rádi probereme možnosti spolupráce!
              </p>
            </div>
          </section>

          {/* Ambassador Section */}
          <section className="mb-16 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                    Ambasador dobrovolnického programu
                  </span>
                </div>
                <div className="relative mb-6">
                  <blockquote className="pl-10 text-xl italic text-gray-700">
                    "Jako advokát na pracovní právo jsem měl možnost pomoci divadlu s právními záležitostmi. 
                    Do Radosti chodím s dětmi a mám radost, že mohu pomoci svým know-how."
                  </blockquote>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">JUDr. Jméno Příjmení</p>
                  <p className="text-teal-600">Advokát, dobrovolník od roku 2020</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NzU2NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="JUDr. Jméno Příjmení"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="dobrovolnici-cta" className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Připraveni darovat svůj čas?</h2>
            <br />
            <a
              href="mailto:kus@divadlo-radost.cz"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg bg-white text-teal-600 hover:bg-teal-50 transition-colors"
            >
              Kontaktovat
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}






