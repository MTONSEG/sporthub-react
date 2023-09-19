import React from 'react';
import './Title.scss';

interface Title {
	text: string,
	className?: string
}

export const Title: React.FC<Title> = ({ text, className }) => {
	const nameClass = className ? className : '';

	return (
		<h1 className={`title ${nameClass}`}>{text}</h1>
	)
}