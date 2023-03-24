import React from 'react';
import './about.styles.scss';
import ME from '../../assets/me.jpg';
import { FaAward } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id='about'>
			<h5>Get to know</h5>
			<h2>About me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='' />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						{/* <article className='about__card'>
							<FaAward className='about__card-icon' />
							<h5>Experience</h5>
							<small>2 years studying web development</small>
						</article> */}

						{/* <article className='about__card'>
							<HiUsers className='about__card-icon' />
							<h5>Clients</h5>
							<small>200+ Worldwide</small>
						</article>

						<article className='about__card'>
							<VscFolderLibrary className='about__card-icon' />
							<h5>Projects</h5>
							<small>80+ Completed</small>
						</article> */}
					</div>

					<p>
						I am Mac Jones Soriano, a Frontend Web Developer. I studied in
						Pangasinan State University with a course of Bachelor of Science in
						Mechanical Engineering. I finished my first year in school and
						eventually I dropout.
					</p>
					<p>
						I found that my skills is for programming especially in Web
						Development. In my two years of studying code, I think I'm ready to
						show this to the world. And now, I'm willing to serve others and to
						provide my valuable skills like building website applications,
						solving problems, finding best solution and more efficient code.
					</p>

					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
