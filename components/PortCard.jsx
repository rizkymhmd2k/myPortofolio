'use client';
import React from 'react'
import { AiFillEye, AiFillInfoCircle } from 'react-icons/ai';

import styles from '../styles';
import { motion } from 'framer-motion';
import Carousel from './Carousel';



const PortCard = ({ imgUrl, title, content, modalTitle, modalTitle2, modalContent, featureContents, Tools, carouselPict, githubLink }) => {
    const [showModal, setShowModal] = React.useState(false);
    // featureContents?.map((x) => console.log('xxx', x))


    return (
        <div >

            <div class="rounded-3xl	 shadow-lg bg-white  p-4 relative w-sm lg:w-[600px] max-h-86">

                <div className='rounded-2xl	relative group overflow-hidden bg-black'>

                    <div className='relative  transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70' >

                        <img class="w-full h-80 object-cover" src={imgUrl} alt="" />

                    </div>

                    <div onClick={() => setShowModal(true)} className='absolute inset-0 flex items-center justify-center '>
                        <motion.div whileHover={{ scale: 1.1 }}
                            className='flex gap-2 mx-auto items-center justify-center z-auto'>
                            <AiFillEye onClick={() => setShowModal(true)} className={`${styles.flexCenter} fill-white block mx-auto w-[50px] h-full  opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                            <AiFillInfoCircle onClick={() => setShowModal(true)} className={`${styles.flexCenter} fill-white block mx-auto w-[40px] h-full opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                        </motion.div>
                    </div>

                </div>

                <div class={`p-6 ${styles.flexCenter} flex-col flex w-full`}>
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                    <p class="text-gray-700 text-base mb-4 text-center">{content}</p>
                </div>
            </div>


            {/* AWLADLWAL */}


            <>

                {showModal ? (
                    <>
                        <div
                            className="fixed inset-0 z-50 justify-center w-full items-center flex overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
                        >
                            {/* <div className="relative w-auto my-6 mx-auto max-w-7xl"> */}

                            <div className="relative mt-[8rem] my-6 mx-4 w-[85%] h-[85%] ">
                                {/*content*/}
                                <div className="flex-1 p-10 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className='m-2 absolute z-[100] right-0 top-[0]'>
                                        <button onClick={() => setShowModal(false)} type="button" class="text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="extralarge-modal">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    {/* cols and row */}
                                    <div className='flex flex-col lg:flex-row md:gap-[1.75rem] justify-center items-center'>
                                        <div className={`flex-1 lg:w-1/2 w-full `}>

                                            <Carousel carouselPict={carouselPict} />
                                        </div>
                                        <div className='flex-1 flex-col '>
                                            <h2 className={`mt-[8px] font-bold md:text-[60px] text-[40px] text-black`}
                                            > {modalTitle}
                                            </h2>
                                            <p className="my-[16px] font-normal lg:text-[20px] text-[14px] text-slate-700">{modalTitle2}</p>
                                            <a href={githubLink} className="flex flex-row items-center ">
                                                <img
                                                    key={githubLink}
                                                    src='/github.png'
                                                    className="w-[34px] h-[34px] object-contain cursor-pointer filter invert"
                                                />
                                                <p className="my-[16px] font-normal lg:text-[20px] text-[14px] text-slate-700 ml-2">Checkout the code!</p>

                                            </a>
                                        </div>

                                    </div>



                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b" />
                                        <p className="my-4 lg:text-[20px] text-[14px] text-slate-700 text-lg leading-relaxed">
                                            {modalContent}
                                        </p>
                                        <div className='flex flex-col md:flex-row gap-[15rem]'>
                                            <div className='my-6'>
                                                <p className="my-4 text-slate-700 lg:text-[20px] text-[14px] font-bold	 leading-relaxed">
                                                    Features :
                                                </p>

                                                <ul className="list-disc flex justify-end items-start flex-1 flex-col">
                                                    {featureContents?.map((feature) =>
                                                        <li
                                                            key={feature}>
                                                            <p className='lg:text-[20px] text-slate-700 text-[14px]'>{feature}</p>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                            <div className='my-6'>
                                                <p className="my-4 text-slate-700 lg:text-[20px] text-[14px] font-bold	 leading-relaxed">
                                                    Tools :
                                                </p>
                                                <ul className="list-disc flex justify-end items-start flex-1 flex-col">
                                                    {Tools?.map((tool) =>
                                                        <li
                                                            key={tool}>
                                                            <p className='lg:text-[20px] text-slate-700 text-[14px]'>{tool}</p>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                    {/*footer*/}

                                </div>
                            </div>
                        </div>
                        <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </>
            {/* features, tools, challenge,  */}
            {/* ALDLWALDA */}
        </div>
    )
}

export default PortCard