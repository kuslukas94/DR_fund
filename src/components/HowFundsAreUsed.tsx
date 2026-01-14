import { Palette, Users, Building2, Lightbulb } from 'lucide-react';

export function HowFundsAreUsed() {
  const allocations = [
    {
      icon: Palette,
      category: 'Produkce',
      percentage: 45,
      description: 'Scény, kostýmy a umělecká excelence'
    },
    {
      icon: Users,
      category: 'Vzdělávání',
      percentage: 25,
      description: 'Programy pro mládež a workshopy pro komunitu'
    },
    {
      icon: Building2,
      category: 'Provoz',
      percentage: 10,
      description: 'Údržba prostor a zaměstnanci'
    },
    {
      icon: Lightbulb,
      category: 'Inovace',
      percentage: 20,
      description: 'Nová díla a začínající umělci'
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Jak je váš dar využit</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allocations.map((item, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <item.icon className="w-10 h-10 text-purple-600" />
              </div>
              <div className="text-purple-900 mb-2">{item.percentage}%</div>
              <h3 className="mb-2">{item.category}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
          <p className="text-purple-900">
            <strong>Chcete přesně určit, jak bude Váš dar využit?</strong> Kontaktujte nás nebo se podívejte na Mecenášský klub.
          </p>
        </div>
      </div>
    </section>
  );
}
