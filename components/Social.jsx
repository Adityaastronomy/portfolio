import { Item } from "@radix-ui/react-select";
import Link from "next/link";
import {FaGithub , FaLinkedin , FaInstagram} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si';

const socials = [
    {icons : <FaGithub />, path : "https://github.com/Adityaastronomy"},
    {icons : <FaLinkedin />, path : "https://www.linkedin.com/in/adityaastronomy/"},
    {icons : <FaInstagram />, path : "https://www.instagram.com/aditya.astronomy/"},
    {icons : <SiLeetcode />, path : "https://leetcode.com/u/Adityaastronomy/"},
];
const Social = ({containerStyles , iconStyles}) => {
    return (
        <div className={containerStyles} >
            {socials.map((item , index )=> {
                return <Link key = {index} href={item.path} className={iconStyles}>{item.icons}</Link>
            })}
        </div>
    );
};

export default Social;