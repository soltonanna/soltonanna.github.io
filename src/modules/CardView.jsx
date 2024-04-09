import React, {useState} from 'react';
import { InfoModal } from '../modules/InfoModal.jsx';
import Button from '../modules/Button.jsx';

const CardView = ({title, place, placeUrl, date, desc, fullDesc, moreDesc}) => {

  const [infoModal, setInfoModal] = useState(false);
  const [fullDescToggle, setFullDescToggle] = useState(false);

  const showModalHandler = (e) => {
    e.preventDefault();
    setInfoModal(true)
  };
  
  const infoModalHandler = (e) => {
    e.preventDefault();
    setInfoModal(false)
  }

  const showFullDescHandler = (e) => {
    e.preventDefault();
    setFullDescToggle(!fullDescToggle);
  }
  
  return (
    <div className='card-view'>
        <div className='card-view__header'>
            <p className='cv-title subtitle'> {title} </p>
            <p className='cv-place'>
                { placeUrl 
                  ? <a href={placeUrl} target='_blank'>{place}</a>
                  : <span>{place}</span>
                }
            </p>
        </div>
        <div className='card-view__date'> {date} </div>

        { !fullDescToggle && <div className='card-view__desc'> {desc} </div> } 
        { fullDescToggle && <div className='card-view__desc-full'> {fullDesc} </div>} 

        <div className='card-view__buttons'>
          { fullDesc && <Button onClick={showFullDescHandler}> 
            {!fullDescToggle ? "Read More" : "Hide"}
            </Button> 
          }
          
          { moreDesc && <Button onClick={showModalHandler}>More Info</Button> }
        </div>

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