import React, {useState} from 'react';
import { InfoModal } from '../modules/InfoModal.jsx';
import {BlogImg1} from '../utils/images.js';

const CardViewImg = ({title, place, placeUrl, date, desc, moreDesc}) => {

  const [infoModal, setInfoModal] = useState(false);

  const showModalHandler = (e) => {
    e.preventDefault();
    setInfoModal(true)
  };
  
  const infoModalHandler = (e) => {
    e.preventDefault();
    setInfoModal(false)
  }
  
  return (
    <div className='card-view-img'>
        <div className='card-view-img__header'>
            <img className='cv-image' src={BlogImg1} alt={title} />
            <p className='cv-title'> {title} </p>
        </div>
        <div className='card-view-img__date'> {date} </div>
        <div className='card-view-img__desc'> {desc} </div>
        { moreDesc && <button onClick={showModalHandler}>Read More</button> }
        { infoModal && 
            <InfoModal 
               title = {title} 
               message = {moreDesc}
               onConfirm = { infoModalHandler }
            /> 
         }
    </div>
  )
}

export default CardViewImg;