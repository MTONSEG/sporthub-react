import React, { useEffect } from "react";
import './Main.scss';
import Header from "../Header/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AUTH_ROUTE } from "../../../routes/routes";
import { getAuth, signOut } from "firebase/auth";
import Loading from "../../ui/atoms/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setMessage, showAlert } from "../../../redux/slices/alert/alertSlice";
import { setLogin } from "../../../redux/slices/header/headerSlice";
import { setCurrentUser } from "../../../redux/slices/auth/singinSlice";
import Container from "../Container/Container";


const Home = React.lazy(() => import('../../pages/Home/Home'));
const Navbar = React.lazy(() => import('../../pages/Home/Navbar/Navbar'));

export interface BaseUser {
	uid: string | number,
	name: string,
	email: string,
	photoURL: string,
}

const Main: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const auth = getAuth();

	const { currentUser } = useAppSelector(state => state.singin);

	useEffect(() => {
		const user: BaseUser = JSON.parse(localStorage.getItem('sh-current'));

		if (user) {
			dispatch(setLogin(true));

			if (user.name) {
				dispatch(setCurrentUser({ name: user.name, photoURL: user.photoURL }));
			}

			if (!sessionStorage.getItem('welcome')) {
				dispatch(setMessage(`Welcome ${user.name}`))
				dispatch(showAlert(true));

				setTimeout((): void => {
					dispatch(showAlert(false));
				}, 1000)
			}

			window.sessionStorage.setItem('welcome', 'true');
		} else {
			navigate(AUTH_ROUTE)
		}
	}, [])


	return (
		<React.Suspense fallback={<Loading />}>
			<Header />
			<Container>
				<div className="main">
					<Navbar />
					<div className="main__body">
						<Routes>
							<Route index element={<Home />} />
							<Route path="/latest" element={<>latest</>} />
							<Route path='/later' element={<>later</>} />
						</Routes>
					</div>
				</div>


			</Container>
			{/* <Link style={{fontSize: '40px'}} to={AUTH_ROUTE}>SingIn</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_REG_ROUTE}>SingUp</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_FORGOT_ROUTE}>Forogot</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_CHECK_ROUTE}>Check</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_RESTORE_ROUTE}>Restore</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_DATA_ROUTE}>Data</Link> */}
		</React.Suspense>
	)
}

export default Main;