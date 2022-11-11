import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const ProgItem = ({title, url, star, starUrl}) => {
  return (
    url 
      ? ( <div className='prog-item'>
          <a href={url} target="_blank" > { title }</a> 
          { star && <a href={starUrl} target="_blank"> <FaCertificate /> </a> }
      </div> ) 
      : (
        <div className='prog-item'> 
          {title} 
          { star && <a href={starUrl} target="_blank"> <FaCertificate /> </a> }
        </div>
      )
  )
}

export default ProgItem;