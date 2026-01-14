import { Users, Sparkles, GraduationCap } from 'lucide-react';

export function ImpactSection() {
  const impacts = [
    {
      icon: Users,
      number: '55 000+',
      label: 'Diváků ročně',
      description: 'Od školních představení po zahraniční zájezdy'
    },
    {
      icon: Sparkles,
      number: '4',
      label: 'Premiéry za sezónu',
      description: 'Od klasiky po nová díla'
    },
    {
      icon: GraduationCap,
      number: 'XY+',
      label: 'Žáků a studentů',
      description: 'Z celého Jihomoravského kraje'
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Váš dopad</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Když podporujete naše divadlo, investujete do kulturního srdce naší komunity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <impact.icon className="w-12 h-12 text-purple-600" />
              </div>
              <div className="text-purple-900 mb-2">{impact.number}</div>
              <h3 className="mb-2">{impact.label}</h3>
              <p className="text-gray-600">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
