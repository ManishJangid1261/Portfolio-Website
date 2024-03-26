import React  from 'react'
import { useContext } from 'react'
import { UserContext } from '../Portfolio'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Services() {
  const { serviceData } = useContext(UserContext)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Add a state variable to keep track of the current slide
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Add a function to handle the previous button click
  const handlePrevClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  // Add a function to handle the next button click
  const handleNextClick = () => {
    if (currentSlide < serviceData.length - 4) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <section id='Services'>
    <div className='text-center mt-20 lg:mt-36 relative'>
      <div>
        <h1 id='Skills' className='text-5xl font-semibold pt-4'>WHAT I DO</h1>
        <p className='text-md pt-2 mb-20'>MY <b className='text-hover-color font-some text-3xl'>SERVICES</b></p>
      </div>
      <div className='relative'>
        <Carousel
          responsive={responsive}
          infinite
          partialVisible
          itemClass='px-10'
          keyBoardControl
          swipeable
          draggable
          transitionDuration={500}
          customTransition="transform 500ms ease-in-out"
          beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
          renderButtonGroupOutside={(onArrowClickHandler, totalItems, currentSlide, itemCount) => (
            <div className='absolute top-1/2 -translate-y-1/2 left-0 flex space-x-3'>
              <button
                className='focus:outline-none bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                onClick={handlePrevClick}
              >
                Prev
              </button>
              <button
                className='focus:outline-none bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                onClick={onArrowClickHandler}
              >
                {totalItems}
              </button>
              <button
                className='focus:outline-none bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          )}
        >
          {serviceData.map((service, index) => (
            <div key={index} className={`p-3 rounded-lg shadow-lg flex flex-col h-96 items-center bg-gray-800 text-center  pb-5 mb-10 text-white ${currentSlide + 1 > index + 1 ? 'opacity-50' : ''} ${currentSlide + 1 === index + 1 ? 'z-10' : ''}`}>
              <div className='md:w-60 mt-4 md:h-72  overflow-hidden rounded-lg bg-white '>
                <img src={service.image.url} className='w-full h-full object-cover' />
              </div>
              <h2 className='text-2xl font-semibold mt-8 '>{service.name}</h2>
              <p className=' mt-4 opacity-80'>{service.desc}</p>
              <p className=' mt-4 font-semibold text-hover-color text-2xl'>{service.charge}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
    </section>
  )
}

export default Services