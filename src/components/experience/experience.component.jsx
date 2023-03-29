import React from 'react';
import './experience.styles.scss';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { SiJavascript } from 'react-icons/si';

const Experiece = () => {
	return (
		<section id='experience'>
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>

			<div className='container experience__container'>
				<div className='experience__frontend'>
					<h3>Frontend Development</h3>

					<div className='experience__content'>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>HTML</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>CSS</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Sass</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>JavaScript</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>React</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>React Native</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>TypeScript</h4>
								<small className='text-light'>Basic</small>
							</div>
						</article>
					</div>
				</div>

				{/* END OF FRONTEND */}

				<div className='experience__backend'>
					<h3>Backend Development</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Node JS</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>MongoDB</h4>
								<small className='text-light'>Basic</small>
							</div>
						</article>

						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Express JS</h4>
								<small className='text-light'>Basic</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Python</h4>
								<small className='text-light'>Basic</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experiece;
