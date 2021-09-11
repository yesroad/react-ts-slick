# React + Typescipt + Slick
> react typeScript Slick 슬라이더 적용

### 1. slick 설치
```
$ npm i react-slick @types/react-slick slick-carousel
```
- `react-slick` : react 에서 사용 가능한 slick 슬라이드
- `@types/react-slick` : typescript 에서 slick 를 사용하기위한 type interface가 정의되어있다.
- `slick-carousel` : slick 에서 사용할 css 를 import 하기위함

---
### 2. 기본 구조

1. `src/slider/Slick.tsx`
> styled-componetns 사용
```jsx
...import

const SlideWrapper = styled.section`
	position: relative;
`;

interface sliderProps {
  ...types
}

function Slick({
    ...props
}: sliderProps) {
	const settings = useMemo<Settings>(
		() => ({
          ...settings
		}),
		[],
	);
	return (
		<SlideWrapper className={className}>
			<Slider {...settings}>{children}</Slider>
		</SlideWrapper>
	);
}

export default Slick;
```

2. `src/components/Item.tsx`
```jsx
...import

interface itemsProps {
  ...types
}

const SliderItem = styled.div`
  width: 100%;
  img{
    max-width: 100%;
    height: Auto;
  }
`;


const items:itemsProps[] = [
  ...itemList 
]

function Item() {
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

export default Item;
```