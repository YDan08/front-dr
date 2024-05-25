import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "../../components/container";

import { routes } from "../../utils";
import { Button } from "../../components/button";
import { DivInk, TotalInk } from "./ResultPage.styled";

interface inks {
	ink05: number;
	ink3: number;
	ink2: number;
	ink18: number;
	totalInk: number;
}

interface stateProps {
	state: {
		inksRoom: inks;
	};
}

export const ResultPage = () => {
	const { state } = useLocation() as stateProps;
	const navigate = useNavigate();
	if (!state.inksRoom) {
		navigate(routes.home);
	}
	return (
		<Container>
			<h1>Resultado</h1>
			<DivInk>
				<TotalInk>Total de tinta: {state.inksRoom.totalInk} L</TotalInk>
				<p>Total de tinta 18L: {state.inksRoom.ink18} L</p>
				<p>Total de tinta 3,6L: {state.inksRoom.ink3} L</p>
				<p>Total de tinta 2,5L: {state.inksRoom.ink2} L</p>
				<p>Total de tinta 0,5L: {state.inksRoom.ink05} L</p>
			</DivInk>
			<Button onClick={() => navigate(routes.home)}>Voltar</Button>
		</Container>
	);
};

export default ResultPage;
