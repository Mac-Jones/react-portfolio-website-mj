import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaDribbble } from 'react-icons/fa';

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a
				href='https://www.linkedin.com/in/mac-jones-soriano-273056164/'
				target='_blank'
			>
				<BsLinkedin />
			</a>
			<a href='https://github.com/Mac-Jones' target='_blank'>
				<FaGithub />
			</a>
			<a href='https://facebook.com' target='_blank'>
				<BsFacebook />
			</a>
			<a href='https://instagram.com' target='_blank'>
				<BsInstagram />
			</a>
			<a href='https://dribbble.com' target='_blank'>
				<FaDribbble />
			</a>
		</div>
	);
};

export default HeaderSocials;
