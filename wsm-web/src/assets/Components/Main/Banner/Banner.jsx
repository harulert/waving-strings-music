import React from 'react'
import './Banner.css'

const Banner = () => {
    const greet = 'WELCOME TO'
    const brandName = 'WAVING STRINGS MUSIC'
  return (
    <div className='banner text-center'>
        <h1>
            {greet} {brandName}
        </h1>
    </div>
  )
}

export default Banner