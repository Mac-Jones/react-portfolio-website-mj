import React from 'react';
import './portfolio.styles.scss';
import { portfolioData } from './portfolio-data';

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				{portfolioData.map((item) => {
					const { id, image, title, description, github, demo } = item;
					return (
						<article key={id} className='portfolio__item'>
							<div className='portfolio__item-image'>
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<h4>{description}</h4>
							<div className='portfolio__item-cta'>
								<a href={github} className='btn' target='_blank'>
									Github
								</a>
								<a href={demo} className='btn btn-primary' target='_blank'>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
