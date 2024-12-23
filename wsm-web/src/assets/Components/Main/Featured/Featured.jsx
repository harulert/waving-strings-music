import React from 'react'
import './Featured.css'

const firstFeatured = 'https://res.cloudinary.com/debouhckk/image/upload/v1734952257/Waving%20Strings/ibanezz%20rG/iuuchneqauh7ghrebtw8.jpg'

const Featured = () => {

  fetch(firstFeatured).then(response => response.json()).then(data => console.log(data))

  return (
    <div className='featured mb-5'>
      <h1 className='text-start p-2'>FEATURED</h1>
        <div className='row mt-3'>
            <div className='col-lg-4 col-md-12 mt-3'>
              <img className='rounded' width={350} src={firstFeatured} alt='First Featured' />
            </div>
            <div className='col-lg-4 col-md-12 mt-3'>
              <img className='rounded' width={350} src={firstFeatured} alt='First Featured' />
            </div>
            <div className='col-lg-4 col-md-12 mt-3'>
              <img className='rounded' width={350} src={firstFeatured} alt='First Featured' />
            </div>
        </div>
    </div>
  )
}

export default Featured