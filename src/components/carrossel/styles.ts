import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const CarouselSlide = styled.div<{ index: number; length: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => -props.index * (0 / props.length)}%);
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 25em;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
`;

export const PrevButton = styled(CarouselButton)`
  left: 0;
`;

export const NextButton = styled(CarouselButton)`
  right: 0;
`;