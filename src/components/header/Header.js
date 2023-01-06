import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header(props) {
	return (
		<header>
			<Link to='/'>
				<div className='headerLeft'>
					<img width='40px' height='40px' src='/img/sneaker.png' />

					<div className='headerInfo'>
						<h3>React Sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<ul className='headerRight'>
				<li onClick={props.onClickCart}>
					<img src='/img/cart.svg' />
					<span>1205 сом.</span>
				</li>
				<Link to='/favorites'>
					<li>
						<img src='/img/heart.svg' />
					</li>
				</Link>

				{/* <li>
					<img width='20px' height='20px' src='/img/user.svg' />
				</li> */}
			</ul>
		</header>
	)
}

export default Header
