import React, { useState, useEffect } from 'react';
import { TrendingUp, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection: _activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  type NavLink = {
    label: string;
    path: string;
  };

  const handleNavigation = (link: NavLink) => {
    setMobileMenuOpen(false);

    if (link.path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    navigate(link.path);
  };

  const navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'History', path: '/about' },
    { label: 'Consult Rabbi', path: '/consult' },
    { label: 'Partners', path: '/partners' },
    { label: 'Shop', path: '/shop' },
    { label: 'Directives', path: '/directives' },
    { label: 'Contributions', path: '/contributions' },
  ];

  const isActive = (link: NavLink) => {
    return location.pathname === link.path;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavigation({ label: 'Home', path: '/' })}
        >
          <div className="bg-gold-500 p-2 rounded-sm transform group-hover:rotate-45 transition-transform duration-500">
            <TrendingUp className="text-slate-950 w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-gold-500 font-serif text-xl tracking-wider font-bold uppercase">McDickerson</span>
            <span className="text-slate-400 text-xs tracking-[0.2em] uppercase">Kosher Shekel Fund</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link)}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 hover:text-gold-500 ${isActive(link) ? 'text-gold-500 font-semibold' : 'text-slate-300'
                }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavigation({ label: 'Partners', path: '/partners' })}
            className="border border-gold-500 text-gold-500 px-6 py-2 text-xs uppercase tracking-widest hover:bg-gold-500 hover:text-slate-950 transition-all duration-300 font-bold"
          >
            Client Login
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gold-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link)}
              className={`text-left py-3 border-b border-slate-800 uppercase tracking-widest ${isActive(link) ? 'text-gold-500' : 'text-slate-300'
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
