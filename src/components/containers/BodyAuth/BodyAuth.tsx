import React from "react";
import './BodyAuth.scss';
import Logo from "../../ui/atoms/Logo/Logo";
import { Route, Routes } from "react-router-dom";
import Loading from "../../ui/atoms/Loading/Loading";

const SingIn = React.lazy(() => import("../../pages/Auth/SingIn/SingIn"));
const SingUp = React.lazy(() => import("../../pages/Auth/SingUp/SingUp"));
const ForgotPassword = React.lazy(() => import("../../pages/Auth/ForgotPassword/ForgotPassword"));
const CheckEmail = React.lazy(() => import("../../pages/Auth/CheckEmail/CheckEmail"));
const RestorePassword = React.lazy(() => import("../../pages/Auth/RestorePassword/RestorePassword"));
const PersonalAuth = React.lazy(() => import('../../pages/Auth/PersonalAuth/PersonalAuth'));

export const BodyAuth = () => {
	return (
		<div className="body-auth">
			<div className="body-auth__logo-wrap">
				<Logo />
			</div>
			<div className="body-auth__form">

				<React.Suspense fallback={<Loading />}>
					<div className="body-auth__form-body">

						<Routes>
							<Route
								index
								element={<SingIn />} />
							<Route
								path="reg"
								element={<SingUp />} />
							<Route
								path="forgot"
								element={<ForgotPassword/>} />
							<Route
								path="restore"
								element={<RestorePassword />} />
							<Route
								path="check"
								element={<CheckEmail/>} />
							<Route
								path="personal"
								element={<PersonalAuth />} />
						</Routes>
					</div>
				</React.Suspense>
			</div>
		</div >
	)
}