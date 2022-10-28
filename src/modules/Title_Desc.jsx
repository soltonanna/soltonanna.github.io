import React from 'react';

const Title_Desc = ({title, desc}) => {
  return (
    <>
        <h1 className='title'>{title}</h1>
        <p className='description'>{desc}</p>
    </>
  )
}

export default Title_Desc