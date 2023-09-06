import React from "react";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Main from "./containers/Main/Main";
import Auth from "./pages/Auth/Auth";

const App = () => {
	return (
		<div className="wrapper">
			<Routes>
				<Route index element={<Main/>} />
				<Route path="/auth/*" element={<Auth/>}/>
			</Routes>
		</div>
	)
}

export default App;