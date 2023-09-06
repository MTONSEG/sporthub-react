import React from "react";
import './Auth.scss';
import { Route, Routes } from "react-router-dom";

const Auth = () => {
	return (
		<div className="auth">
			<ContainerAuth>
				<SliderAuth />
				<BodyAuth />
			</ContainerAuth>
		</div>
	)
}

export default Auth;

const BodyAuth = () => {
	return (
		<div className="body-auth">
			lol
		</div>
	)
}

const SliderAuth = () => {
	return (
		<div className="slider-auth">
			<Routes>
				<Route index element={<></>}/>
			</Routes>
		</div>
	)
}

const ContainerAuth = ({ children }) => {
	return (
		<div className="container-auth">
			{children}
		</div>
	)
}