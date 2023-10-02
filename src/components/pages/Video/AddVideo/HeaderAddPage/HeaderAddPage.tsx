import React, { useEffect, useState } from 'react';
import './HeaderAddPage.scss';
import { Title } from '../../../../ui/atoms/Title/Title';
import { Button } from '../../../../ui/buttons/Button/Button';
import { ButtonPopup } from '../../../../ui/buttons/ButtonPopup/ButtonPopup';

type HeaderAddPage = {
	title: string,
	titleBtn: string,
	handleSave: () => void
}

const HeaderAddPage: React.FC<HeaderAddPage> = ({
	title, titleBtn, handleSave
}) => {
	const [activePopup, setActivePopup] = useState<boolean>(false);

	useEffect((): void => {
	}, [])

	const handleClickPopup = (): void => { setActivePopup(!activePopup) }
	return (
		<div className='header-add'>
			<Title text={title} />
			<div className="header-add__nav">
				<Button
					className='header-add__btn'
					onClickHandler={handleSave}
				>{titleBtn}</Button>
				<ButtonPopup handleClick={handleClickPopup} />
			</div>
		</div>
	)
}

export default HeaderAddPage;