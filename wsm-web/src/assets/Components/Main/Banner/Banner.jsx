import React from 'react'
import './Banner.css'

const Banner = () => {
    const greet = 'Welcome to'
    const brandName = 'Waving Strings Music'
  return (
    <div className='banner text-center'>
        <h1>
            {greet} {brandName}
        </h1>
    </div>
  )
}

export default Banner