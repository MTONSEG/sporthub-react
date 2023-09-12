import React from "react";
import './UserMenuHeader.scss';
// import { useAppSelector } from "../../../../../hooks/hooks";


interface UserMenuPropsType {
	photoURL: string,
	name: string
}

const UserMenuHeader: React.FC<UserMenuPropsType> = ({ name, photoURL }) => {

	// useEffect(() => { console.log(login) }, [])

	return (
		<div className="profile-header">
			<div className="profile-header__avatar-wrap">
				<img src={photoURL} alt="photo" className="profile-header__avatar" />
			</div>

			<p className="profile-header__name">{name}</p>
		</div>
	)
}

export default UserMenuHeader;