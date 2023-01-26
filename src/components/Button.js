import React from 'react'

const Button = ({ onClick }) => {
  return (
    <div className='buttonDiv'>
        <button onClick={onClick} className='notInterested'>Not Interested</button>
    </div>
  )
}

export default Button