import { useState } from 'react';
import { Building2, Users, Heart } from 'lucide-react';
import { Footer } from '../components/Footer';

const corporatePartners = [
  { name: 'Česká pojišťovna', tier: 'Strategický partner', year: 'od roku 2026' },
  { name: 'Škoda Auto', tier: 'Tvůrce příběhu', year: 'od roku 2026' },
  { name: 'Vodafone', tier: 'Patron inscenace', year: 'od roku 2026' },
  { name: 'ČEZ', tier: 'Přítel Radosti', year: 'od roku 2026' },
  { name: 'Pražská plynárenská', tier: 'Přítel Radosti', year: 'od roku 2026' },
  { name: 'Komerční banka', tier: 'Přítel Radosti', year: 'od roku 2026' },
];

const patronClubMembers = [
  { name: 'Ing. Pavel Novák', tier: 'Tvůrce loutek' },
  { name: 'MUDr. Marie Svobodová', tier: 'Tvůrce loutek' },
  { name: 'Bc. Jiří Dvořák', tier: 'Tvůrce loutek' },
  { name: 'Mgr. Anna Procházková', tier: 'Patron pohádek' },
  { name: 'Ing. Tomáš Černý', tier: 'Patron pohádek' },
  { name: 'JUDr. Eva Novotná', tier: 'Patron pohádek' },
  { name: 'PhDr. Jan Kovář', tier: 'Mistr marionet' },
  { name: 'Mgr. Petra Horáková', tier: 'Mistr marionet' },
  { name: 'Bc. Martin Veselý', tier: 'Mistr marionet' },
  { name: 'Ing. Lucie Malá', tier: 'Loutkářský učedník' },
];

const oneTimeDonors = [
  'Roman Beneš', 'Kateřina Urbanová', 'David Kučera', 'Jana Pokorná',
  'Michal Jelínek', 'Barbora Marková', 'Petr Šťastný', 'Lenka Soukupová',
  'Jakub Fiala', 'Tereza Němcová', 'Ondřej Král', 'Veronika Blažková',
  'Filip Doležal', 'Nikola Stejskalová', 'Adam Růžička', 'Kristýna Konečná',
];

export function SupportersPage() {
  const [activeTab, setActiveTab] = useState<'club' | 'corporate' | 'oneTime'>('club');
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-pink-600 to-rose-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Podporují nás</h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
              Děkujeme všem, kteří nám pomáhají vytvářet nezapomenutelné divadelní zážitky
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => setActiveTab('club')}
                className={`px-6 py-3 rounded-full border-2 text-sm font-semibold transition-colors ${
                  activeTab === 'club'
                    ? 'bg-white text-rose-600 border-white'
                    : 'border-rose-200 text-white hover:bg-rose-500'
                }`}
              >
                Členové Mecenášského klubu
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('corporate')}
                className={`px-6 py-3 rounded-full border-2 text-sm font-semibold transition-colors ${
                  activeTab === 'corporate'
                    ? 'bg-white text-rose-600 border-white'
                    : 'border-rose-200 text-white hover:bg-rose-500'
                }`}
              >
                Firemní partneři
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('oneTime')}
                className={`px-6 py-3 rounded-full border-2 text-sm font-semibold transition-colors ${
                  activeTab === 'oneTime'
                    ? 'bg-white text-rose-600 border-white'
                    : 'border-rose-200 text-white hover:bg-rose-500'
                }`}
              >
                Jednorázoví dárci
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Corporate Partners Section */}
          {activeTab === 'corporate' && (
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Building2 className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Firemní partneři</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corporatePartners.map((partner, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-sm text-purple-600 font-medium mb-1">{partner.tier}</p>
                  <p className="text-sm text-gray-500">{partner.year}</p>
                </div>
              ))}
            </div>
          </section>
          )}

          {/* Patron Club Members Section */}
          {activeTab === 'club' && (
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Users className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Členové Mecenášského klubu</h2>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {patronClubMembers.map((member, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{member.name}</p>
                      <p className="text-sm text-indigo-600">{member.tier}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          )}

          {/* One-Time Donors Section */}
          {activeTab === 'oneTime' && (
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Heart className="h-8 w-8 text-rose-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Jednorázový dárci</h2>
            </div>
            <div className="bg-rose-50 rounded-lg p-8">
              <p className="text-gray-700 mb-6">
                Děkujeme všem, kteří podpořili naše divadlo jednorázovým příspěvkem. 
                Každý dar nám pomáhá přinášet kvalitní umění.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {oneTimeDonors.map((donor, index) => (
                  <div key={index} className="text-gray-800">
                    {donor}
                  </div>
                ))}
              </div>
            </div>
          </section>
          )}

          {/* Call to Action */}
          <section className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Staňte se součástí naší komunity</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Vaše podpora pomáhá udržet živé umění dostupné pro všechny
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {activeTab === 'corporate' ? (
                <>
                  <a
                    href="mailto:kus@divadlo-radost.cz"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-600 transition-colors"
                  >
                    Kontakt
                  </a>
                  <a
                    href="/firemni-partnerstvi"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md bg-white text-indigo-600 hover:bg-indigo-50 transition-colors"
                  >
                    Firemní partnerství
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-600 transition-colors"
                  >
                    Příspět jednorázově
                  </a>
                  <a
                    href="/mecenassky-klub"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md bg-white text-indigo-600 hover:bg-indigo-50 transition-colors"
                  >
                    Připojit se ke klubu
                  </a>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

