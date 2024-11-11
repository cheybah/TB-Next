"use client";
import React, { Component } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './carousel.css';

class Carousel extends Component {
  componentDidMount() {
    // Initialize Swiper when the component is mounted
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,  // Default to 1 slide for small screens (mobile)
      spaceBetween: 5,    // Space between slides
      autoplay: {
        delay: 3000,      // Auto slide interval (in milliseconds)
        disableOnInteraction: false, // Keeps autoplay running when interacting
      },
      loop: true,         // Enable infinite loop
      loopAdditionalSlides: 2, // Preload additional slides to avoid gaps
      centeredSlides: true,  // Ensures the active slide is centered
      navigation: {
        nextEl: '.swiper-button-next', // Next button selector
        prevEl: '.swiper-button-prev', // Previous button selector
      },
      touchEventsTarget: 'container', // Make swipe events target the entire container
      mousewheel: {
        invert: false,   // Controls mousewheel direction
      },
      breakpoints: {
        768: { // When screen width is 768px or more (md size and above)
          slidesPerView: 3,  // Show 3 slides at a time
          spaceBetween: 10,   // Space between slides for larger screens
        },
      },
    });
    
    // Add event listener for manual control via mouse wheel (optional)
    const swiperContainer = document.querySelector('.swiper-container');
    swiperContainer?.addEventListener('wheel', (event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        swiper.slideNext();
      } else {
        swiper.slidePrev();
      }
    });
  }

  render() {
    const { slides } = this.props;

    return (
      <div className="grid mx-auto ">
        <span  className="text-center font-bold text-2xl antialiased">Nos Plus Belles Thématiques</span>

        <div className="swiper-container md:mx-auto mx-1 relative m-5 md:m-3 overflow-hidden md:h-96 md:ml-24 md:mr-24">
          <div className="swiper-wrapper flex">
            {slides.map((slide, index) => (
              <div key={index} className="swiper-slide flex justify-center items-center h-full">
                <img 
                  loading="lazy" 
                  src={slide.url_image_p}
                  className="brightness-50 w-full h-auto rounded-md" 
                  alt={`Slide no~ ${index + 1}`}
                />
                <span className="absolute top-20 text-white text-2xl">{slide.titre}</span>
                <hr className="absolute z-50 top-28 w-48 h-0.5 my-4 bg-white border-0 rounded" />
                <span className="text-sm text-white absolute top-36">à partir de</span>
                <div className="flex absolute text-white">
                  <span className="text-5xl">{slide.valeur_pourcentage}</span>
                  <span className="text-2xl">{slide.pourcentage}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="swiper-button-next hidden md:block text-white"></div>
          <div className="swiper-button-prev hidden md:block text-white"></div>
        </div>
      </div>
    );
  }
}

export default Carousel;
