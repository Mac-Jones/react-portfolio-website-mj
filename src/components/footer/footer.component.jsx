import React from 'react';
import './footer.styles.scss';
import { ImFacebook } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer>
			<a href='#' className='footer__logo'>
				MacJones
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				<li>
					<a href='#services'>Services</a>
				</li>
				<li>
					<a href='#portfolio'>portfolio</a>
				</li>
				<li>
					<a href='#testimonial'>Testimonials</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a href='https://facebook.com' target='_blank'>
					<ImFacebook />
				</a>
				<a href='https://instagram.com' target='_blank'>
					<FiInstagram />
				</a>
				<a href='https://twitter.com' target='_blank'>
					<BsTwitter />
				</a>
			</div>

			<div className='footer__copyright'>
				&copy; Mac Jones. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
