import { Heart } from 'lucide-react';

export function Hero() {
  const scrollToDonation = () => {
    document.getElementById('donation-widget')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Heart className="w-16 h-16 text-pink-400" fill="currentColor" />
        </div>
        <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
           Divadlo je místem, kde se fantazie stává skutečností. Vaším darem nepodporujete jen „pohádky“, ale investujete do citlivosti, vzdělání a radosti dětí, které s námi vyrůstají už několik generací.
        </p>
        <button
          onClick={scrollToDonation}
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
          Darujte Radost
        </button>
      </div>
    </section>
  );
}
