import React from 'react';

interface Props {
  prop: string;
}



const ResumeLink: React.FC<Props> = ({prop}) => {
  return (
    <a
    className=""
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    >
      {prop}
    </a>
  )
}

const EmailLink: React.FC<Props> = ({prop}) => {

  return (
    <a href="mailto:elliottkan7@gmail.com">{prop}</a>
  )
}

export { ResumeLink, EmailLink }
