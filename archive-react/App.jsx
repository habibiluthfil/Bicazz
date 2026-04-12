import React, { useState, useEffect } from 'react';
import { Home, PenTool, LayoutTemplate, Moon, Sun } from 'lucide-react';
import { LOGO_URL } from './utils/constants';
import NavButton from './components/Navigation';
import HomeView from './pages/HomePage';
import DesignView from './pages/DesignPage';
import ProductView from './pages/ProductPage';

// --- MAIN APP COMPONENT ---
// Komponen utama aplikasi Bicazz yang mengelola navigasi dan tema.
// Fungsi: Mengatur state aplikasi, navigasi antar halaman, dan toggle dark mode.

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${darkMode ? 'dark' : ''}`}>
      {/* Background with custom gradients */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#FAF7EB] to-[#EB975E] dark:from-[#AB4F41] dark:to-[#5D1F1E] transition-colors duration-500"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen text-gray-900 dark:text-gray-50">

        {/* Navigation Bar */}
        <nav className="w-full px-6 py-3 flex justify-between items-center bg-white/30 dark:bg-black/20 backdrop-blur-md sticky top-0 z-50 border-b border-white/20 dark:border-white/10">
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="h-12 w-12 flex items-center justify-center overflow-hidden rounded-xl">
               <img
                 src={LOGO_URL}
                 alt="Bicazz Logo"
                 className="h-full w-full object-contain scale-125"
                 onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=BZ'; }}
               />
            </div>
            <span className="text-2xl font-black tracking-tight drop-shadow-sm hidden sm:block">Bicazz</span>
          </div>

          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden md:flex bg-white/40 dark:bg-black/40 backdrop-blur-sm p-1 rounded-full shadow-inner">
              <NavButton active={currentPage === 'home'} onClick={() => setCurrentPage('home')} icon={<Home className="w-4 h-4"/>} text="Home" />
              <NavButton active={currentPage === 'design'} onClick={() => setCurrentPage('design')} icon={<PenTool className="w-4 h-4"/>} text="Design" />
              <NavButton active={currentPage === 'product'} onClick={() => setCurrentPage('product')} icon={<LayoutTemplate className="w-4 h-4"/>} text="Product" />
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-black/80 transition-all shadow-sm"
              title="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-indigo-900" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation (Bottom) */}
        <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/70 dark:bg-black/70 backdrop-blur-lg p-2 rounded-full shadow-2xl flex gap-2 z-50 border border-white/20">
            <NavButton active={currentPage === 'home'} onClick={() => setCurrentPage('home')} icon={<Home className="w-5 h-5"/>} text="" mobile />
            <NavButton active={currentPage === 'design'} onClick={() => setCurrentPage('design')} icon={<PenTool className="w-5 h-5"/>} text="" mobile />
            <NavButton active={currentPage === 'product'} onClick={() => setCurrentPage('product')} icon={<LayoutTemplate className="w-5 h-5"/>} text="" mobile />
        </div>

        {/* Main Content Area */}
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-6xl mb-20 md:mb-0">
          {currentPage === 'home' && <HomeView setCurrentPage={setCurrentPage} />}
          {currentPage === 'design' && <DesignView />}
          {currentPage === 'product' && <ProductView />}
        </main>

        {/* Footer diperbarui menjadi tahun 2026 */}
        <footer className="py-6 text-center text-sm opacity-70">
          Project by <span className="font-bold">THE-lNCREDIBLES</span> &copy; 2026
        </footer>
      </div>
    </div>
  );
}