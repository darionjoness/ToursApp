import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, deleteTour }) => {
  return (
    <div className='tours grid container'>
        {tours.map(tour => <Tour key={tour.id} tour={tour} deleteTour={deleteTour} />)}
    </div>
  )
}

export default Tours