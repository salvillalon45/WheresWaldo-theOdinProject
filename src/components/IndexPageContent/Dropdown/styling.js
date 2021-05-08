import styled from 'styled-components';

const DropdownContainer = styled.div`
	background-color: var(--darkBlue);
	padding: 12px;
	padding-bottom: 0;
	border-radius: 10px;
	position: absolute;
`;

const DropdownMenu = styled.ul`
	margin-left: 4px;
	margin-top: -3px;
	margin-bottom: 15px;
`;

const DropdownItem = styled.li`
	text-transform: capitalize;
	list-style-type: none;
	color: var(--babyBlue);
	cursor: pointer;
	&:hover {
		color: orange;
	}
`;

export { DropdownItem, DropdownMenu, DropdownContainer };
