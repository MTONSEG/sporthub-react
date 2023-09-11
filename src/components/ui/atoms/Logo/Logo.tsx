import React from "react";
import './Logo.scss';
import { Link } from "react-router-dom";
import logo from '../../../../assets/icons/logo.svg';

const Logo = ({ className='logo' }) => {
	return (
		<Link to='/' className={className}>
			<img width={144} height={32} src={logo} alt="sporthub" className="logo__icon" />
		</Link>
	)
}
export default Logo;