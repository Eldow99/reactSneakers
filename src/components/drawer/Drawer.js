import axios from 'axios'
import React, { useState, useEffect } from 'react'
import GreenButton from '../greenButton/GreenButton'

import styles from './Drawer.module.css'
function Drawer({ onCloseCart }) {
	let count = 0
	const [cartItems, setCartItems] = useState([])
	useEffect(() => {
		axios
			.get('https://6398565dfe03352a94cd1afc.mockapi.io/cart')
			.then((res) => setCartItems(res.data))
	}, [])
	const onRemoveItem = (id) => {
		axios.delete(`https://6398565dfe03352a94cd1afc.mockapi.io/cart/${id}`)
		setCartItems((prev) => prev.filter((item) => item.id !== id))
	}

	return (
		<div className={styles.overlay}>
			<div className={styles.drawer}>
				<h2>
					Корзина
					<button onClick={onCloseCart}>
						<img src='/img/x.svg' />
					</button>
				</h2>

				<div className={styles.cartItems}>
					{cartItems.length > 0 ? (
						cartItems.map((el) => (
							<div className={styles.cartItem}>
								<img className={styles.cartIcon} src={el.img} />

								<div>
									<p>{el.title}</p>

									<b>{el.price} сом.</b>
								</div>
								<button onClick={() => onRemoveItem(el.id)}>
									<img src='/img/x.svg' />
								</button>
							</div>
						))
					) : (
						<div>Корзина Пуста(</div>
					)}
				</div>
				<ul className={styles.cartTotalBlock}>
					<li>
						<span>Итого:</span>
						<div></div>
						<b>{0} руб.</b>
					</li>
					<li>
						<span>Налог 5%:</span>
						<div></div>
						<b>21 498руб.</b>
					</li>
				</ul>
				<GreenButton name='Оформить заказ'>
					<img src='/img/arrow.svg' />
				</GreenButton>
			</div>
		</div>
	)
}

export default Drawer
