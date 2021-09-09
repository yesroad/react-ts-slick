import { useMemo, useRef } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideWrapper = styled.section`
	position: relative;
`;


interface sliderProps {
	children: React.ReactNode;
	className?: string;
}

function Slick({ children, className }: sliderProps) {
	const slick = useRef<Slider>(null);
	const settings = useMemo<Settings>(
		() => ({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true
		}), []);
	return (
		<SlideWrapper className={className}>
			<Slider ref={slick} {...settings}>
				{children}
			</Slider>
		</SlideWrapper>
	);
}

export default Slick;
