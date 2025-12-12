import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { CorporateDirectives } from './components/CorporateDirectives';
import { AboutPage } from './components/AboutPage';
import { PartnersPage } from './components/PartnersPage';
import { Shop } from './components/Shop';
import { ChatWidget } from './components/ChatWidget';
import { Consult } from './components/Consult';
import { AssetsTicker } from './components/AssetsTicker';
import { Contributions } from './components/Contributions';

// Component to handle scrolling when changing routes or using hashes
const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there is a hash, wait a tick for rendering then scroll
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If no hash (just route change), scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Scroll spy mainly for the Home page experience
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'founder', 'community', 'newsletter'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-gold-500 selection:text-white">
        <ScrollManager />
        <Header activeSection={activeSection} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/directives" element={<CorporateDirectives />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/consult" element={<Consult />} />
            <Route path="/contributions" element={<Contributions />} />
          </Routes>
        </main>

        <Footer />
        <ChatWidget />
        <AssetsTicker />
      </div>
    </HashRouter>
  );
};

export default App;
