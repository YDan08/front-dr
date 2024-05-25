import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { Main } from "./components/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<Main>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
			<ToastContainer />
		</Main>
	);
}

export default App;
