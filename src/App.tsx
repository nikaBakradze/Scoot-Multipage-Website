import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  return (
    <Router>
      <div className="min-h-screen bg-white font-['Lexend_Deca'] overflow-x-hidden flex flex-col justify-between">
        <header className="flex items-center justify-between px-6 md:px-10 lg:px-24 py-6 md:py-8 max-w-360 mx-auto bg-white w-full">
          <div className="flex items-center gap-8 md:gap-14">
            <Link to="/">
              <motion.img 
                src={logo} 
                alt="Scoot Logo" 
                className="h-6 md:h-8 w-auto" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8 font-['Space_Mono'] font-bold text-[15px] leading-6.25">
              <Link to="/about">
                <motion.span 
                  whileHover={{ scale: 1.05, color: '#FCB72B' }}
                  className="text-[#939CAD] transition-colors block cursor-pointer"
                >
                  About
                </motion.span>
              </Link>

              <Link to="/location">
                <motion.span 
                  whileHover={{ scale: 1.05, color: '#FCB72B' }}
                  className="text-[#939CAD] transition-colors block cursor-pointer"
                >
                  Location
                </motion.span>
              </Link>

              <Link to="/careers">
                <motion.span 
                  whileHover={{ scale: 1.05, color: '#FCB72B' }}
                  className="text-[#939CAD] transition-colors block cursor-pointer"
                >
                  Careers
                </motion.span>
              </Link>
            </nav>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block font-['Space_Mono'] font-bold text-[15px] leading-6.25 text-center bg-[#FCB72B] hover:bg-transparent text-white hover:text-[#FCB72B] border-2 border-transparent hover:border-[#FCB72B] px-8 md:px-10 py-3.5 transition-all cursor-pointer"
          >
            Get Scootin
          </motion.button>
        </header>

        {/* === ROUTES === */}
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </div>

        {/* === FOOTER === */}
        <footer className="w-full bg-[#333A44] py-8 md:py-8.75 mt-auto">
          <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-41.25 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
              <Link to="/">
                <motion.img 
                  src={footerLogo} 
                  alt="Scoot Logo" 
                  className="h-6 md:h-7 w-auto" 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                />
              </Link>

              <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 font-['Space_Mono'] font-bold text-[15px] leading-6.25">
                <Link to="/about">
                  <motion.span 
                    whileHover={{ scale: 1.05, color: '#FCB72B' }}
                    className="text-[#939CAD] transition-colors block cursor-pointer"
                  >
                    About
                  </motion.span>
                </Link>

                <Link to="/location">
                  <motion.span 
                    whileHover={{ scale: 1.05, color: '#FCB72B' }}
                    className="text-[#939CAD] transition-colors block cursor-pointer"
                  >
                    Location
                  </motion.span>
                </Link>

                <Link to="/careers">
                  <motion.span 
                    whileHover={{ scale: 1.05, color: '#FCB72B' }}
                    className="text-[#939CAD] transition-colors block cursor-pointer"
                  >
                    Careers
                  </motion.span>
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-6">
              <motion.a href="#" aria-label="Facebook" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6 object-contain" />
              </motion.a>
              <motion.a href="#" aria-label="Twitter" whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6 object-contain" />
              </motion.a>
              <motion.a href="#" aria-label="Instagram" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6 object-contain" />
              </motion.a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
