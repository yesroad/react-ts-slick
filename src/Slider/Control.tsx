import styled from 'styled-components';

interface controlProps {
	/** 슬라이더 총 개수 */
	count: number;
	/** 현재 슬라이드 번호 */
	currentIndex?: number;
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

function Control({ count, currentIndex }: controlProps) {
	return (
		<ControlBoxWrapper>
			<Indicator>
				<strong>{currentIndex}</strong> / {count}
			</Indicator>
		</ControlBoxWrapper>
	);
}

export default Control;
