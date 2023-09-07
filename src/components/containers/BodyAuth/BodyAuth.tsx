import React from "react";
import './BodyAuth.scss';
import Logo from "../../ui/atoms/Logo/Logo";
import { Route, Routes } from "react-router-dom";
import SingIn from "../../pages/Auth/SingIn/SingIn";
import SingUp from "../../pages/Auth/SingUp/SingUp";
import ForgotPassword from "../../pages/Auth/ForgotPassword/ForgotPassword";

export const BodyAuth = () => {
	return (
		<div className="body-auth">
			<div className="body-auth__logo-wrap">
				<Logo />
			</div>
			<div className="body-auth__form">
				<div className="body-auth__form-body">
						<Routes>
							<Route index element={<SingIn />} />
							<Route path="reg" element={<SingUp/>} />
							<Route path="forgot" element={<ForgotPassword/>} />
							<Route path="restore" element={<>restore pass</>} />
							<Route path="check" element={<>check email</>} />
						</Routes>
				</div>
			</div>

		</div>
	)
}