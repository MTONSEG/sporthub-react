import React, { useState } from 'react';
import './Burger.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { toggleMenu } from '../../../../redux/slices/header/headerSlice';

const Burger: React.FC = () => {
	const active = useAppSelector(state => state.header.activeMenu);
	const dispatch = useAppDispatch();

	const handleClickBurger = () => { dispatch(toggleMenu()) };

	return (
		<div className={`burger${active ? ' active' : ''}`} onClick={handleClickBurger}>
			<div className="burger__wrap">
				<span className="burger__icon"></span>
			</div>
		</div>
	)
}

export default Burger;