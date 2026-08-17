import { motion } from 'framer-motion';
import heroBg from '../assets/careers.svg';
import careersImg from '../assets/bitmapCAREERS.svg';
import sayHelloImg from '../assets/sayhello.svg';

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

const jobsData = [
  {
    title: 'General Manager',
    location: 'Jakarta, Indonesia',
  },
  {
    title: 'UI/UX Designer',
    location: 'Yokohama, Japan',
  },
  {
    title: 'Blog Content Copywriter',
    location: 'New York, United States',
  },
  {
    title: 'Graphic Designer',
    location: 'New York, United States',
  },
  {
    title: 'Fleet Supervisor',
    location: 'Jakarta, Indonesia',
  },
  {
    title: 'UX Analyst',
    location: 'London, United Kingdom',
  },
];

export default function Careers() {
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
            Careers
          </motion.h1>
        </div>
      </section>

      <section className="w-full my-20 lg:my-30 relative overflow-hidden">
        <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-41.25 flex flex-col lg:flex-row items-center justify-between">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-110 z-10"
          >
            <h2 className="font-['Space_Mono'] font-bold text-[32px] md:text-[48px] leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px] text-[#495567] mb-6">
              Care to join our mission?
            </h2>
            <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#939CAD] mb-8">
              We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living, we want to hear from you!
            </p>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#FCB72B] hover:bg-transparent text-white hover:text-[#FCB72B] border-2 border-transparent hover:border-[#FCB72B] font-['Space_Mono'] font-bold text-[15px] leading-7 px-10 py-3.5 transition-all cursor-pointer focus:outline-none"
            >
              <img src={sayHelloImg} alt="Say Hello" className="h-7 w-auto inline-block brightness-0 invert hover:brightness-100 hover:invert-0 transition-all" style={{ display: 'none' }} />
              Say Hello
            </motion.button>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="absolute top-1/2 -translate-y-1/2 right-0 w-[32%] max-w-none hidden lg:flex items-center justify-end pointer-events-none"
        >
          <img 
            src={careersImg} 
            alt="Careers Mission" 
            className="w-full h-auto object-contain pointer-events-auto" 
          />
        </motion.div>
      </section>

      <section className="w-full my-20 lg:my-30 bg-white">
        <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-41.25 flex flex-col items-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="font-['Space_Mono'] font-bold text-[32px] md:text-[48px] leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px] text-[#495567] text-center mb-16 lg:mb-26"
          >
            Why join us?
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

      <section className="w-full mb-20 lg:mb-32">
        <div className="max-w-360 mx-auto px-6 md:px-10 lg:px-41.25 flex flex-col gap-6">
          {jobsData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-full bg-[#F2F5F9] p-8 md:px-12 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-l-4 hover:border-[#FCB72B] transition-all"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-['Space_Mono'] font-bold text-[20px] md:text-[24px] leading-7 tracking-[-0.89px] text-[#495567]">
                  {job.title}
                </h3>
                <p className="font-['Lexend_Deca'] font-normal text-[15px] leading-6.25 text-[#939CAD]">
                  {job.location}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full md:w-auto bg-[#FCB72B] hover:bg-transparent text-white hover:text-[#FCB72B] border-2 border-transparent hover:border-[#FCB72B] font-['Space_Mono'] font-bold text-[15px] leading-7 px-10 py-3.5 transition-all cursor-pointer"
              >
                Apply
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}