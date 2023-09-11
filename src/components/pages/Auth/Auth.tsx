import React, { useEffect, useRef, useState } from "react";
import './Auth.scss';
import { Route, Routes } from "react-router-dom";
import { ContainerAuth } from "../../containers/ContainerAuth/ContainerAuth";
import { BodyAuth } from "../../containers/BodyAuth/BodyAuth";
import SliderAuth from "../../containers/SliderAuth/SliderAuth";

const Auth = () => {
	const [widthScreen, setWidthScreen] = useState<number>(0);
	const ref = useRef(null);

	useEffect((): void => {
		setWidthScreen(window.innerWidth);
	}, [widthScreen])

	return (
		<div ref={ref} className="auth">
			<ContainerAuth>
				{
					widthScreen > 992
						? <SliderAuth />
						: <></>
				}
				<BodyAuth />
			</ContainerAuth>
		</div>
	)
}

export default Auth;
