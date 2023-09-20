import React from 'react';
import './CategorySlide.scss';
import Picture from '../../../../ui/atoms/Picture/Picture';
import { Link } from 'react-router-dom';


export type SlidePropsType = {
	img: string,
	webp?: string,
	category: string,
	title: string,
	more?: string,
	color?: string,
	path?:string
}

const CategorySlide: React.FC<SlidePropsType> = ({
	img, webp, category, title, more = 'More', color, path
}) => {

	return (
		<Link to={path} className='category-slide swiper-slide'>
			<div className="category-slide__body">
				<p className="category-slide__category" style={{ color }}>
					{category}
				</p>
				<h2 className="category-slide__title">{title}</h2>
				<p className="category-slide__more">{more}</p>
			</div>
			<div className="category-slide__image-inner">
				<Picture
					className='category-slide__image'
					img={img}
					webp={webp}
					alt={title}
				/>
			</div>
		</Link>
	);
}


export default CategorySlide;