import React, {  ReactNode, useEffect, useRef, useState } from 'react';
import './PopupOption.scss';
import { ButtonPopup } from '../../buttons/ButtonPopup/ButtonPopup';

type PopupOptionPropsType = {
	children: ReactNode
}

const PopupOption: React.FC<PopupOptionPropsType> = ({
	children
}) => {
	const [active, setActive] = useState<boolean>();
	const ref = useRef<HTMLDivElement>();
	const handleClick = () => { setActive(!active) };

	const handleOutClick = (e: MouseEvent | TouchEvent): void => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			setActive(false);
		} 
	}

	useEffect(() => {
		document.addEventListener('click', handleOutClick);

		return () => {
			document.removeEventListener('click', handleOutClick);
		}
	}, [])

	return (
		<div ref={ref} className={`popup-option ${active ? 'active' : ''}`}>
			<ButtonPopup className='popup-option__btn' handleClick={handleClick} />
			<ul className="popup-option__list" onClick={handleClick}>
				{children}
			</ul>
		</div>
	)
}

export default PopupOption;