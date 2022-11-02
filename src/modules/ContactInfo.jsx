import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className='contact-info'>
        <p>
            <FaEnvelope size={18} /> 
            <span> sultanova.anahit92@gmail.com </span> 
        </p>
        <p>
            <FaPhoneAlt size={18} /> 
            <span>(+374 77) 42-18-86 </span> 
        </p>
        <p>
            <FaMapMarkerAlt size={18} /> 
            <span>Zoravar Andranik str, Yerevan, Armenia </span> 
        </p>
    </div>
  )
}

export default ContactInfo;