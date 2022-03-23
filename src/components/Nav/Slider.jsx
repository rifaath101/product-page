import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Slider.css'
import { Images } from '../Main/imgData'

const Slider = () => {
  return (
    <div>
      <Carousel
        style={{ width: '102%', margin: '0', padding: '0' }}
        indicators={false}
        interval={null}
        nextIcon={
          <span aria-hidden='true' className='carousel-control-next-icon' />
        }
        prevIcon={
          <span aria-hidden='true' className='carousel-control-prev-icon' />
        }
      >
        {Images.map((image, id) => {
          return (
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={image.src}
                alt='carouselImg'
              />{' '}
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Slider
