import { useMemo, useCallback, useRef } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideWrapper = styled.section`
	position: relative;
`;

const PrevButton = styled.button`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	width: 43px;
	height: 74px;
	font-size: 24px;
	background: transparent;
`;

const NextButton = styled(PrevButton)`
	left: auto;
	right: 0;
`;

interface sliderProps {
	children: React.ReactNode;
	className?: string;
	usePrevNextButtons?: boolean;
	indicator?: boolean;
	autoplay?: boolean | number;
	speed?: number;
	loop?: boolean;
}

function Slick({
	children,
	className,
	usePrevNextButtons = true,
	indicator = true,
	autoplay = true,
	speed,
	loop = true,
}: sliderProps) {
	const slick = useRef<Slider>(null);
	const settings = useMemo<Settings>(
		() => ({
			dots: indicator,
			infinite: loop,
			speed,
			slidesToShow: 1,
			adaptiveHeight: true,
			autoplay: Boolean(autoplay),
			autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
		}),
		[autoplay, indicator, loop, speed],
	);

	const slidePrev = useCallback(() => {
		slick.current?.slickPrev();
	}, []);

	const slideNext = useCallback(() => {
		slick.current?.slickNext();
	}, []);

	return (
		<SlideWrapper className={className}>
			<Slider ref={slick} {...settings}>
				{children}
			</Slider>
			{usePrevNextButtons && (
				<>
					<PrevButton onClick={slidePrev}>&lt;</PrevButton>
					<NextButton onClick={slideNext}>&gt;</NextButton>
				</>
			)}
		</SlideWrapper>
	);
}

export default Slick;
