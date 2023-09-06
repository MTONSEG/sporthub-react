import React from "react";
import './Auth.scss';
import { Route, Routes } from "react-router-dom";
import { ContainerAuth } from "../../containers/ContainerAuth/ContainerAuth";
import { SliderAuth } from "../../containers/SliderAuth/SliderAuth";
import { BodyAuth } from "../../containers/BodyAuth/BodyAuth";

const Auth = () => {
	return (
		<div className="auth">
			<ContainerAuth>
				<SliderAuth />
				<BodyAuth/>
			</ContainerAuth>
		</div>
	)
}

export default Auth;
