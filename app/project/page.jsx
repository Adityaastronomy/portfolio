"use client";
import {delay, motion} from "framer-motion";
import React, {useState} from "react";
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";
import {BsArrowUpRight , BsGithub} from "react-icons/bs";
import { Tooltip , TooltipContent, TooltipProvider , TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorksliderBtns";

const projects = [
    {
        num : "01",
        category: "Generative AI",
        title : "Animate-Prompt",
        description: "This project aims to create short animated videos from textual prompts using generative AI techniques. The system generates an initial image based on the prompt, and then passes it to a Stable Video Diffusion model to create a small animated video. Background music is also generated using MusicGen based on the same prompt and combined with the animation to produce the final output.",
        stack : [
            {
                name : "Stable Video Diffusion Model"
            },
            {
                name : "Music Gen"
            },
            {
                name : "Anime-mix"
            },
            {
                name : "Jupyter Notebook"
            },
        ],
        image : "/work/GenerativeAI.png",
        live: "",
        github :"https://github.com/Adityaastronomy/Animate-Prompt",
    },
    {
        num : "02",
        category: "Computer Vision",
        title : "Real-Time-Voilence-detection",
        description: "This project aims to develop a real-time violence detection system using computer vision techniques.",
        stack : [
            {
                name : "TensoreFlow"
            },
            {
                name : "OpenCV"
            },
            {
                name : "MobileNetV2"
            },
            {
                name : "Python3"
            },
        ],
        image : "/work/voilence.png",
        live: "",
        github :"https://github.com/Adityaastronomy/Real-Time-Voilence-detection",
    },
    {
        num : "03",
        category: "Machine Learning",
        title : "Home-Price-Prediction",
        description: "This data science project series walks through step by step process of how to build a real estate price prediction website.",
        stack : [
            {
                name : "NumPy"
            },
            {
                name : "Matplotlib"
            },
            {
                name : "Sklearn"
            },
            {
                name : "Python Flask"
            },
            {
                name : "HTML/CSS/JS"
            },
        ],
        image : "/work/BHP_website.png",
        live: "",
        github :"https://github.com/Adityaastronomy/Home-Price-Prediction",
    },
    {
        num : "04",
        category: "IoT and ML",
        title : "Intelligent-Wearables:",
        description: "IoT-based smartwatch that integrates machine learning for comprehensive health and activity tracking, including heart rate, step count, sleep quality, and weather prediction, offering a holistic solution for modern wellness management.",
        stack : [
            {
                name : "NumPy"
            },
            {
                name : "Matplotlib"
            },
            {
                name : "Arduino IDE"
            },
            {
                name : "Python Flask"
            },
            {
                name : "HTML/CSS?JS"
            },
        ],
        image : "/work/AIHT.png",
        live: "",
        github :"https://github.com/Adityaastronomy/Aiht_LabUnits/tree/main",
    },
];
const Project = () =>
    {
        const [project , setProject ] = useState(projects[0]);
        const handleSlideChange = (swiper) => {
            // get current slide index 
            const currentIndex = swiper.activeIndex;
            setProject(projects[currentIndex]);
        };
        return (
        <motion.section 
        initial= {{opacity : 0 }} 
        animate = {{opacity : 1 , transition : { delay: 2.4 , duration : 0.4 , ease : "easeIn"}, 
        }} 
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        > 
        <div className="container mx-auto"> 
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                <div className="flex flex-col gap-[20px] h-[50%]">
                    {/* outline num */}
                    <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                        {project.num}
                    </div>
                </div>
                    {/* project category */}
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                        {project.category}
                    </h2>
                    {/* project description */}

                    <p className="text-white/60 ">{project.description}</p>
                    <ul className="flex gap-3 ">
                        {project.stack.map((item , index )=> {
                            return (
                                <li key={index} className="text-xl text-accent">
                                    {item.name}
                                    {/* remove the last comma */}
                                    {index !== project.stack.length -1 && ","}
                                    </li>
                            );
                            
                        })}
                    </ul>
                    {/* border  */}
                    <div className="border border-white/20 "></div>
                    <div className="mt-4 border border-primary"></div> 
                    {/* button  */}
                    <div className="flex items-center gap-4">
                        <Link href= {project.github}>
                        <TooltipProvider delayDuration = {100}>
                            <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group" >
                                    <BsGithub className="text-white text-3xl group-hover:text-accent "/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Github Repository</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        </Link>
                    </div>
                    

            </div>
            <div className="w-full xl:w-[50%]">
                <Swiper 
                spaceBetween={30} 
                slidesPerView={1} 
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
                >
                    {projects.map(( project , index)=> {
                        return (
                            <SwiperSlide key = {index} className="w-full">
                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                {/* overlay  */}
                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                {/* image */}
                                <div className="relative w-full h-full ">
                                    <Image src={project.image} fill className="object-cover" alt="" />
                                </div>
                            </div>
                            </SwiperSlide>

                        );
                    })}
                    {/* sliderbutton */}
                    <WorkSliderBtns 
                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max  xl:justify-none" 
                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transistion:all"
                    />
                </Swiper>
            </div>
        </div>
        </div>
             </motion.section>
        );
    };
    
    export default Project; 