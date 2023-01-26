import React from 'react'
import { useState } from 'react'
import Button from './Button'

const Tour = ({ tour, deleteTour }) => {
    const [readMore, setReadMore] = useState(true)

    // Set tourInfo to tour.info
    const tourInfo = tour.info

    const toggleReadMore = () => {
        setReadMore(!readMore)
    }

  return (
    <div className='tour'>
        <div className="tourImg">
            <img src={tour.image} alt="" />
        </div>
        <div className="tourText">
            <h2>{tour.name}</h2>
            <p className='info'>
                {readMore ? tourInfo.slice(0, 150) : tourInfo}
                <span onClick={toggleReadMore} className='readMore'>
                    {readMore ? '...read more' : ' show less'}
                </span>
            </p>
            <p className='price'>${tour.price}</p>
            <Button onClick={() => deleteTour(tour.id)} />
        </div>
    </div>
  )
}

export default Tour