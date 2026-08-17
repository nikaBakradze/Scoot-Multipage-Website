import { motion } from 'framer-motion';
import heroBg from '../assets/BitmapLOCATION.svg';
import mapImage from '../assets/4location.svg';
import messageUsImg from '../assets/messageUs.svg';

export default function Location() {
  return (
    <main className="w-full overflow-x-hidden">
      <section 
        className="relative w-full h-40 md:h-40 bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-360 w-full mx-auto px-6 md:px-10 lg:px-41.25 relative z-10 flex items-center justify-center md:justify-start">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['Space_Mono'] font-bold text-[32px] md:text-[56px] leading-10 md:leading-14 tracking-[-1.43px] md:tracking-[-2.5px] text-white"
          >
            Locations
          </motion.h1>
        </div>
      </section>

      <section className="w-full my-20 lg:my-30">
        <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-41.25 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-279 mb-20 md:mb-30 flex justify-center"
          >
            <img 
              src={mapImage} 
              alt="Locations Map" 
              className="w-full h-auto object-contain"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 text-center lg:text-left"
          >
            <h2 className="font-['Space_Mono'] font-bold text-[32px] md:text-[48px] leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px] text-[#495567] max-w-105">
              Your city not listed?
            </h2>
            
            <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#939CAD] max-w-145">
              If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer focus:outline-none shrink-0"
            >
              <img src={messageUsImg} alt="Message Us" className="h-14 w-auto" />
            </motion.button>
          </motion.div>

        </div>
      </section>
    </main>
  );
}