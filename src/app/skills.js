import React from 'react'
import { motion } from 'framer-motion';

const technologies = [
    'HTML',
    'CSS',
    'Wordpress',
    'Tailwind',
    'Bootstrap',
    'Javascript',
    'React.js',
    'Next.js',
    'Node.js',
    'jQuery',
    'Python',
    'Github',
    'Figma',
    'Framer Motion',
    'SQL'
  ];

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 *
                index,
        },
    }),
};

function Skills() {
  return (
        <ul className="flex flex-wrap flex-row gap-3 justify-center w-[700px]">
            {technologies.map((skill,index) => { 
            <motion.li key={index} variants={fadeInAnimationVariants} viewport={{once: true}} initial="initail" whileInView="animate" className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">{skill}</motion.li>
            })}
            
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">HTML</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">CSS</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">Wordpress</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">Tailwind</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">Bootstrap</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">Javascript</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">React.js</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">Next.js</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">Node.js</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">jQuery</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">Python</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">Github</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">Figma</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">Framer Motion</motion.li>
            <motion.li className="flex justify-center font-medium text-3xl text-white items-center bg-[#EE761B] h-16 px-4 rounded-xl hover:bg-white hover:text-black cursor-grab">SQL</motion.li>
        </ul>
  )
}

export default Skills




