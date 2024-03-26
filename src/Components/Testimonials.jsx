import React, { useContext } from 'react';
import { UserContext } from '../Portfolio';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import des from './pat-2.png';

function Testimonials() {
  const { customers } = useContext(UserContext);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handlePrevClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const handleNextClick = () => {
    if (currentSlide < serviceData.length - 4) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return(

  <section id='customers'>
      <div className='text-center mt-20 lg:mt-30'>
        <div>
          <h1 className='text-5xl font-semibold pt-4'>TESTIMONIALS</h1>
          <p className='text-md pt-2 mb-12'>WHAT <b className='text-hover-color font-some text-3xl'>Customers Say</b></p>
        </div>
        <div className='relative'>
          <Carousel
            responsive={responsive}
            infinite
            partialVisible
            itemClass='custom-carousel-item px-5'
            keyBoardControl
            swipeable
            draggable
          
            transitionDuration={500}
            customTransition="transform 500ms ease-in-out"
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
            {customers.map((service, index) => (
              <div
                key={index}
                className='testimonial-card xl:ml-16  rounded-2xl shadow-lg relative overflow-hidden w-80 sm:w-96 h-96 bg-white text-black p-5 mb-20 text-center'
                style={{ height: '620px' }}
              >
                <div className='flex justify-center'>
                  <img src={service.image.url} alt="Customer" className='w-56 sm:w-72 rounded-full mb-6' />
                </div>
                <div>
                  <p className='text-start text-md tracking-wide opacity-60'>{service.review}</p>
                </div>
                <div className='text-start pt-6'>
                  <h1 className='text-2xl font-semibold'>{service.name}</h1>
                  <p className='text-sm text-gray-500'>{service.position}</p>
                </div>
                <div className='absolute bottom-4 right-4'>
                  <img src={des} alt="Design Element" className='w-24' />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
