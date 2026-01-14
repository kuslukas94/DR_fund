import { Mail, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kontaktujte nás
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Máte otázky ohledně příspěvků nebo partnerství? Rádi vám zodpovíme 
              všechny dotazy a pomůžeme vám najít způsob podpory, který vám nejvíce vyhovuje.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900">E-mail</p>
                  <a 
                    href="mailto:podpora@divadelni-scena.cz" 
                    className="text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    kus@divadlo-radost.cz
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Telefon</p>
                  <a 
                    href="tel:+420123456789" 
                    className="text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    +420 730 870 373
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Adresa</p>
                  <p className="text-gray-600">
                    Bratislavská 216/32<br />
                    602 00 Brno
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1636990536161-710184e1047f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwZGlyZWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc2OTM4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vedení divadla"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="font-semibold text-gray-900">Lukáš Kus</p>
              <p className="text-sm text-gray-600">Zástupce ředitele</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
