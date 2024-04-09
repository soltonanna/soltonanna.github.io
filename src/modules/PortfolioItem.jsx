import React from 'react';
import { FaEye, FaLink, FaGit } from 'react-icons/fa';

const PortfolioItem = ({imgUrl, title, demoUrl, codeUrl}) => {

  return (
    <figure className='portfolio-item'>
        <img src={imgUrl} alt={title} className='portfolio-item__img' />
        <figcaption className='portfolio-item__fig-caption'>
            <div className='more-icons'>
              <a href={imgUrl} target="_blank"><FaEye  /></a>
              { demoUrl && <a href={demoUrl} target='_blank'><FaLink /></a> }
              { codeUrl && <a href={codeUrl} target='_blank'><FaGit /></a> }
            </div>
            <h3 className='item-title'> {title} </h3>
        </figcaption>
    </figure>
  )
}

export default PortfolioItem;