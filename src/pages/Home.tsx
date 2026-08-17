import { motion } from 'framer-motion';

import heroBg from '../assets/manwithscooter.png';
import lineSvg from '../assets/line.svg';
import arrowSvg from '../assets/arrow.svg';
import circlesSvg from '../assets/3circle.svg';
import greyLine from '../assets/greyline.svg';
import phoneLogo from '../assets/phonelogo.svg';
import scooterLogo from '../assets/scooterlogo.svg';
import rideLogo from '../assets/ridelogo.svg';
import girlImg from '../assets/girl.svg';
import arrowFromRtoL from '../assets/arrowfromRtoL.svg';
import maskCircle from '../assets/Mask.svg';
import cityImg from '../assets/city.svg';
import arrowLtoR from '../assets/arrowLtoR.svg';
import mask1Circle from '../assets/Mask1.svg';
import bitmapImg from '../assets/Bitmap.svg';
import arrowRtoL from '../assets/arrow-RtoL.svg';
import mask2Circle from '../assets/mask2.svg';
import appStoreImg from '../assets/appstore.svg';
import googlePlayImg from '../assets/googleplay.svg';
import mask3Circle from '../assets/mask3.svg';

export default function Home() {
  return (
    <main>
      <section 
        className="relative w-full min-h-125 md:min-h-162.5 bg-cover bg-center bg-no-repeat flex items-center justify-center lg:justify-start px-6 md:px-10 lg:px-40 py-16 lg:py-0 overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <motion.div 
          className="relative z-20 max-w-125 text-white text-center lg:text-left flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-['Space_Mono'] font-bold text-[40px] md:text-[56px] leading-12 md:leading-14 tracking-[-1.8px] md:tracking-[-2.5px] mb-6 md:mb-10">
            Scooter sharing made simple
          </h1>

          <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#E5ECF4] max-w-101.25 lg:ml-23.75 mb-8 md:mb-10">
            Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!
          </p>

          <div className="lg:ml-23.75">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-['Space_Mono'] font-bold text-[15px] leading-6.25 text-center bg-[#FCB72B] hover:bg-transparent text-white hover:text-[#FCB72B] border-2 border-transparent hover:border-[#FCB72B] px-10 py-3.5 transition-all cursor-pointer"
            >
              Get Scootin
            </motion.button>
          </div>
        </motion.div>

        <motion.img 
          src={lineSvg} 
          alt="" 
          className="hidden lg:block absolute left-0 top-107 w-50.75 h-3.75 z-10 pointer-events-none" 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.img 
          src={arrowSvg} 
          alt="" 
          className="hidden lg:block absolute left-176.25 top-107 w-111.5 h-24.75 z-10 pointer-events-none" 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        <motion.img 
          src={circlesSvg} 
          alt="" 
          className="hidden lg:block absolute right-0 top-[518.5px] w-58.5 h-15.75 z-10 pointer-events-none" 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </section>

      <section className="relative max-w-360 mx-auto px-6 md:px-10 lg:px-40 py-16 md:py-24 lg:py-32">
        <div className="relative">
          <img 
            src={greyLine} 
            alt="" 
            className="absolute top-10 left-[-100vw] w-[calc(100vw+75%)] h-3.75 max-w-none z-0 pointer-events-none hidden lg:block object-cover object-left" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-8">
            <motion.div 
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.1 }}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 rounded-full bg-[#FCB72B] flex items-center justify-center mb-8 md:mb-10 z-10 shrink-0 cursor-pointer"
              >
                <img src={phoneLogo} alt="Phone icon" className="w-12 md:w-14 h-12 md:h-14 object-contain" />
              </motion.div>
              <h3 className="font-['Space_Mono'] font-bold text-[20px] md:text-[24px] leading-7 tracking-[-0.89px] md:tracking-[-1.07px] text-[#495567] mb-4 md:mb-7">
                Locate with app
              </h3>
              <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#939CAD] max-w-87.5">
                Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.3 }}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 rounded-full bg-[#FCB72B] flex items-center justify-center mb-8 md:mb-10 z-10 shrink-0 cursor-pointer"
              >
                <img src={scooterLogo} alt="Scooter icon" className="w-12 md:w-14 h-12 md:h-14 object-contain" />
              </motion.div>
              <h3 className="font-['Space_Mono'] font-bold text-[20px] md:text-[24px] leading-7 tracking-[-0.89px] md:tracking-[-1.07px] text-[#495567] mb-4 md:mb-7">
                Pick your scooter
              </h3>
              <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#939CAD] max-w-87.5">
                We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.5 }}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 rounded-full bg-[#FCB72B] flex items-center justify-center mb-8 md:mb-10 z-10 shrink-0 cursor-pointer"
              >
                <img src={rideLogo} alt="Ride icon" className="w-12 md:w-14 h-12 md:h-14 object-contain" />
              </motion.div>
              <h3 className="font-['Space_Mono'] font-bold text-[20px] md:text-[24px] leading-7 tracking-[-0.89px] md:tracking-[-1.07px] text-[#495567] mb-4 md:mb-7">
                Enjoy the ride
              </h3>
              <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#939CAD] max-w-87.5">
                Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative w-full my-20 lg:my-30">
        <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-41.25 min-h-111.25 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0 relative">
          <motion.div 
            className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-111.25 z-10 shrink-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            <h2 className="font-['Space_Mono'] font-bold text-[32px] md:text-[48px] leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px] text-[#495567] mb-6">
              Easy to use<br className="hidden md:inline" /> riding telemetry
            </h2>

            <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#939CAD] mb-10 max-w-111.25">
              The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you’ve been using the scooter, your traveling distance, and many more things all in an easy to use app.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-['Space_Mono'] font-bold text-[15px] leading-6.25 text-center bg-[#FCB72B] hover:bg-transparent text-white hover:text-[#FCB72B] border-2 border-transparent hover:border-[#FCB72B] px-10 py-3.5 transition-all cursor-pointer"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div 
            className="relative w-full lg:w-184.5 h-77.75 md:h-111.25 flex justify-center lg:justify-end shrink-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            <img 
              src={maskCircle} 
              alt="" 
              className="absolute top-0 -right-41.25 h-111.25 w-auto z-0 pointer-events-none hidden lg:block" 
            />

            <div className="relative z-10 w-77.75 md:w-111.25 h-77.75 md:h-111.25 rounded-full overflow-hidden shrink-0">
              <img 
                src={girlImg} 
                alt="Woman using phone" 
                className="w-full h-full object-cover" 
              />
            </div>

            <img 
              src={arrowFromRtoL} 
              alt="" 
              className="absolute top-62.5 lg:top-75.75 -left-25 lg:-left-37.5 w-125 lg:w-184.5 h-auto z-20 pointer-events-none" 
            />
          </motion.div>
        </div>
      </section>

      <section className="relative w-full my-20 lg:my-40">
        <img 
          src={mask1Circle} 
          alt="" 
          className="absolute top-0 left-0 translate-x-[-40%] md:translate-x-[-25%] lg:translate-x-[-15%] h-77.75 md:h-111.25 w-auto z-0 pointer-events-none hidden sm:block" 
        />

        <img 
          src={arrowLtoR} 
          alt="" 
          className="absolute top-0 left-0 w-50 md:w-65 lg:w-[320px] h-auto z-20 pointer-events-none hidden md:block" 
        />

        <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-41.25 min-h-111.25 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 relative z-10">
          <motion.div 
            className="relative w-full lg:w-184.5 h-77.75 md:h-111.25 flex justify-center lg:justify-start shrink-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            <div className="relative z-10 w-77.75 md:w-111.25 h-77.75 md:h-111.25 rounded-full overflow-hidden shrink-0">
              <img 
                src={cityImg} 
                alt="City view" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-111.25 z-10 shrink-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            <h2 className="font-['Space_Mono'] font-bold text-[32px] md:text-[48px] leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px] text-[#495567] mb-6">
              Coming to a city near you
            </h2>

            <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#939CAD] mb-10 max-w-111.25">
              Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-['Space_Mono'] font-bold text-[15px] leading-6.25 text-center bg-[#FCB72B] hover:bg-transparent text-white hover:text-[#FCB72B] border-2 border-transparent hover:border-[#FCB72B] px-10 py-3.5 transition-all cursor-pointer"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="relative w-full my-20 lg:my-40">
        <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-41.25 min-h-111.25 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0 relative">
          <motion.div 
            className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-111.25 z-10 shrink-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            <h2 className="font-['Space_Mono'] font-bold text-[32px] md:text-[48px] leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px] text-[#495567] mb-6">
              Zero hassle<br className="hidden md:inline" /> payments
            </h2>

            <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#939CAD] mb-10 max-w-111.25">
              Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-['Space_Mono'] font-bold text-[15px] leading-6.25 text-center bg-[#FCB72B] hover:bg-transparent text-white hover:text-[#FCB72B] border-2 border-transparent hover:border-[#FCB72B] px-10 py-3.5 transition-all cursor-pointer"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div 
            className="relative w-full lg:w-184.5 h-77.75 md:h-111.25 flex justify-center lg:justify-end shrink-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            <img 
              src={mask2Circle} 
              alt="" 
              className="absolute top-0 -right-41.25 h-111.25 w-auto z-0 pointer-events-none hidden lg:block" 
            />

            <div className="relative z-10 w-77.75 md:w-111.25 h-77.75 md:h-111.25 rounded-full overflow-hidden shrink-0">
              <img 
                src={bitmapImg} 
                alt="Man holding wallet" 
                className="w-full h-full object-cover" 
              />
            </div>

            <img 
              src={arrowRtoL} 
              alt="" 
              className="absolute top-20 right-0 lg:-right-41.25 w-65 lg:w-90 h-auto z-20 pointer-events-none hidden lg:block object-contain" 
            />
          </motion.div>
        </div>
      </section>

      <section className="relative w-full bg-[#495567] overflow-hidden py-16 lg:py-25.5">
        <img 
          src={mask3Circle} 
          alt="" 
          className="absolute right-0 top-0 h-full w-auto object-cover object-right pointer-events-none z-0 hidden sm:block" 
        />

        <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-41.25 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <motion.h2 
            className="font-['Space_Mono'] font-bold text-[32px] md:text-[48px] leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px] text-white max-w-103.75 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Sign up and Scoot off today
          </motion.h2>

          <motion.div 
            className="flex items-center gap-3 sm:gap-4.5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <img src={appStoreImg} alt="App Store" className="h-10 sm:h-14 w-auto object-contain" />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <img src={googlePlayImg} alt="Google Play" className="h-10 sm:h-14 w-auto object-contain" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
