import { useState } from 'react';
import { Check, CreditCard } from 'lucide-react';

export function DonationWidget() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = [
    { value: 200, impact: '' },
    { value: 400, impact: '' },
    { value: 800, impact: '' },
    { value: 1200, impact: '' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const finalAmount = selectedAmount === null ? parseFloat(customAmount) || 0 : selectedAmount;

  return (
    <section id="donation-widget" className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="mb-4">Přispějte [widget je samostatný kód z webu Darujme.cz]</h2>
          <p className="text-gray-600">Vyberte si částku, která vám udělá radost</p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <Check className="w-16 h-16 text-green-500" />
            </div>
            <h3 className="text-green-900 mb-2">Děkujeme za vaši štědrost!</h3>
            <p className="text-green-700">
              Váš příspěvek {finalAmount} Kč přispívá naší komunitě.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 shadow-lg">
            {/* Frequency Toggle */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                type="button"
                onClick={() => setFrequency('once')}
                className={`px-6 py-3 rounded-lg transition-all ${
                  frequency === 'once'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                Jednorázově
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`px-6 py-3 rounded-lg transition-all ${
                  frequency === 'monthly'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                Měsíčně
              </button>
            </div>

            {/* Preset Amounts */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {presetAmounts.map((preset) => (
                <button
                  key={preset.value}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(preset.value);
                    setCustomAmount('');
                  }}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedAmount === preset.value
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-300 bg-white hover:border-purple-300'
                  }`}
                >
                  <div className="mb-1">{preset.value} Kč</div>
                  <div className="text-gray-600">{preset.impact}</div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="block mb-2 text-gray-700">Nebo zadejte vlastní částku</label>
              <div className="relative">
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">Kč</span>
                <input
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Zadejte částku"
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block mb-2 text-gray-700">Celé jméno *</label>
                <input
                  type="text"
                  required
                  value={donorInfo.name}
                  onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Jan Novák"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">E-mailová adresa *</label>
                <input
                  type="email"
                  required
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="jan@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Vzkaz (Nepovinné)</label>
                <textarea
                  value={donorInfo.message}
                  onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={3}
                  placeholder="Sdílejte, proč podporujete umění..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={finalAmount === 0 || !donorInfo.name || !donorInfo.email}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <CreditCard className="w-5 h-5" />
              {frequency === 'monthly' ? `Přispět ${finalAmount} Kč/měsíc` : `Přispět ${finalAmount} Kč`}
            </button>

            <p className="text-center text-gray-500 mt-4">
              Váš dar je daňově uznatelný. Potvrzení obdržíte e-mailem.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
