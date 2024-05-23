import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"
import { Main } from "./components/Layout"

function App() {
	return (
		<Main>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Main>
	)
}

export default App
