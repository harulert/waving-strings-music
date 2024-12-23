import React from 'react'
import './Carousel.css'

const firstSlide = 'https://res.cloudinary.com/debouhckk/image/upload/v1733304927/Waving%20Strings/suhr/pndgzccx28wk3rtldrza.png'
const secondSlide = 'https://res.cloudinary.com/debouhckk/image/upload/v1733304927/Waving%20Strings/suhr/prwykh6zoirezaecprlz.png'
const thirdSlide = 'https://res.cloudinary.com/debouhckk/image/upload/v1733303773/Waving%20Strings/suhr/hmmwo9cmsy3bwb2rsiz2.jpg'

const Carousel = () => {

    fetch(firstSlide).then(response => response.json()).then(data => console.log(data))
    fetch(secondSlide).then(response => response.json()).then(data => console.log(data))
    fetch(thirdSlide).then(response => response.json()).then(data => console.log(data))

  return (
    <div className='carouselle'>

        <div className='carousel slide rounded' id="carouselExampleSlideOnly" data-bs-ride='carousel'>
            <div className='carousel-indicators'>
                <button className='active' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1'></button>
                <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2'></button>
                <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3'></button>
            </div>

            <div className='carousel-inner'>
                <div className='carousel-item active' data-bs-interval='3000'>
                    <img src={firstSlide} className='d-block w-100 rounded' alt='slide 1' />
                </div>
                <div className='carousel-item active' data-bs-interval='3000'>
                    <img src={secondSlide} className='d-block w-100 rounded' alt='slide 1' />
                </div>
                <div className='carousel-item active' data-bs-interval='3000'>
                    <img src={thirdSlide} className='d-block w-100 rounded' alt='slide 1' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel