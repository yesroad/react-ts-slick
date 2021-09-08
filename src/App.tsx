import styled from 'styled-components';

const Wrapper = styled.section`
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
`;

const Title = styled.h1`
	font-size: 24px;
	color: #1c1c1c;
	text-align: center;
`;

function App() {
	return (
		<Wrapper>
			<Title>React + Typescript + Slick</Title>
		</Wrapper>
	);
}

export default App;
