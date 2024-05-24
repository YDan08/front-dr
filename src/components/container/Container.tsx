import styled from "styled-components";

export const Container = styled.div`
	width: 840px;
	background-color: #b6b6b2;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
	@media (max-width: 1024px) {
		width: 100%;
		height: 100%;
		border-radius: 0px;
		padding: 0px;
	}
`;
