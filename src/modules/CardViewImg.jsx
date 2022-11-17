import React, { useState } from 'react';
import { InfoModal } from '../modules/InfoModal.jsx';

const CardViewImg = ({title, imgUrl, date, desc, moreDesc}) => {

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
            <img className='cv-image' src={imgUrl} alt={title} />
            <p className='cv-title'> {title} </p>
        </div>
        <div className='card-view-img__date'> 
          Post on <span>{date}</span> by <span>S.Anahit</span> 
        </div>
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