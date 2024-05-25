import { Route, Routes } from "react-router-dom";
import { routes } from "../utils";
import { Home, ResultPage } from "../pages";

export const Router = () => {
	return (
		<Routes>
			<Route path={routes.home} element={<Home />} />
			<Route path={routes.result} element={<ResultPage />} />
		</Routes>
	);
};
