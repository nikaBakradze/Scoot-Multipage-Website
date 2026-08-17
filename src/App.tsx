import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import logo from './assets/scoot.svg';
import facebookIcon from './assets/facebook-logo.svg';
import instagramIcon from './assets/instagram-logo.svg';
import twitterIcon from './assets/twitter-logo.svg';
import footerLogo from './assets/scoot (1).svg';

import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Careers from './pages/Careers';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white font-['Lexend_Deca'] overflow-x-hidden flex flex-col">
        <header className="relative flex items-center justify-between px-6 py-6 md:px-10 lg:px-24 max-w-360 mx-auto bg-white w-full">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden w-6 h-6 flex flex-col justify-center gap-[5px] cursor-pointer z-[60]"
          >
            {isMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1 1L17 17M1 17L17 1" stroke="#FCB72B" strokeWidth="3" strokeLinecap="round"/></svg>
            ) : (
              <>
                <span className="block h-1 w-full bg-[#FCB72B] rounded-full"></span>
                <span className="block h-1 w-full bg-[#FCB72B] rounded-full"></span>
                <span className="block h-1 w-full bg-[#FCB72B] rounded-full"></span>
              </>
            )}
          </button>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <img src={logo} alt="Scoot Logo" className="h-6 md:h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8 font-['Space_Mono'] font-bold text-[15px] text-[#939CAD]">
              <Link to="/about" className="hover:text-[#FCB72B] transition-colors">About</Link>
              <Link to="/location" className="hover:text-[#FCB72B] transition-colors">Location</Link>
              <Link to="/careers" className="hover:text-[#FCB72B] transition-colors">Careers</Link>
            </nav>
            <button className="font-['Space_Mono'] font-bold text-[15px] bg-[#FCB72B] text-white px-8 py-3.5 hover:bg-transparent hover:text-[#FCB72B] border-2 border-[#FCB72B] transition-all">
              Get Scootin
            </button>
          </div>
          <div className="md:hidden w-6"></div>
        </header>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              className="fixed inset-0 top-[72px] z-50 bg-[#333A44] p-6 flex flex-col items-start gap-6 md:hidden"
            >
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-white text-lg font-bold font-['Space_Mono']">About</Link>
              <Link to="/location" onClick={() => setIsMenuOpen(false)} className="text-white text-lg font-bold font-['Space_Mono']">Location</Link>
              <Link to="/careers" onClick={() => setIsMenuOpen(false)} className="text-white text-lg font-bold font-['Space_Mono']">Careers</Link>
              <button className="mt-auto w-full bg-[#FCB72B] text-white py-4 font-bold font-['Space_Mono']">Get Scootin</button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </div>
        <footer className="w-full bg-[#333A44] py-8 mt-auto">
          <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-41.25 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
              <Link to="/">
                <img src={footerLogo} alt="Scoot Logo" className="h-6 md:h-7 w-auto" />
              </Link>
              <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 font-['Space_Mono'] font-bold text-[15px] text-[#939CAD]">
                <Link to="/about" className="hover:text-[#FCB72B] transition-colors">About</Link>
                <Link to="/location" className="hover:text-[#FCB72B] transition-colors">Location</Link>
                <Link to="/careers" className="hover:text-[#FCB72B] transition-colors">Careers</Link>
              </nav>
            </div>
            <div className="flex items-center gap-6">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6 cursor-pointer hover:opacity-80" />
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6 cursor-pointer hover:opacity-80" />
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6 cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
