import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = ({size}) => {
  return (
    <div className='contact-info'>
        <p>
            <FaEnvelope size={size} /> 
            <span> sultanova.anahit92@gmail.com </span> 
        </p>
        <p>
            <FaPhoneAlt size={size} /> 
            <span>(+374 77) 42-18-86 </span> 
        </p>
        <p>
            <FaMapMarkerAlt size={size} /> 
            <span>Zoravar Andranik str, Yerevan, Armenia </span> 
        </p>
    </div>
  )
}

export default ContactInfo;