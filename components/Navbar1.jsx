'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants,navPhone } from '../utils/motion';
import { navLinks } from "../constants";





const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    //scrollNavbarGlass
    const [navbar, setNavbar] = useState(false);

    const changeNavbar = () => {
        // console.log(navbar);
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNavbar);
    }, []);

    //scrollSpy

    useEffect(() => {
        var sections = document.querySelectorAll("section");



        window.addEventListener("scroll", () => {

            // console.log('skrullY',scrollY);
            // console.log('sectionxxxx', sections[0]);
            // console.log('sectionxxxx', sections[0].offsetParent.offsetTop);
            // console.log('sectionHeight', sections[0].offsetParent.clientHeight);



            let current = "";
            sections.forEach((section) => {
                // var offset = section.getBoundingClientRect();
                // const sectionTop = offset.top;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                // console.log('sectTop', sectionTop);
                // console.log('secHeight', sectionHeight);


                if (scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute("id");
                }

            });

            setActive(current)

        });

    }, []);




    return (

        <nav className={`${navbar ? 'shadow border-b border-gray-400 border-opacity-25 backdrop-filter backdrop-blur-md bg-opacity-30' : 'none'} sticky top-0 z-50 w-full  flex ${styles.xPaddings} py-6 justify-between items-center navbar`}>

            <motion.div
                variants={navVariants}
                animate={navbar ? "hidden" : "show"}
                className='absolute w-[50%] inset-0 gradient-01' />


            <a href="#home" className="font-extrabold text-[24px] leading-[30.24px] text-white">
                RIZKY
            </a>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.id ? "text-white" : "text-[#B0B0B0]"
                            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? '/close.svg' : '/menu.svg'}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain z-50"
                    onClick={() => setToggle(!toggle)}
                />

                <motion.div
                    variants={navPhone}
                    animate={toggle ? "hidden" : "show"}
                    className='z-1 p-8 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50' >

                {/* <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-8 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
                > */}
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[20px] ${active === nav.title ? "text-black" : "text-dimWhite"
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-8"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </nav>

    )
}


export default Navbar;
