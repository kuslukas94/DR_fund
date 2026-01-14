import { useState } from 'react';
import { ChevronDown, ChevronUp, Building2, Briefcase, TrendingUp, Trophy, Lightbulb } from 'lucide-react';
import { Footer } from '../components/Footer';

interface PartnershipTier {
  id: string;
  name: string;
  amountText: string;
  periodText?: string;
  icon: React.ReactNode;
  benefits: string[];
  color: string;
}

const partnershipTiers: PartnershipTier[] = [
  {
    id: 'pritel-radosti',
    name: 'Přítel Radosti',
    amountText: '10 tis.+ Kč',
    periodText: 'ročně',
    icon: <Lightbulb className="h-6 w-6" />,
    color: 'blue',
    benefits: [
      'Uvedení jména firmy na webu partnerů',
      'Pravidelné newslettery ze zákulisí divadla; PF; zpráva o dopadu příspěvků; poděkování',
      'Grafický odznak „podporuji Radost“',
      'Certifikát spolupráce',
    ],
  },
  {
    id: 'pritel-loutek',
    name: 'Přítel loutek',
    amountText: '25 tis.+ Kč',
    periodText: 'ročně',
    icon: <Briefcase className="h-6 w-6" />,
    color: 'emerald',
    benefits: [
      'Vše z "Přítel Radosti"',
      'Uvedení LOGA firmy na webu partnerů + možnost prezentovat motivace k podpoře kultury a Radosti',
      'Pravidelné newslettery ze zákulisí divadla; PF; zpráva o dopadu příspěvků; poděkování',
      'Grafický odznak „podporuji Radost“',
      'Certifikát spolupráce',
      'Samostatný post na sociálních sítích s poděkováním a představením firmy',
      'Možnost podpořit konkrétní projekt (inscenace, scénické čtení, RDS, workshopy, …)',
      'Roční balíček zvýhodněných vstupenek na čtvrteční představení (10 % sleva)',
    ],
  },
  {
    id: 'patron-edukace',
    name: 'Patron edukace',
    amountText: '50 tis.+ Kč',
    periodText: 'ročně',
    icon: <TrendingUp className="h-6 w-6" />,
    color: 'violet',
    benefits: [
      'Vše z "Přítel loutek"',
      'Uvedení LOGA firmy na webu partnerů',
      'Pravidelné newslettery ze zákulisí divadla; PF; zpráva o dopadu příspěvků; poděkování',
      'Grafický odznak „podporuji Radost“',
      'Certifikát spolupráce',
      'Možnost podpořit konkrétní projekt (inscenace, scénické čtení, RDS, workshopy, …)',
      'Roční balíček zvýhodněných vstupenek na čtvrteční představení (10 % sleva)',
      'Patronát nad konkrétním edukačním programem (RDS, workshop pro školy)',
      'Logo na nástěnce partnerů ve foyer',
      '1× firemní backstage tour (do 20 osob)',
    ],
  },
  {
    id: 'pritel-komunity',
    name: 'Přítel komunity',
    amountText: '100 tis.+ Kč',
    periodText: 'ročně',
    icon: <Trophy className="h-6 w-6" />,
    color: 'amber',
    benefits: [
      'Vše z "Patron edukace"',
      'Uvedení LOGA firmy na webu partnerů',
      'Pravidelné newslettery ze zákulisí divadla; PF; zpráva o dopadu příspěvků; poděkování',
      'Grafický odznak „podporuji Radost“',
      'Certifikát spolupráce',
      'Možnost podpořit konkrétní projekt (inscenace, scénické čtení, RDS, workshopy, …)',
      'Roční balíček zvýhodněných vstupenek na čtvrteční představení (15 % sleva)',
      'Patronát nad konkrétním edukačním programem (RDS, workshop pro školy)',
      'Logo na nástěnce partnerů ve foyer',
      '1× firemní backstage tour (do 20 osob)',
      '1 rozhovor s představitelem/zástupcem firmy zveřejněný na sociálních sítích a jako příloha závěrečné zprávy DR',
      'Až 3 firemní prohlídky (do 20 osob)',
      'Přednostní rezervace na 2 veřejné generálky v sezóně vždy pro 50 lidí',
      '1× workshop artikulace/řeči pro zaměstnance',
    ],
  },
  {
    id: 'patron-inscenace',
    name: 'Patron inscenace',
    amountText: '175 tis.+ Kč',
    periodText: 'ročně',
    icon: <Building2 className="h-6 w-6" />,
    color: 'rose',
    benefits: [
      'Vše z "Přítel komunity"',
      'Uvedení LOGA firmy na webu partnerů',
      'Pravidelné newslettery ze zákulisí divadla; PF; zpráva o dopadu příspěvků; poděkování',
      'Grafický odznak „podporuji Radost“',
      'Certifikát spolupráce',
      'Možnost podpořit konkrétní projekt (inscenace, scénické čtení, RDS, workshopy, …)',
      'Roční balíček zvýhodněných vstupenek na čtvrteční představení (15 % sleva)',
      'Patronát nad konkrétním edukačním programem (RDS, workshop pro školy)',
      'Logo na nástěnce partnerů ve foyer',
      '1× firemní backstage tour (do 20 osob)',
      '1 rozhovor s představitelem/zástupcem firmy zveřejněný na sociálních sítích a jako příloha závěrečné zprávy DR',
      'Až 3 firemní prohlídky (do 20 osob)',
      'Přednostní rezervace na 2 veřejné generálky v sezóně vždy pro 50 lidí',
      '1× workshop artikulace/řeči pro zaměstnance',
      'Patronát nad vybranou chystanou inscenací',
      'Zmínka v programu inscenace',
      'Zmínka v tiskové zprávě',
      'Spojení se sociálními sítěmi',
      'Balíček XY vstupenek na premiéru pro zaměstnance',
      'Možnost krátkého setkání s tvůrčím týmem během generálkového týdne',
    ],
  },
  {
    id: 'tvurce-pribehu',
    name: 'Tvůrce příběhu',
    amountText: '250 tis.+ Kč',
    periodText: 'ročně',
    icon: <Lightbulb className="h-6 w-6" />,
    color: 'blue',
    benefits: [
      'Vše z "Patron inscenace"',
      'Uvedení LOGA firmy na webu partnerů',
      'Pravidelné newslettery ze zákulisí divadla; PF; zpráva o dopadu příspěvků; poděkování',
      'Grafický odznak „podporuji Radost“',
      'Certifikát spolupráce',
      'Možnost podpořit konkrétní projekt (inscenace, scénické čtení, RDS, workshopy, …)',
      'Roční balíček zvýhodněných vstupenek na čtvrteční představení (15 % sleva)',
      'Patronát nad konkrétním edukačním programem (RDS, workshop pro školy)',
      'Logo na nástěnce partnerů ve foyer',
      '1× firemní backstage tour (do 20 osob)',
      '1 rozhovor s představitelem/zástupcem firmy zveřejněný na sociálních sítích a jako příloha závěrečné zprávy DR',
      'Až 3 firemní prohlídky (do 20 osob)',
      'Přednostní rezervace na 2 veřejné generálky v sezóně vždy pro 50 lidí',
      '1× workshop artikulace/řeči pro zaměstnance',
      'Patronát nad vybranou chystanou inscenací',
      'Zmínka v programu inscenace',
      'Zmínka v tiskové zprávě',
      'Spojení se sociálními sítěmi',
      'Balíček XY vstupenek na premiéru pro zaměstnance',
      'Možnost krátkého setkání s tvůrčím týmem během generálkového týdne',
      'Symbolické spolufinancování nové inscenace + logo v programu',
      'Soukromý loutkový workshop / teambuilding',
    ],
  },
  {
    id: 'strategicky-partner',
    name: 'Strategický partner',
    amountText: '500 tis.+ Kč',
    periodText: 'ročně',
    icon: <Trophy className="h-6 w-6" />,
    color: 'amber',
    benefits: [
      'Vše z "Tvůrce příběhu"',
      'Uvedení LOGA firmy na webu partnerů',
      'Pravidelné newslettery ze zákulisí divadla; PF; zpráva o dopadu příspěvků; poděkování',
      'Grafický odznak „podporuji Radost“',
      'Certifikát spolupráce',
      'Možnost podpořit konkrétní projekt (inscenace, scénické čtení, RDS, workshopy, …)',
      'Roční balíček zvýhodněných vstupenek na čtvrteční představení (15 % sleva)',
      'Patronát nad konkrétním edukačním programem (RDS, workshop pro školy)',
      'Logo na nástěnce partnerů ve foyer',
      '1× firemní backstage tour (do 20 osob)',
      '1 rozhovor s představitelem/zástupcem firmy zveřejněný na sociálních sítích a jako příloha závěrečné zprávy DR',
      'Až 3 firemní prohlídky (do 20 osob)',
      'Přednostní rezervace na 2 veřejné generálky v sezóně vždy pro 50 lidí',
      '1× workshop artikulace/řeči pro zaměstnance',
      'Patronát nad vybranou chystanou inscenací',
      'Zmínka v programu inscenace',
      'Zmínka v tiskové zprávě',
      'Spojení se sociálními sítěmi',
      'Balíček XY vstupenek na premiéru pro zaměstnance',
      'Možnost krátkého setkání s tvůrčím týmem během generálkového týdne',
      'Symbolické spolufinancování nové inscenace + logo v programu',
      'Soukromý loutkový workshop / teambuilding',
      'Titul Partner sezóny / generální partner projektu',
      'Možnost darovat loutku',
      'Roční uvádění loga v newsletteru, který jde divákům',
      'Individuální balíček (např. exkluzivní představení pro rodiny zaměstnanců)',
    ],
  },
];

export function CorporatePartnershipPage() {
  const [expandedTier, setExpandedTier] = useState<string | null>(null);

  const toggleTier = (tierId: string) => {
    setExpandedTier(expandedTier === tierId ? null : tierId);
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-900',
        iconBg: 'bg-blue-100',
      },
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-900',
        iconBg: 'bg-emerald-100',
      },
      violet: {
        bg: 'bg-violet-50',
        border: 'border-violet-200',
        text: 'text-violet-900',
        iconBg: 'bg-violet-100',
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-900',
        iconBg: 'bg-amber-100',
      },
      rose: {
        bg: 'bg-rose-50',
        border: 'border-rose-200',
        text: 'text-rose-900',
        iconBg: 'bg-rose-100',
      },
    };
    return colorMap[color];
  };

  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Firemní partnerství</h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Vaše značka na scéně, která má smysl.
            </p>
          </div>
        </div>

        {/* Tiers Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-600">
              Partnerství s Divadlem Radost není jen o logu na programu.
              Je to spojení vaší firmy s uznávanou brněnskou institucí,
              která už 75 let kultivuje budoucí generace. Nabízíme vám cestu, jak propojit
              společenskou odpovědnost s unikátními zážitky pro vaše zaměstnance i klienty.
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Co společně dokážeme</h3>
              <div className="space-y-3 text-gray-700">
                <p><b>Employer Branding:</b> Dopřejte svým lidem teambuilding v divadelních prostorách nebo backstage tour.</p>
                <p><b>Viditelný dopad:</b> Staňte se patronem konkrétní inscenace, která otevírá důležitá témata.</p>
                <p><b>Regionální hrdost:</b> Podpořte kulturu tam, kde vaši zaměstnanci žijí a vychovávají své děti.</p>
                <p><b>Kontakt:</b> Každé partnerství tvoříme na míru. Ozvěte se nám a probereme, jak může Radost pomoci vašemu příběhu.</p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Individuální řešení</h3>
              <p className="text-gray-700 mb-4">
                Žádné dvě partnerství nemusí být stejné. Rádi s vámi vytvoříme balíček na
                míru potřebám vaší firmy. Níže uvádíme kategorie, které slouží jako inspirace.
              </p>
              <a
                href="mailto:kus@divadlo-radost.cz"
                className="inline-block text-purple-600 hover:text-purple-700 font-medium"
              >
                Rovnou kontaktovat
              </a>
            </div>
          </div>

          <div className="mt-8 bg-purple-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pomozte školám do divadla</h3>
            <p className="text-gray-700 mb-4">
              Uvítáme, když firmy podpoří školy v kraji – například úhradou dopravy do divadla
              nebo financováním představení pro vybranou školu či třídu. Je to přímá cesta,
              jak dětem otevřít divadlo.
            </p>
            <p className="text-gray-700 mb-4">
              Školy si můžete vybrat sami a pak nás kontaktovat. Divadlo může fungovat jako
              prostředník mezi firmou a školou v případě, že firma nevybere konkrétní školu.
            </p>
            <a
              href="mailto:kus@divadlo-radost.cz"
              className="inline-block text-purple-600 hover:text-purple-700 font-medium"
            >
              Domluvit podporu škol
            </a>
          </div>

          <div className="space-y-4">
            {partnershipTiers.map((tier) => {
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
                        <h4 className="font-semibold text-gray-900 mb-4">Co partnerství zahrnuje:</h4>
                        <ul className="space-y-3">
                          {tier.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="mt-6 w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                          Kontaktovat
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
