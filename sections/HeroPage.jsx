'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, boxes } from '../utils/motion';

const HeroPage = () => (
  <section id="home" className={`${styles.paddings} relative z-10 min-h-[800px]`}>
    <div className="gradient-04 z-0" />
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} relative z-20 mx-auto flex lg:flex-row flex-col gap-8 ${styles.flexCenter}`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className={`flex-[0.8] ${styles.flexCenter}`}
      >
        {/* <div className={`flex relative justify-center items-center`}> */}

        <div className="inline-block relative items-center justify-center">
          <img
            src="./kiki03.png"
            alt="get-started"
            className="w-96 object-contain"
          />

          <motion.div className="absolute top-20 left-0"
            variants={boxes(1.2)}
          >
            <img
              src="/node.png"
              alt="get-started"
              className="w-[120px]  object-contain"
            />
          </motion.div>
          <motion.div className="absolute bottom-5 left-10"
            variants={boxes(1.3)}
          >
            <img
              src="/react.png"
              alt="get-started"
              className="w-[100px]  object-contain"
            />
          </motion.div>
          <motion.div className="absolute bottom-40 right-0"
            variants={boxes(1.4)}
          >
            <img
              src="/tailwind.png"
              alt="get-started"
              className="w-[100px]  object-contain"
            />
          </motion.div>

        </div>

      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col "
      >
        <TypingText title="| Hi there, I'm Muhammad Rizky 👋" />
        <TitleText title={<>I'm a web developer </>} />
        <div className="mt-[21px] flex flex-col max-w-[full] gap-[24px]">
          {/* {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))} */}
          <p className="my-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">Even though my name is rizky, it’s totally safe to do business with me. I create and design website for small business. I can provide clean code and pixel perfect responsive design.
          </p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#contact" class="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-orange items-center justify-center w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >Contact Me
          </motion.a>

        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroPage;
