import React from 'react'

const RectProgressBar = ({label, percent, className}) => {
  return (
    <div className='rect-progress-bar'>
        <h2>{ label }</h2>
        <div className='progress-bar'>
            <div className={className}>
            <span>{percent}%</span>
            </div>
        </div>
    </div>
  )
}

export default RectProgressBar;