import React from 'react';
import sprite from './sprites.svg';

type iconPropsType = {
	id: string,
	className: string
}

export const Icon: React.FC<iconPropsType> = ({ id, className }) => {
	return (
		<svg className={className}>
			<use xlinkHref={`${sprite}#${id}`} />
		</svg>
	);
};