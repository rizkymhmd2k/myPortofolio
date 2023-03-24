'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { ContactCard, StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section id="contact" className={`${styles.paddings} relative z-2 min-h-[550px]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[1] flex justify-center">
        <TitleText title={<>If you like what you see,let's work together. </>} />

      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.80] flex justify-center flex-col"
      >


        <div class="py-8 lg:py-16 px-8 mx-auto max-w-screen-md w-full bg-slate-800 rounded-lg outline outline-2 outline-slate-700">
          <ContactCard />
        </div>


      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
