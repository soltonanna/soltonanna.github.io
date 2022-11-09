import React, {useState} from 'react';
import { FaEye } from 'react-icons/fa';
import { InfoModal} from '../modules/InfoModal.jsx';

const PortfolioItem = ({imgUrl, title, desc, gitUrl}) => {

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
    <figure className='portfolio-item'>
        <img src={imgUrl} alt={title} className='portfolio-item__img' />
        <figcaption className='portfolio-item__fig-caption'>
            <FaEye onClick={showModalHandler} />
            <h2 className='item-title' onClick={showModalHandler}> {title} </h2>
            { infoModal && 
              <InfoModal 
                title = {title} 
                message = {desc}
                onConfirm = { infoModalHandler }
              /> 
            }
        </figcaption>
    </figure>
  )
}

export default PortfolioItem;