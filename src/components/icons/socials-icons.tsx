import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as DiIcons from 'react-icons/di';
import * as FiIcons from "react-icons/fa";

const iconSize = 20

export const socialsIcons = [
  {
    icon: <SiIcons.SiMedium size={iconSize}/>,
    link: "https://medium.com/@elliottk"
  },
  {
    icon: <DiIcons.DiGithubBadge size={24}/>,
    link: "https://github.com/elliottkan"
  },
  {
    icon: <FiIcons.FaLinkedinIn size={iconSize}/>,
    link: "https://www.linkedin.com/in/elliottkan/"
  },
]

export const emailIcons = [
  {
    icon: <AiIcons.AiOutlineMail size={iconSize}/>,
    link: "elliottkan7@gmail.com"
  }
]
