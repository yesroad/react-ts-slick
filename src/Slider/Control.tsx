import styled from 'styled-components';

interface controlProps {
	/** 슬라이더 총 개수 */
	count: number;
	/** 현재 슬라이드 번호 */
	currentIndex: number;
	/** autoplay 여부 */
	isPlay: boolean;
	/** autoplay 적용 토글 함수 */
	onToggle: (played: boolean) => void;
}

const ControlBoxWrapper = styled.div`
	display: block;
	align-items: center;
	padding: 5px 15px;
	background: rgba(0, 0, 0, 0.5);
	border-radius: 30px;
	position: absolute;
	right: 15px;
	bottom: 15px;
`;

const Indicator = styled.span`
	display: inline-block;
	line-height: 100%;
	color: #fff;
	text-align: center;
`;

const PlayBtn = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	color: #fff;
	&:after {
		display: block;
		content: '▶️';
	}
	&.playing {
		&:after {
			content: 'Ⅱ';
		}
	}
`;

function Control({ count, currentIndex, onToggle, isPlay }: controlProps) {
	return (
		<ControlBoxWrapper>
			<PlayBtn
				className={`${isPlay ? 'playing' : ''}`}
				onClick={(played) => onToggle(!played)}
			/>
			<Indicator>
				<strong>{currentIndex}</strong> / {count}
			</Indicator>
		</ControlBoxWrapper>
	);
}

export default Control;
