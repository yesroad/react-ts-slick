import styled from 'styled-components'
import Slick from '../Slider';
import { itemsProps } from './type';

const SliderItem = styled.div`
  width: 100%;
  img{
    max-width: 100%;
    height: Auto;
  }
`;

const items:itemsProps[] = [
  {
    item: 'http://placehold.it/1200x400',
    name: '이미지01'
  },
  {
    item: 'http://placehold.it/1200x400/ff0000',
    name: '이미지01'
  },
  {
    item: 'http://placehold.it/1200x400/00ffff',
    name: '이미지01'
  },
  {
    item: 'http://placehold.it/1200x400/00ff00',
    name: '이미지01'
  },     
]

function Banner() {
  return (
    <Slick>
      {items.map((item, index) => (
        <SliderItem key={index}>
          <img src={item.item} alt={item.name} />
        </SliderItem>
      ))}
    </Slick>
  );
}

export default Banner;
