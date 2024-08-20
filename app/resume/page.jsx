"use client";

import { icons } from "lucide-react";
import {
    FaHtml5 , 
    FaCss3 , 
    FaJs , 
    FaReact , 
    FaFigma ,
    FaNodeJs, 
} from "react-icons/fa";
import {
     SiTailwindcss , SiNextdotjs, SiCplusplus, SiTensorflow, SiPytorch, SiGenerativeai,
} from "react-icons/si";
import { IoLogoPython } from 'react-icons/io'; // Python logo
import { RiAiGenerate } from "react-icons/ri";

const about = {
    title : "About Me",
    description:"Hi there I'm passionate AI/ML/DL enthusiast exploring the latest technologies, with a strong affinity for solving complex DSA challenges.",
    info :[
        {
            fieldName: "Name ", 
            fieldValue  : "Aditya Kumar",

        },
        {
            fieldName: "Phone No ", 
            fieldValue  : "9142553261",

        },
        {
            fieldName: "Coding Experience ", 
            fieldValue  : "4+ Years",

        },
        {
            fieldName: "Linked In ", 
            fieldValue  : "@Adityasatronomy",

        },
        {
            fieldName: "Email ", 
            fieldValue  : "mailmetoadityakumar@gmail.com",

        },
    ]
};

const education = {
    icon : "/assets/resume/cap.svg",
    title: "My Education",
    description: "Achieved an impressive 99.85 percentile with a rank of 4568 in JEE Mains and secured a rank of 6346 in JEE Advanced. ",
    items : [
        { 
            company : "Netaji Subhas University of Technology, Delhi ",
            position : "CSE( with AI) -",
            duration : "2021 - 2025",
            score : " 7.5 CGPA",
        },
        { 
            company : "Chinmaya Vidyalaya ",
            position : "12th Boards -",
            duration : "2019 - 2020",
            score : " 97.00 %",
        },
        { 
            company : "Chinmaya Vidyalaya ",
            position : "10th Boards -",
            duration : "2017 - 2018",
            score : " 93.20 %",
        },
    ],
};

const skills = {
    title : "My Skills",
    description: "My love for mathematics further fuels my analytical and problem-solving abilities.",
    skillList: [
        {
            icon : <SiCplusplus />,
            name : "C++",

        },
        {
            icon : <IoLogoPython />,
            name : "Python",

        },
        {
            icon : <RiAiGenerate />,
            name : "Generative AI",

        },
        {
            icon : <SiPytorch />,
            name : "Pytorch",

        },
        {
            icon : <SiTensorflow />,
            name : "Tensorflow",

        },
        {
            icon : <FaHtml5 />,
            name : "HTML 5",

        },
        {
            icon : <FaCss3 />,
            name : "CSS 3",

        },
        {
            icon : <FaJs />,
            name : "JavaScript",

        },
        {
            icon : <FaReact />,
            name : "React.Js",

        },
    ],


};

import {Tabs , TabsContent , TabsList , TabsTrigger} from "@/components/ui/tabs";

import {Tooltip , TooltipContent ,TooltipProvider , TooltipTrigger} from "@/components/ui/tooltip";
// import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@your-ui-library';


import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () =>
    {
        return (
        <motion.div 
            initial = {{opacity: 0 }} 
            animate= {{
                opacity : 1 , 
                transition : { delay : 2.4 , duration : 0.4 , ease : "easeIn"},
            }}
            className="min-h-[80vh] flex item-center justify-center py-12 xl:py-0 "
            >
                <div className="container mx-auto">
                    <Tabs 
                    defaultValue="skills" 
                    className="flex flex-col xl:flex-row gap-[60px]"
                    >
                        <TabsList className = "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                            <TabsTrigger value= "skills">Skills</TabsTrigger>
                            <TabsTrigger value= "about">About me</TabsTrigger>
                            <TabsTrigger value= "education">Education</TabsTrigger>
                            
                        </TabsList>
                        <div className="min-h-[70vh] w-full">
                            <TabsContent value = "skills" className = "w-full h-full" >
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                                        <h3 className="text-4xl font-bold ">{skills.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                        </p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-4">
                                        {skills.skillList.map((skill , index )=> {
                                            return (
                                                <li key= {index}> 
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center  items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300 ">{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="captialize ">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            );

                                        })}
                                    </ul>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value = "education" className = "w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold ">{education.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description
                                    }</p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {education.items.map((item , index )=> {
                                                return (
                                                    <li 
                                                    key = {index} 
                                                    className=" bg-[#232329] h-[184px] py-6 px-10 roundex-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent ">
                                                        {item.duration}
                                                        </span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                            {item.position} <span className=" text-accent"> {item.score} </span>
                                                        </h3>
                                                        <div className="flex items.center gap-3 ">
                                                            <span className="w-[6px] h-[6px] rounded-full big-accent text-accent">
                                                            -
                                                            </span>
                                                            <p className="text-white/60">{item.company}</p>

                                                        </div>
                                                    </li>

                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>

                                </div>

                            </TabsContent>
                            <TabsContent value = "about" className = "w-full text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                    </p>
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                        {about.info.map((item , index) =>{
                                            return (
                                                <li key = {index} className="flex items-center justify-center xl:justify-start gap-4 ">
                                                    <span className="text-white/60">{item.fieldName}</span>
                                                    <span className="text-xl">{item.fieldValue}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
        </motion.div>
        );
    };
    
    export default Resume ; 