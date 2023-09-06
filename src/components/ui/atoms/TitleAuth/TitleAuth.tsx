import React, { CSSProperties } from "react";
import './TitleAuth.scss';

type textAlign = 'center' | 'left' | 'right';

type titleProps = {
	title: string,
	mb?: string,
	align?: textAlign
}

const TitleAuth: React.FC<titleProps> = ({ title, mb = '15px', align = 'center' }) => {
	const styles: CSSProperties = {
		marginBottom: mb,
		textAlign: align
	}

	return (
		<h1 className="title-auth" style={styles}>{title}</h1>
	)
}

export default TitleAuth
