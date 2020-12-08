import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import id from '~/utils/id';
import CarouselImage from '../CarouselImage';

import { CarouselWrapper } from './styles';

function CarouselComponent({ images }) {
  return (
    images?.length > 0 && (
      <CarouselWrapper>
        <Carousel showArrows showThumbs={false}>
          {images.map(image => (
            <CarouselImage
              key={id()}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </Carousel>
      </CarouselWrapper>
    )
  );
}

export default CarouselComponent;
