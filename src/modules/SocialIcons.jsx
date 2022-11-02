import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaGit } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className='social-icons'>
        <a href='https://www.linkedin.com/in/sultanova-anahit-8323a0a4/' target='_blank'>
            <FaLinkedinIn size={22} />
        </a>
        <a href='https://www.facebook.com/anahit.sultanova' target='_blank'>
            <FaFacebookF size={20} />
        </a>
        <a href='https://github.com/soltonanna' target='_blank'>
            <FaGit size={22} />
        </a>
    </div>
  )
}

export default SocialIcons;