import React from 'react';

const ProgItem = ({title, url}) => {
  return (
    url 
      ? <a href={url} target="_blank" className='prog-item'> {title} </a> 
      : <div className='prog-item'> {title} </div>
  )
}

export default ProgItem;