'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures, experience } from '../constants';
import { NewFeatures, TitleText, TypingText, StartSteps } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section id="skills" className={`${styles.paddings}	relative z-1 flex min-h-screen `}>

    <div className="gradient-02 z-0" />


    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-col flex-col md:gap-[5rem]`}>
      <div className={`flex flex-col ${styles.flexCenter}`}>
        <TypingText title="| Whats new?" />
        <TitleText title={<>Skills and experience</>} />
      </div>


      <div className='flex flex-row md:gap-[9.75rem] '>
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[1] flex justify-center p-10 "
        >

          <div className="mt-[31px] flex flex-wrap justify-start  gap-[24px] gap-x-[100px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[1] flex align-center flex-col justify-center items-center"
        >


          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            {experience.map(({ date, title, content }) => (
              <li class="mb-10 ml-4 last:mb-0">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{content}</p>
              </li>
            ))}
          </ol>



        </motion.div>
      </div>

    </motion.div>
  </section>
);

export default WhatsNew;
