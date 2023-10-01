import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import DetailPage from "./pages/DetailPage";
import Home from "./pages/Home";
function RoutesFile() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
					<Route
						path="/:id"
						element={<DetailPage></DetailPage>}
					></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default RoutesFile;
