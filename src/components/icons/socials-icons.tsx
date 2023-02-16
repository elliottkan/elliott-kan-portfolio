import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as DiIcons from 'react-icons/di';
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";

const iconSize = 20

export const socialsIcons = [
  {
    name: "Elliott Kan Medium",
    icon: <SiIcons.SiMedium size={iconSize}/>,
    link: "https://medium.com/@elliottk"
  },
  {
    name: "Elliott Kan Github",
    icon: <DiIcons.DiGithubBadge size={24}/>,
    link: "https://github.com/elliottkan"
  },
  {
    name: "Elliott Kan LinkedIn",
    icon: <FaIcons.FaLinkedinIn size={iconSize}/>,
    link: "https://www.linkedin.com/in/elliottkan/"
  },
]

export const emailIcons = [
  {
    name: "Elliott Kan Email",
    icon: <AiIcons.AiOutlineMail size={iconSize}/>,
    link: "elliottkan7@gmail.com"
  }
]

export const Icons = [
  {
    icon: <FiIcons.FiExternalLink size={iconSize}/>,
    link: "https://www.takestock.dev"
  },
  {
    icon: <FiIcons.FiGithub size={iconSize}/>,
    link: "https://github.com/FACE-co/TakeStock"
  }
]
