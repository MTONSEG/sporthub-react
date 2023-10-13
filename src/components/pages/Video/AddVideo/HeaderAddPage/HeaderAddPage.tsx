import React, { useEffect, useState } from 'react';
import './HeaderAddPage.scss';
import { Title } from '../../../../ui/atoms/Title/Title';
import { Button } from '../../../../ui/buttons/Button/Button';
import { ButtonPopup } from '../../../../ui/buttons/ButtonPopup/ButtonPopup';
import { VIDEO_ROUTE } from '../../../../../routes/routes';
import PopupOption from '../../../../ui/atoms/PopupOption/PopupOption';

type HeaderAddPage = {
	title: string,
	titleBtn: string,
	path?: string,
	disabledBtn?: boolean,
	handleSave: () => void
}

const HeaderAddPage: React.FC<HeaderAddPage> = ({
	title, titleBtn, disabledBtn, path, handleSave
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
					disabled={disabledBtn}
					path={path ? path : VIDEO_ROUTE}
					className={`header-add__btn`}
					onClickHandler={handleSave}
				>{titleBtn}</Button>
				{/* <PopupOption>

				</PopupOption> */}
				{/* <ButtonPopup handleClick={handleClickPopup} disabled={disabledBtn} /> */}
			</div>
		</div>
	)
}

export default HeaderAddPage;