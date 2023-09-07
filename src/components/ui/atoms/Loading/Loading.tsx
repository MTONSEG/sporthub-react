import React, { CSSProperties } from 'react';
import './Loading.scss';
import RingLoader from 'react-spinners/RingLoader';

const styles: CSSProperties = {
	position: 'relative',
	zIndex: '12'
}

const Loading = () => {
	return (
		<div className='loading'>
			<RingLoader
				color='#AD7955'
				size={60}
				cssOverride={styles}
			/>
		</div>
	)
}

export default Loading;