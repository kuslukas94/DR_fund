import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Hlavní stránka', href: '/' },
    { name: 'Mecenášský klub', href: '/mecenassky-klub' },
    { name: 'Firemní partnerství', href: '/firemni-partnerstvi' },
    { name: 'Dobrovolníci', href: '/dobrovolnici' },
    { name: 'Podporují nás', href: '/podporuji-nas' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">Divadlo Radost</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Otevřít hlavní menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-3 pt-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block pl-3 pr-4 py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-indigo-50 border-l-4 border-indigo-600 text-indigo-600'
                    : 'border-l-4 border-transparent text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}