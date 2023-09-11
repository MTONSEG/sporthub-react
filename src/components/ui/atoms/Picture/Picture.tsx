import React, { DetailedHTMLProps } from 'react';
import PropTypes from 'prop-types';

type picturePropsType = {
	className?: string,
	img: string,
	webp?: string,
	alt?: string,
	imgMob?: string,
	webpMob?: string,
	widthMob?: number,
	imgTab?: string,
	webpTab?: string,
	widthTab?: number,
	width?: string,
	height?: string,
	lazy?: 'lazy' | 'eager'

}

const Picture: React.FC<picturePropsType> = ({ className, img, webp, ...rest }) => {
	const imageExt = img.slice(-7).split('.')[1].trim();
	let type: string = 'image/' + imageExt;

	if (imageExt != 'png') {
		type = 'image/jpeg';
	}

	const alt = rest.alt ? rest.alt : 'image';
	console.log(img, webp);

	return (
		<picture>
			{rest.imgMob ? (
				<>
					<source
						srcSet={rest.webpMob}
						type='image/webp'
						media={`(max-width: ${rest.widthMob}px)`}
					/>
					<source srcSet={rest.imgMob} type={type} media={`(max-width: ${rest.widthMob}px)`} />
				</>
			) : (
				''
			)}
			{rest.imgTab ? (
				<>
					<source
						srcSet={rest.webpTab}
						type='image/webp'
						media={`(max-width: ${rest.widthTab}px)`}
					/>
					<source srcSet={rest.imgTab} type={type} media={`(max-width: ${rest.widthTab}px)`} />
				</>
			) : (
				''
			)}
			<source srcSet={webp} type='image/webp' />
			<img
				className={className ? className : ''}
				src={img}
				alt={alt}
				loading={rest.lazy ? 'lazy' : 'eager'}
				width={rest.width ? rest.width : ''}
				height={rest.height ? rest.height : ''}
			/>
		</picture>
	);
}
Picture.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	lazy: PropTypes.oneOf(['lazy', 'eager']),
	alt: PropTypes.string,
	webp: PropTypes.string,
	img: PropTypes.string,
	className: PropTypes.string,
};

export default Picture;