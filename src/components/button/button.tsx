import styled from "styled-components";

export const Button = styled.button`
	border: 1px solid black;
	border-radius: 8px;
	padding: 4px;
	height: 32px;
	width: 200px;
	margin-top: 20px;
	background-color: #7f7a76;
	text-decoration: none;
	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	text-align: center;
	margin: 0px auto;
	&:hover {
		background-color: #9c9b9b;
	}
`;
