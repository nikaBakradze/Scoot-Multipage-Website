
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import heroBg from '../assets/BitmapABOUT.svg';
import maskHero from '../assets/maskABOUT.svg';
import photo1 from '../assets/photo1ABOUT.svg';
import arrow1 from '../assets/arrow1ABOUT.svg';
import photo2 from '../assets/photo2ABOUT.svg';
import techImg from '../assets/ourtechABOUT.svg';
import integrityImg from '../assets/ourintegrityABOUT.svg';
import communityImg from '../assets/ourcommunityABOUT.svg';
import num1 from '../assets/01.svg';
import num2 from '../assets/02.svg';
import num3 from '../assets/03.svg';

const valuesData = [
  {
    id: '01',
    title: 'Our tech',
    description:
      'We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!',
    image: techImg,
    numberSvg: num1,
  },
  {
    id: '02',
    title: 'Our integrity',
    description:
      'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.',
    image: integrityImg,
    numberSvg: num2,
  },
  {
    id: '03',
    title: 'Our community',
    description:
      'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.',
    image: communityImg,
    numberSvg: num3,
  },
];

const faqCategories = [
  {
    category: 'How it works',
    questions: [
      {
        q: 'How do I download the app?',
        a: 'To download the Scoot app, you can search "Scoot" in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.',
      },
      {
        q: 'Can I find a nearby Scoots?',
        a: 'Definitely! Simply open up the app and allow us to find your location while using it. We’ll show you all of the closest Scoots and some extra useful information.',
      },
      {
        q: 'Do I need a license to ride?',
        a: 'Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.',
      },
    ],
  },
  {
    category: 'Safe driving',
    questions: [
      {
        q: 'Should I wear a helmet?',
        a: 'Yes, please do! All cities have different laws. But we strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.',
      },
      {
        q: 'How about the rules & regulations?',
        a: 'Now is not the time to be a rule breaker. Be sure you’re complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people’s way.',
      },
      {
        q: 'What if I damage my Scoot?',
        a: 'Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There’s an option to add insurance for each trip, or you can sign up for annual insurance if you’re a regular Scooter.',
      },
    ],
  },
];

export default function About() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    '0-0': true,
    '1-0': true,
  });

  const toggleAccordion = (catIndex: number, qIndex: number) => {
    const key = `${catIndex}-${qIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <main className="w-full overflow-x-hidden">
      <section 
        className="relative w-full h-50 md:h-40 bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-360 w-full mx-auto px-6 md:px-10 lg:px-41.25 relative z-10 flex items-center justify-center md:justify-start">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['Space_Mono'] font-bold text-[32px] md:text-[56px] leading-10 md:leading-14 tracking-[-1.43px] md:tracking-[-2.5px] text-white"
          >
            About
          </motion.h1>
        </div>
        <img 
          src={maskHero} 
          alt="" 
          className="absolute right-0 top-1/2 -translate-y-1/2 h-2.5 w-auto pointer-events-none z-10 hidden sm:block"
        />
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
            <h2 className="font-['Space_Mono'] font-bold text-[32px] md:text-[48px] leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px] text-[#495567] mb-6 md:mb-10">
              Mobility for any city
            </h2>

            <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#939CAD] max-w-111.25">
              Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.
            </p>
          </motion.div>

          <motion.div 
            className="relative w-full lg:w-184.5 h-77.75 md:h-111.25 flex justify-center lg:justify-end shrink-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            <div className="relative z-10 w-77.75 md:w-111.25 h-77.75 md:h-111.25 rounded-full overflow-hidden shrink-0">
              <img 
                src={photo1} 
                alt="Mobility in city" 
                className="w-full h-full object-cover" 
              />
            </div>

            <img 
              src={arrow1} 
              alt="" 
              className="absolute top-42.5 lg:top-72.5 right-0 lg:-right-30 w-125 lg:w-166.5 h-auto z-20 pointer-events-none" 
            />
          </motion.div>

        </div>
      </section>

      <section className="relative w-full my-20 lg:my-30">
        <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-41.25 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 relative min-h-111.25">
          
          <motion.div 
            className="relative lg:absolute lg:left-[calc(-1*(100vw-100%)/2)] lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-auto flex justify-center lg:justify-start shrink-0 z-10"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            <img 
              src={photo2} 
              alt="Better urban living" 
              className="w-full max-w-135 lg:max-w-none h-auto object-contain"
            />
          </motion.div>

          <div className="hidden lg:block w-135 shrink-0" />

          <motion.div 
            className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-111.25 z-10 shrink-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            <h2 className="font-['Space_Mono'] font-bold text-[32px] md:text-[48px] leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px] text-[#495567] mb-6 md:mb-10">
              Better urban living
            </h2>

            <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#939CAD] max-w-111.25">
              We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.
            </p>
          </motion.div>

        </div>
      </section>

      <section className="w-full my-20 lg:my-30">
        <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-41.25 flex flex-col items-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-['Space_Mono'] font-bold text-[32px] md:text-[48px] leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px] text-[#495567] mb-12 lg:mb-26 text-center"
          >
            Our values
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-7.5 w-full">
            {valuesData.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center max-w-111.25 lg:max-w-none mx-auto"
              >
                <div className="relative w-60 h-60 mb-10 shrink-0">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full rounded-full object-cover"
                  />
                  <img
                    src={value.numberSvg}
                    alt={value.id}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-24 pointer-events-none z-10"
                  />
                </div>

                <h3 className="font-['Space_Mono'] font-bold text-[24px] leading-7 tracking-[-1.07px] text-[#495567] mb-7">
                  {value.title}
                </h3>

                <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#939CAD]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="w-full my-20 lg:my-30">
        <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-41.25 flex flex-col items-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-['Space_Mono'] font-bold text-[32px] md:text-[48px] leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px] text-[#495567] mb-16 lg:mb-24 text-center"
          >
            FAQs
          </motion.h2>

          <div className="w-full flex flex-col gap-16">
            {faqCategories.map((group, catIndex) => (
              <div key={catIndex} className="flex flex-col lg:flex-row items-start justify-between w-full gap-8 lg:gap-30">
                
                <h3 className="font-['Space_Mono'] font-bold text-[28px] md:text-[40px] leading-8 md:leading-12 tracking-[-1.25px] md:tracking-[-1.79px] text-[#495567] lg:w-87.5 shrink-0">
                  {group.category}
                </h3>

                <div className="w-full flex flex-col gap-6">
                  {group.questions.map((item, qIndex) => {
                    const isOpen = !!openItems[`${catIndex}-${qIndex}`];

                    return (
                      <div
                        key={qIndex}
                        className={`transition-colors duration-200 bg-[#F2F5F9] hover:bg-[#FFF4E6] ${
                          isOpen ? 'bg-[#FFF4E6]!' : ''
                        } p-8 md:p-8 rounded-none`}
                      >
                        <button
                          onClick={() => toggleAccordion(catIndex, qIndex)}
                          className="w-full flex items-center justify-between text-left cursor-pointer gap-4"
                        >
                          <span className="font-['Space_Mono'] font-bold text-[18px] md:text-[24px] leading-6 md:leading-7 tracking-[-0.8px] md:tracking-[-1.07px] text-[#495567]">
                            {item.q}
                          </span>
                          <svg
                            className={`w-5 h-3 shrink-0 text-[#FCB72B] transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            viewBox="0 0 18 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L9 9L17 1"
                              stroke="currentColor"
                              strokeWidth="3"
                            />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#939CAD] pt-6">
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
