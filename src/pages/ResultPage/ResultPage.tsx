import { useLocation, Location, Navigate, Link } from "react-router-dom";
import { Container } from "../../components/container";

import { routes } from "../../utils";
import { Button } from "../../components/button";
import { InkModel } from "../../hooks/useApollo";
import { DivInk, TotalInk } from "./ResultPage.styled";

export const ResultPage = () => {
	const { state } = useLocation() as Location<{ inksRoom: InkModel }>;

	if (!state?.inksRoom) {
		return <Navigate to={routes.home} />;
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
			<Link to={routes.home}>
				<Button>Voltar</Button>
			</Link>
		</Container>
	);
};
