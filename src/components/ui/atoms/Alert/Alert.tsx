import React, { useEffect, useState } from 'react';
import './Alert.scss';
import { useAppSelector } from '../../../../hooks/hooks';


export const Alert: React.FC = () => {
	const state = useAppSelector(state => state.alert);
	const [active, setActive] = useState<boolean>(false)

	useEffect(() => {
		setActive(state.show)
	}, [state.show])

	return (
		<div className={`alert ${state.show && 'show'} alert_${state.variant}`}>
			<div className="alert__icon"></div>
			<p className="alert__mess">{state.mess}</p>
		</div>
	)
}