import React from 'react';

const ImgLink = ({imgUrl, imgAlt}) => {

    return (
        <p className='aaaaaaaaaaa'>
            <a href={imgUrl} target="_blank">
                <img src={imgUrl} alt={imgAlt ? imgAlt : ''} />
            </a>
        </p>
    )
}

export default ImgLink;