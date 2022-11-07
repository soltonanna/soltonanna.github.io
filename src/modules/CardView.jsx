import React, {useState} from 'react';
import { InfoModal } from '../modules/InfoModal.jsx';

const CardView = ({title, place, placeUrl, date, desc, moreDesc}) => {

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
    <div className='card-view'>
        <div className='card-view__header'>
            <p className='cv-title'> {title} </p>
            <p className='cv-place'>
                { placeUrl 
                  ? <a href={placeUrl} target='_blank'>{place}</a>
                  : <span>{place}</span>
                }
            </p>
        </div>
        <div className='card-view__date'> {date} </div>
        <div className='card-view__desc'> {desc} </div>
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

export default CardView;