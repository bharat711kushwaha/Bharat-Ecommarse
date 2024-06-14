// src/components/Slider.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../Style/Button';
// Styled components
export const SliderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  height: 500px;
`;

export const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

export const Slide = styled.div`
  min-width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 400px; // Set the desired height for the images
  object-fit: cover
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &:focus {
    outline: none;
  }

  ${({ left }) => left && `left: 10px;`}
  ${({ right }) => right && `right: 10px;`}
`;


// React component
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_640.jpg",
    "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://cdn.pixabay.com/photo/2021/12/27/19/28/e-commerce-6898102_640.png",
    "https://cdn.pixabay.com/photo/2022/03/24/22/57/online-shop-7090027_640.png",
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
   "https://images.pexels.com/photos/3707744/pexels-photo-3707744.jpeg?auto=compress&cs=tinysrgb&w=600",
   "https://t4.ftcdn.net/jpg/03/98/30/35/240_F_398303538_djQdXd00Rzqj9AX3iMR3texyb19BQwYt.jpg"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <SliderWrapper>
      <SliderContainer currentIndex={currentIndex}>
        {images.map((src, index) => (
          <Slide key={index}>
            <Image src={src} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SliderContainer>
      {/* // &#9664;  // Left arrow (◀) */}
      <NavigationButton left onClick={prevSlide}>&#9664;</NavigationButton> 

      {/* // Right arrow (▶) */}
      <NavigationButton right onClick={nextSlide}>&#9654;</NavigationButton>
    
    </SliderWrapper>
  );
};


export default Slider;
