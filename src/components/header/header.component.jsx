import React from 'react';
import './header.styles.scss';
import CTA from './CTA';
import ME from '../../assets/transparent.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
	return (
		<header>
			<div className='container header__container'>
				<h5>Hello I am</h5>
				<h1>Mac Jones Soriano</h1>
				<h5 className='text-light'>Front-End Developer</h5>
				<CTA />

				<HeaderSocials />

				<div className='me'>
					<img src={ME} alt='' width='50%' />
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
