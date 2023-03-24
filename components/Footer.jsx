'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <div
    className={`${styles.xPaddings} py-8 relative`}
  >
    <motion.div variants={footerVariants}
      initial="hidden"
      whileInView="show" 
      className="footer-gradient" />
            {/* className="footer-gradient" /> */}

      
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            RIZKY
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Rizky. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
