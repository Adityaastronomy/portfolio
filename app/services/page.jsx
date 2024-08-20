"use client";
import { BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";

const services = [
    {
        num : "01",
        title: "ML Engineer",
        description: "As an aspiring ML Engineer, I develop and deploy machine learning models to solve complex problems. Proficient in Python, TensorFlow, and scikit-learn, I specialize in data analysis, model optimization, and algorithm development. I am passionate about integrating AI solutions to drive innovation and extract actionable insights from data.",
        href :"https://github.com/Adityaastronomy/Home-Price-Prediction",

    },
    {
        num : "02",
        title: "DL/AI Engineer",
        description: "As an AI/DL Engineer, I specialize in designing and implementing deep learning models to tackle complex challenges. Proficient in TensorFlow and PyTorch, I focus on neural network architectures, model optimization, and scalable AI solutions.",
        href :"https://github.com/Adityaastronomy/Animate-Prompt",

    },
    {
        num : "03",
        title: "Data Structures & Algorithms Expert",
        description: "Solved over 700 questions on various competitive programming platforms, including 300+ on LeetCode.",
        href :"https://leetcode.com/u/Adityaastronomy/",

    },
    {
        num : "04",
        title: "Web Developer",
        description: "As a Web Developer, I design and build dynamic, user-centric websites and applications. Skilled in HTML, CSS, JavaScript, and popular frameworks like React and Next JS, I focus on creating responsive, high-performance web experiences.",
        href :"https://github.com/Adityaastronomy",

    },
];

import { motion } from "framer-motion";

const Services = () =>
{
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12  xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                initial= {{opacity: 0}} 
                animate ={{
                    opacity: 1, 
                    transition: 
                    {delay : 2.4 , duration : 0.4, ease : "easeIn"}

                }}
                className="grid grid-cols-1 md:grid-cols-2 gap=[60px]"
                >
                    {services.map((services ,index)=> {
                        return <div key= {index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{services.num}</div>
                                <Link href={services.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className="text-primary text-3xl "/>
                                </Link>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{services.title}</h2>
                            <p className="text-white/60 ">{services.description}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    })}

                </motion.div>
                </div>
        </section>
    );
};

export default Services; 