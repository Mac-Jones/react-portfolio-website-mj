import React, { useState } from 'react';
import './contact.styles.scss';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import { useForm } from '@formspree/react';

const Contact = () => {
	const defaultInputTypes = {
		name: '',
		email: '',
		message: '',
	};

	const [state, handleSubmit] = useForm('mwkjnkal');
	//
	const [defaulInput, setDefaultInput] = useState(defaultInputTypes);
	// console.log(defaulInput);
	const { name, email, message } = defaulInput;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setDefaultInput({ ...defaulInput, [name]: value });
	};

	if (state.succeeded) {
		return (
			<section id='contact'>
				<h5>Get In Touch</h5>
				<h2>Contact Me</h2>
				<div className='container contact__container'>
					<div className='contact__options'>
						<article className='contact__option'>
							<MdOutlineMailOutline className='contact__option-icon' />
							<h4>Email</h4>
							<h5>sorianomacjones@gmail.com</h5>
							<a href='mailto:sorianomacjones@gmail.com' target='_blank'>
								Send a message
							</a>
						</article>

						<article className='contact__option'>
							<RiMessengerLine className='contact__option-icon' />
							<h4>Messenger</h4>
							<h5>Mac Jones Soriano</h5>
							<a href='https://m.me/mjonessoriano' target='_blank'>
								Send a message
							</a>
						</article>

						<article className='contact__option'>
							<BsWhatsapp className='contact__option-icon' />
							<h4>WhatsApp</h4>
							<h5>09157904885</h5>
							<a
								href='https://api.whatsapp.com/send?phone=09157904885'
								target='_blank'
							>
								Send a message
							</a>
						</article>
					</div>

					<form onSubmit={handleSubmit}>
						<input
							type='text'
							name='name'
							placeholder='Your Full Name'
							value=''
							// value={name}
							onChange={handleChange}
							required
						/>
						<input
							type='email'
							name='email'
							placeholder='Your Email'
							value=''
							// value={email}
							onChange={handleChange}
							required
						/>
						<textarea
							name='message'
							rows='10'
							placeholder='Your Message'
							value=''
							// value={message}
							onChange={handleChange}
							required
						></textarea>
						<button
							type='submit'
							className='btn btn-primary'
							disabled
							// disabled={state.submitting}
						>
							Send Message
						</button>
					</form>
				</div>
			</section>
		);
	}
	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineMailOutline className='contact__option-icon' />
						<h4>Email</h4>
						<h5>sorianomacjones@gmail.com</h5>
						<a href='mailto:sorianomacjones@gmail.com' target='_blank'>
							Send a message
						</a>
					</article>

					<article className='contact__option'>
						<RiMessengerLine />
						<h4>Messenger</h4>
						<h5>Mac Jones Soriano</h5>
						<a href='https://m.me/mjonessoriano' target='_blank'>
							Send a message
						</a>
					</article>

					<article className='contact__option'>
						<BsWhatsapp />
						<h4>WhatsApp</h4>
						<h5>09157904885</h5>
						<a
							href='https://api.whatsapp.com/send?phone=09157904885'
							target='_blank'
						>
							Send a message
						</a>
					</article>
				</div>
				{/* END OF CONTACT OPTION */}

				<form
					// action='https://formspree.io/f/mwkjnkal'
					// method='POST'
					onSubmit={handleSubmit}
				>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						value={name}
						onChange={handleChange}
						required
					/>
					<input
						type='email'
						name='email'
						placeholder='Your Email'
						value={email}
						onChange={handleChange}
						required
					/>
					<textarea
						name='message'
						rows='10'
						placeholder='Your Message'
						onChange={handleChange}
						required
					></textarea>
					<button
						type='submit'
						className='btn btn-primary'
						disabled={state.submitting}
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
