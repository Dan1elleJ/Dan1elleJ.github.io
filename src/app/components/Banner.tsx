'use client'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
  const bannerImages = [
    {src: '/images/banner-bg-1.jpg', alt: 'Banner 1'},
    {src: '/images/banner-bg-2.jpg', alt: 'Banner 2'},
    {src: '/images/banner-bg-3.jpg', alt: 'Banner 3'}
  ]

  return (
    <div className={`relative h-[70vh] overflow-hidden`}>
      <div className="absolute inset-0 z-0 opacity-30 bg-beige">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={2000}
          className='h-full'
        >
          {bannerImages.map((image, index) => (
           <div key={index} className="h-full">
            <div style={{ height: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
               src={image.src}
               alt={image.alt}
               className="w-full max-h-full object-contain" // Contain image within the bounds
               style={{ maxHeight: 'inherit', objectFit: 'contain', objectPosition: 'center center' }}
              />
            </div>
          </div> 
          ))}
        </Carousel>
      </div>
      <div className="absolute inset-0 z-10  p-[25vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold mb-6">Jack of all trades, master of none</h1>
        <p className="text-l font-bold text-[#000]">All my life I’ve never been a big fan of school. I would just stare out the window as the teachers dragged on about cells or the pythagorean theorem or whatever tedious subject we were learning that day. Every day it was 7 hours of boredom and 40 minutes of excitement, which was art class. I loved the feeling of taking a blank piece of paper and turning it into something beautiful. My love of art spilled into my other subjects as well. When creating a presentation I found myself more focused on the colour scheme or which font best suited which layout, rather than on the actual assignment. I loved figuring out how to relate the subject to the design of each slide. It would always bother me how un-aesthetically pleasing the presentations of other students and teachers were, and how I could improve them if I had the chance. Art class was the only class that I really liked. I was not always the most talented artist in the class, but I tried the hardest and I loved what I was doing.</p>
      </div>
    </div>
  );
}

export default Banner;