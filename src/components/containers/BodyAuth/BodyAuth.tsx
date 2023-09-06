import React from "react";
import './BodyAuth.scss';
import Logo from "../../ui/atoms/Logo/Logo";
import { Route, Routes } from "react-router-dom";
import SingIn from "../../pages/Auth/SingIn/SingIn";

export const BodyAuth = () => {
	return (
		<div className="body-auth">
			<div className="body-auth__logo-wrap">
				<Logo />
			</div>
			<div className="body-auth__form">
				<div className="body-auth__form-body">
					<React.Suspense fallback={<>loading</>}>
						<Routes>
							<Route index element={<SingIn />} />
							<Route path="reg" element={<>singup</>} />
							<Route path="forgot" element={<>forgot pass</>} />
							<Route path="restore" element={<>restore pass</>} />
							<Route path="check" element={<>check email</>} />
						</Routes>
					</React.Suspense>
				</div>
			</div>

		</div>
	)
}