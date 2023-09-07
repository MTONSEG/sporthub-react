import React, { useState } from "react";
import './BodyAuth.scss';
import Logo from "../../ui/atoms/Logo/Logo";
import { Route, Routes } from "react-router-dom";
import SingIn from "../../pages/Auth/SingIn/SingIn";
import SingUp from "../../pages/Auth/SingUp/SingUp";
import ForgotPassword from "../../pages/Auth/ForgotPassword/ForgotPassword";
import CheckEmail from "../../pages/Auth/CheckEmail/CheckEmail";
import RestorePassword from "../../pages/Auth/RestorePassword/RestorePassword";

export const BodyAuth = () => {
	const [restoreEmail, setRestoreEmail] = useState<string>('test@mgmail.com');

	return (
		<div className="body-auth">
			<div className="body-auth__logo-wrap">
				<Logo />
			</div>
			<div className="body-auth__form">
				<div className="body-auth__form-body">
					<Routes>
						<Route index element={<SingIn />} />
						<Route path="reg" element={<SingUp />} />
						<Route path="forgot" element={<ForgotPassword setRestoreEmail={setRestoreEmail} />} />
						<Route path="restore" element={<RestorePassword />} />
						<Route path="check" element={<CheckEmail email={restoreEmail} />} />
					</Routes>
				</div>
			</div>

		</div>
	)
}