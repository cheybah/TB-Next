"use client";
import React, { useState } from 'react';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
import './carousel.css'; 
const Carousel = ({ slides }) => {
  
  // Manual state to track if the observer is set up or not
  const [isObserverSet, setIsObserverSet] = useState(false);

  // Intersection observer logic (added manually)
  const addIntersectionObserver = () => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      });

      const hiddenElements = document.querySelectorAll('.hidden2');
      hiddenElements.forEach((element) => observer.observe(element));

      // Set observer flag to true after setting the observer
      setIsObserverSet(true);
    }
  };

  // Manually add the intersection observer when the component is first rendered
  if (!isObserverSet) {
    addIntersectionObserver();
  }

  // If no slides are available, show loading state.
  if (slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1 className="text-center font-bold text-2xl antialiased mo hidden2">
          Nos Plus Belles Thématiques
        </h1>
      </div>
      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          focus: 'center',
          autoplay: true,
          interval: 2000, // 3 seconds interval
          speed: 700,
          pauseOnHover: true,
          flickMaxPages: 1,
          updateOnMove: true,
          pagination: false,
          padding: '10%',
          breakpoints: {
            1440: {
              perPage: 2, // 2 images for medium screens
              padding: '10%',
            },
            1024: {
              perPage: 1, // 1 image for smaller screens
              padding: '30%',
            },
          },
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="relative mx-2">
              <img
                src={slide.url_image_p}
                alt={`Slide no~ ${index + 1}`}
                className="carousel-image"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <a href={slide.url_redirection} className="text-3xl font-bold mb-4">
                  Slide {index + 1}
                </a>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}

export default Carousel;
