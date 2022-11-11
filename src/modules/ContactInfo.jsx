import React, {useState, useEffect} from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { CopyToClipboard } from "react-copy-to-clipboard";

const ContactInfo = ({size}) => {

  const [copied, setCopied] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 1000);
      return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className='contact-info'>
        <p>
            <FaEnvelope size={size} /> 
            <CopyToClipboard
              text="sultanova.anahit92@gmail.com"
              onCopy={() => setCopied(true)}>
                <span> sultanova.anahit92@gmail.com </span>              
            </CopyToClipboard>
        </p>
        <p>
            <FaPhoneAlt size={size} />
            <CopyToClipboard
              text="+37477421886"
              onCopy={() => setCopied(true)}>
                <span>(+374 77) 42-18-86 </span>               
            </CopyToClipboard>
        </p>
        <p>
            <FaMapMarkerAlt size={size} /> 
            <CopyToClipboard
              text="https://www.google.com/maps/place/40%C2%B010'11.8%22N+44%C2%B026'50.4%22E/@40.169941,44.4467798,223m/data=!3m2!1e3!4b1!4m20!1m13!4m12!1m6!1m2!1s0x406abdd8ab0d759f:0xf3bfc983b7522755!2s105+Andranik+Zoravar+St,+Yerevan,+Armenia!2m2!1d44.4423586!2d40.1660812!1m3!2m2!1d44.4473231!2d40.1699473!3e2!3m5!1s0x0:0x3e8e892a9da78e46!7e2!8m2!3d40.1699405!4d44.4473267"
              onCopy={() => setCopied(true)}>
                <span>Zoravar Andranik str, Yerevan, Armenia </span>                
            </CopyToClipboard>
        </p>
        { copied && <span className='copied'> Copied to clipboard</span> }
    </div>
  )
}

export default ContactInfo;