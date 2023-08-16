import React, { useState } from 'react';
import * as C from './styles'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { ICarouselProps } from './interface'

const Carousel: React.FC<ICarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <C.CarouselWrapper>
      <C.CarouselSlide index={currentIndex} length={images.length}>
      <C.CarouselImage src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </C.CarouselSlide>
      <C.PrevButton onClick={prevSlide}><AiOutlineArrowLeft size={20}/></C.PrevButton>
      <C.NextButton onClick={nextSlide}><AiOutlineArrowRight size={20}/></C.NextButton>
    </C.CarouselWrapper>
  );
};

export default Carousel;
