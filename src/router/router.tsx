import { Route, Routes } from "react-router-dom"
import { routes } from "../utils"
import { Home } from "../pages"

export const Router = () => {
	return (
		<Routes>
			<Route path={routes.home} element={<Home />} />
		</Routes>
	)
}

export default Router
