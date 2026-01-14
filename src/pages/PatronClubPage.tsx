import { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Crown, Gem, Award, Sparkles } from 'lucide-react';
import { Footer } from '../components/Footer';

interface PatronTier {
  id: string;
  name: string;
  amountText: string;
  periodText?: string;
  icon: React.ReactNode;
  benefits: string[];
  color: string;
}

const patronTiers: PatronTier[] = [
  {
    id: 'divadelni-nadsenec',
    name: 'Divadelní nadšenec',
    amountText: '200+ Kč měsíčně | 2 400+ Kč ročně',
    icon: <Award className="h-6 w-6" />,
    color: 'amber',
    benefits: [
      'Potvrzení o daru uplatnitelné v daňovém přiznání (automatizováno přes portál Darujme.cz)',
      'Uvedení jména na webu (se souhlasem dárce)',
      'Pravidelné informace o dění v zákulisí divadla (newsletter pro mecenáše)',
      '1x pozvání na každoroční setkání dárců (1 osoba)',
      '1x roční shrnutí toho, jaký měly dary dopad',
    ],
  },
  {
    id: 'loutkarsky-ucenik',
    name: 'Loutkářský učedník',
    amountText: '500+ Kč měsíčně | 6 000+ Kč ročně',
    icon: <Star className="h-6 w-6" />,
    color: 'gray',
    benefits: [
      'Potvrzení o daru uplatnitelné v daňovém přiznání (automatizováno přes portál Darujme.cz)',
      'Uvedení jména na webu (se souhlasem dárce)',
      'Pravidelné informace o dění v zákulisí divadla (newsletter pro mecenáše)',
      '1x pozvání na každoroční setkání dárců (1+1 osoba)',
      '1x roční shrnutí toho, jaký měly dary dopad',
      '1x prohlídka Divadla Radost pro 1 osobu (v rámci skupiny 20-25 lidí v předem vypsaných termínech)',
    ],
  },
  {
    id: 'ozivovatel-loutek',
    name: 'Oživovatel loutek',
    amountText: '800+ Kč měsíčně | 9 600+ Kč ročně',
    icon: <Crown className="h-6 w-6" />,
    color: 'yellow',
    benefits: [
      'Potvrzení o daru uplatnitelné v daňovém přiznání (automatizováno přes portál Darujme.cz)',
      'Uvedení jména na webu (se souhlasem dárce)',
      'Pravidelné informace o dění v zákulisí divadla (newsletter pro mecenáše)',
      '1x pozvání na každoroční setkání dárců (1+1 osoba)',
      '1x roční shrnutí toho, jaký měly dary dopad',
      '1x prohlídka Divadla Radost pro 1+1 osoba (v rámci skupiny 20-25 lidí v předem vypsaných termínech)',
    ],
  },
  {
    id: 'mistr-marionet',
    name: 'Mistr marionet',
    amountText: '1 200+ Kč měsíčně | 14 400+ Kč ročně',
    icon: <Gem className="h-6 w-6" />,
    color: 'slate',
    benefits: [
      'Potvrzení o daru uplatnitelné v daňovém přiznání (automatizováno přes portál Darujme.cz)',
      'Uvedení jména na webu (se souhlasem dárce)',
      'Pravidelné informace o dění v zákulisí divadla (newsletter pro mecenáše)',
      '1x pozvání na každoroční setkání dárců (1+1 osoba)',
      '1x roční shrnutí toho, jaký měly dary dopad',
      '1x prohlídka Divadla Radost pro rodinu 2 + 3 děti (v rámci skupiny 20-25 lidí v předem vypsaných termínech)',
      '2 akce z menu:',
      '1x účast na neveřejné zkoušce určené pro mecenáše, následovaná diskuzí se zástupcem ředitele (1 osoba)',
      '1x setkání s dramaturgyní a debata nad uměleckými tématy (1 osoba)',
      '1x setkání s autory knih či ilustrací v rámci scénického čtení a výstavy',
      'Přednostní možnost rezervace vstupenek na vybraná představení (veřejná generálka, premiéra, veřejné čtvrtky)',
    ],
  },
  {
    id: 'patron-pohadek',
    name: 'Patron pohádek',
    amountText: '3 000+ Kč měsíčně | 36 000+ Kč ročně',
    icon: <Sparkles className="h-6 w-6" />,
    color: 'indigo',
    benefits: [
      'Potvrzení o daru uplatnitelné v daňovém přiznání (automatizováno přes portál Darujme.cz)',
      'Uvedení jména na webu (se souhlasem dárce)',
      'Pravidelné informace o dění v zákulisí divadla (newsletter pro mecenáše)',
      '1x pozvání na každoroční setkání dárců (1+1 osoba)',
      '1x roční shrnutí toho, jaký měly dary dopad',
      '1x prohlídka Divadla Radost pro rodinu 2 + 3 děti (v rámci skupiny 20-25 lidí v předem vypsaných termínech)',
      '4 akce z menu:',
      '2x účast na neveřejné zkoušce určené pro mecenáše, následovaná diskuzí se zástupcem ředitele (1 osoba)',
      '1x setkání s dramaturgyní a debata nad uměleckými tématy (1 osoba)',
      '1x setkání s autory knih či ilustrací v rámci scénického čtení a výstavy',
      'Přednostní možnost rezervace vstupenek na vybraná představení (veřejná generálka, premiéra, veřejné čtvrtky)',
      'Osobní setkání a reflexe (přechodný stupeň k major donors, více se starat o osobní péči)',
    ],
  },
  {
    id: 'tvurce-loutek',
    name: 'Okruh tvůrců: Tvůrce loutek',
    amountText: '75 000+ Kč ročně',
    icon: <Award className="h-6 w-6" />,
    color: 'amber',
    benefits: [
      'Přidat příběh, linku. Sdělení, co je díky těmto darům možné.',
      'Pravidelné setkávání (2-4 x ročně nebo individuálně) a reflexe.',
      'Potvrzení o daru uplatnitelné v daňovém přiznání (automatizováno přes portál Darujme.cz)',
      'Uvedení jména na webu (se souhlasem dárce)',
      'Pravidelné informace o dění v zákulisí divadla (newsletter pro mecenáše)',
      '1x pozvání na každoroční setkání dárců (1+1 osoba)',
      '1x roční shrnutí toho, jaký měly dary dopad',
      '4 akce z výběru dle vlastní preference:',
      '4x účast na neveřejné zkoušce určené pro mecenáše, následovaná diskuzí se zástupcem ředitele (1 osoba)',
      '1x setkání s dramaturgyní a debata nad uměleckými tématy (1 osoba)',
      '1x setkání s autory knih či ilustrací v rámci scénického čtení a výstavy (1+1 osoba)',
      '1x soukromá komentovaná prohlídka Divadla Radost (max. 10 hostů mecenáše vč. něj)',
      '1x setkání se členy uměleckého souboru Divadla Radost (1+1 osoba)',
      'Přednostní možnost rezervace vstupenek na vybraná představení (veřejná generálka, premiéra, veřejné čtvrtky)',
    ],
  },
  {
    id: 'tvurce-pohadek',
    name: 'Okruh tvůrců: Tvůrce pohádek',
    amountText: '150 000+ Kč ročně',
    icon: <Crown className="h-6 w-6" />,
    color: 'yellow',
    benefits: [
      'Potvrzení o daru uplatnitelné v daňovém přiznání (automatizováno přes portál Darujme.cz)',
      'Uvedení jména na webu (se souhlasem dárce)',
      'Pravidelné informace o dění v zákulisí divadla (newsletter pro mecenáše)',
      '1x pozvání na každoroční setkání dárců (1+1 osoba)',
      '1x roční shrnutí toho, jaký měly dary dopad',
      '6 akcí z výběru dle vlastní preference:',
      '4x účast na neveřejné zkoušce určené pro mecenáše, následovaná diskuzí se zástupcem ředitele (1 osoba)',
      '1x setkání s dramaturgyní a debata nad uměleckými tématy (1 osoba)',
      '1x setkání s autory knih či ilustrací v rámci scénického čtení a výstavy (1+1 osoba)',
      '1x soukromá komentovaná prohlídka Divadla Radost (max. 10 hostů mecenáše vč. něj)',
      '1x setkání se členy uměleckého souboru Divadla Radost (1+1 osoba)',
      '1x adopce loutky - dárce podpoří vznik konkrétní loutky, dostane k ní informační materiály, jak se vyráběla, setkání v dílnách během výroby, uvedení v programu jako podporovatel výroby loutek',
      'Přednostní možnost rezervace vstupenek na vybraná představení (veřejná generálka, premiéra, veřejné čtvrtky)',
      '1x Inscenace od nápadu k premiéře - pozvání na 1. čtenou zkoušku, nějakou běžnou zkoušku, dílny (v rámci regulérního termínu i pro ostatní), generálkový týden, premiéra (na premiéru lístek zajištěn)',
    ],
  },
];

export function PatronClubPage() {
  const [expandedTier, setExpandedTier] = useState<string | null>(null);

  const toggleTier = (tierId: string) => {
    setExpandedTier(expandedTier === tierId ? null : tierId);
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-900',
        iconBg: 'bg-amber-100',
      },
      gray: {
        bg: 'bg-gray-50',
        border: 'border-gray-300',
        text: 'text-gray-900',
        iconBg: 'bg-gray-200',
      },
      yellow: {
        bg: 'bg-yellow-50',
        border: 'border-yellow-300',
        text: 'text-yellow-900',
        iconBg: 'bg-yellow-100',
      },
      slate: {
        bg: 'bg-slate-50',
        border: 'border-slate-300',
        text: 'text-slate-900',
        iconBg: 'bg-slate-200',
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        text: 'text-indigo-900',
        iconBg: 'bg-indigo-100',
      },
    };
    return colorMap[color];
  };

  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mecenášský klub</h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Staňte se součástí naší komunity podporovatelů a získejte jedinečný přístup do zákulisí Radosti.
            </p>
          </div>
        </div>

        {/* Tiers Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-600">
              Mecenášský klub Divadla Radost je pro ty, kteří chtějí, aby divadlo nejen hrálo,
              ale také mělo prostor tvořit, růst a vzdělávat. <br />
              Jako mecenáš budete o kousek blíž: nakouknete do dílen, na zkoušky a potkáte se s lidmi,
              kteří inscenace připravují. <br />
              <br />
              Vyberte si úroveň členství, která vám nejvíce vyhovuje. Je měsíční a kdykoli ji můžete
              změnit nebo zrušit.
            </p>
          </div>

          <div className="space-y-4">
            {patronTiers.map((tier) => {
              const isExpanded = expandedTier === tier.id;
              const colors = getColorClasses(tier.color);

              return (
                <div
                  key={tier.id}
                  className={`border-2 rounded-lg overflow-hidden transition-all ${colors.border} ${
                    isExpanded ? colors.bg : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <button
                    onClick={() => toggleTier(tier.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={`p-3 rounded-lg ${colors.iconBg} ${colors.text}`}>
                        {tier.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">{tier.amountText}</p>
                        {tier.periodText ? (
                          <p className="text-sm text-gray-600">{tier.periodText}</p>
                        ) : null}
                      </div>
                      <div className="ml-4">
                        {isExpanded ? (
                          <ChevronUp className="h-6 w-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2">
                      <div className="bg-white rounded-lg p-6 shadow-inner">
                        <h4 className="font-semibold text-gray-900 mb-4">Benefity členství:</h4>
                        <ul className="space-y-3">
                          {tier.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="mt-6 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                          Stát se členem
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Jak to funguje?</h3>
            <div className="space-y-3 text-gray-700">
              <p>• Členství je měsíční a obnovuje se automaticky (před obnovením budete 
                informováni e-mailem)</p>
              <p>• Můžete kdykoli upgradovat na vyšší úroveň členství</p>
              <p>• Výhody začínají platit okamžitě po registraci</p>
              <p>• Všechny příspěvky jsou daňově uznatelné</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
