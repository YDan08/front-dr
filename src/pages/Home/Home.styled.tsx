import styled from "styled-components";

export const DivFormWall = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin: 20px;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 20px;
	}
`;

export const DivButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
