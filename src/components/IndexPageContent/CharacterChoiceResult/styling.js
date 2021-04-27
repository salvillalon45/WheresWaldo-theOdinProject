import styled from 'styled-components';

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
	display: flex;
	position: fixed;
	padding-top: 6px;
	padding-bottom: 6px;
	padding-left: 8px;
	padding-right: 8px;
	border-radius: 10px;
	left: 50%;
	top: 12%;
	transform: translate(-50%, 0);
	font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	background: #22222c;
`;

export { Title };
