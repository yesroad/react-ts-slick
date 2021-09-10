import { useMemo, useCallback, useRef, Children, useState } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import Control from './Control';

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
	/** 슬라이더 아이템 요소 */
	children: React.ReactNode;
	/** 커스텀 클래스 */
	className?: string;
	/** pager 버튼 */
	isPager?: boolean;
	/** dot indicator */
	isIndicator?: boolean;
	/** 자동재생 (시간 설정시 number 타입으로) */
	autoplay?: boolean | number;
	/** 슬라이더 속도 */
	speed?: number;
	/** 반복 여부 */
	loop?: boolean;
	/** 컨트롤 박스 사용 여부 */
	isControl?: boolean;
	defaultIndex?: number;
}

function Slick({
	children,
	className,
	isPager = true,
	isControl = true,
	isIndicator = true,
	autoplay = true,
	speed = 300,
	loop = true,
	defaultIndex = 0,
}: sliderProps) {
	const [currentIndex, setCurrentIndex] = useState(defaultIndex);

	const slick = useRef<Slider>(null);
	const settings = useMemo<Settings>(
		() => ({
			dots: isIndicator,
			infinite: loop,
			speed,
			slidesToShow: 1,
			adaptiveHeight: true,
			autoplay: Boolean(autoplay),
			autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
			beforeChange: (current, next) => {
				setCurrentIndex(next);
			},
		}),
		[autoplay, isIndicator, loop, speed],
	);

	/** 이전 슬라이드로 이동 */
	const slidePrev = useCallback(() => {
		slick.current?.slickPrev();
	}, []);

	/** 다음 슬라이드로 이동 */
	const slideNext = useCallback(() => {
		slick.current?.slickNext();
	}, []);

	/** 슬라이드 총 개수 */
	const count = useMemo(() => Children.count(children), [children]);

	return (
		<SlideWrapper className={className}>
			<Slider ref={slick} {...settings}>
				{children}
			</Slider>
			{isPager && (
				<>
					<PrevButton onClick={slidePrev}>&lt;</PrevButton>
					<NextButton onClick={slideNext}>&gt;</NextButton>
				</>
			)}
			{isControl && <Control currentIndex={currentIndex + 1} count={count} />}
		</SlideWrapper>
	);
}

export default Slick;
