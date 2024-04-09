import React from 'react';

const Title_Desc = ({title, desc}) => {
  return (
    <>
        { title && <h2 className='title'>{title}</h2> }
        { desc && <div className='description'>{desc}</div> }
    </>
  )
}

export default Title_Desc;