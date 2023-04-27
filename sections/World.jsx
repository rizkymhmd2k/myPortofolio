/* eslint-disable no-unused-vars */

'use client';

import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { portofolios } from '../constants';

import styles from '../styles';
import { TitleText, TypingText, PortCard } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section id="projects" className={`${styles.paddings} relative z-10 min-h-screen`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      {/* <TypingText title="| Check out some of my latest projects with creative ideas." textStyles="text-center" /> */}
      <TitleText
        title={(
          <>Projets i have done
          </>
          )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full "
      >
        <div className={`w-full flex-wrap ${styles.flexCenter} gap-[50px] `}>
          {portofolios.map((portofoliosz) => (
            <PortCard key={portofoliosz.title} {...portofoliosz} />
          ))}
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default World;
