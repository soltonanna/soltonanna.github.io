import React from 'react';

const Title_Desc = ({title, desc}) => {
  return (
    <>
        <h1 className='title'>{title}</h1>
        <div className='description'>{desc}</div>
    </>
  )
}

export default Title_Desc;