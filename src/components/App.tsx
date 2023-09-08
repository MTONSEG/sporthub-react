import React from "react";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Main from "./containers/Main/Main";
import Auth from "./pages/Auth/Auth";

const PersonalAuth = React.lazy(() => import('./pages/Auth/PersonalAuth/PersonalAuth'));

const App = () => {
	return (
		<div className="wrapper">
			<Routes>
				<Route index element={<Main/>} />
				<Route path="/auth/*" element={<Auth />} />
				<Route path="/auth/personal" element={<PersonalAuth/>}/>
			</Routes>
		</div>
	)
}

export default App;