import React from 'react';
import { FaLinkedinIn, FaTelegramPlane, FaGit } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className='social-icons'>
        <a href='https://www.linkedin.com/in/anahit-sultanova-8323a0a4/' target='_blank'>
            <FaLinkedinIn size={22} />
        </a>
        <a href='https://t.me/soltonanna' target='_blank'>
            <FaTelegramPlane size={20} />
        </a>
        <a href='https://github.com/soltonanna' target='_blank'>
            <FaGit size={22} />
        </a>
    </div>
  )
}

export default SocialIcons;