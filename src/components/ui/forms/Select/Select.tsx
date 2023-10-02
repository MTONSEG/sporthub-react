import React, { useEffect, useRef, useState } from "react";
import './Select.scss';
import { ItemSelectType, setCategoryValue } from '../../../../redux/slices/video/videoSlice';
import { useAppDispatch } from '../../../../hooks/hooks';

type selectType = {
	list: ItemSelectType[],
	title: string,
	placeholder?: string,
	value: string,
	setStateValue?: Function,
	className?: string,
}

const Select: React.FC<selectType> = ({
	list, title, placeholder, value, setStateValue, className
}) => {
	const dispatch = useAppDispatch();
	const [activeList, setActiveList] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement>();

	const handleItemClick = (id: string | number, e: React.MouseEvent<HTMLLIElement>): void => {
		e.stopPropagation();
		dispatch(setStateValue(id))
		setActiveList(false);
	}
	const handlerHeaderClick = (): void => {
		setActiveList(true);
	}
	const handleOutClick = (e: MouseEvent | TouchEvent): void => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			setActiveList(false);
		} 
	}

	useEffect((): VoidFunction => {
		document.addEventListener('click', handleOutClick);
		return () => {
			document.removeEventListener('click', handleOutClick);
		}
	}, []);

	return (
		<div
			ref={ref}
			className={`select-filed${activeList ? ' active' : ''} ${className ? className : ''}`}
			onClick={handlerHeaderClick}
		>
			<p className="select-filed__title">{title}</p>
			<div className="select-filed__wrap">
				<div
					className="select-filed__header"
					style={!value ? { color: '#999' } : { color: '#fff' }}>
					{
						value ? value : placeholder
					}
				</div>
				<ul className="select-filed__list">
					{
						list?.map(el => (
							<li
								className={`select-filed__item${el.selected ? ' selected' : ''}`}
								key={el.id}
								onClick={(e) => { handleItemClick(el.id, e) }}
							>
								{el.title}
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default Select
