import axios from 'axios'
import React from 'react'
import Card from '../Card/Card'
import styles from './Favorite.module.css'
import { useEffect, useState } from 'react'
function Favorite() {
	const [favorites, setFavorites] = useState([])
	const [favorited, setFavorited] = useState(true)
	const [cartItems, setCartItems] = useState([])
	useEffect(() => {
		axios
			.get('https://6398565dfe03352a94cd1afc.mockapi.io/favorites')
			.then((res) => setFavorites(res.data))
	}, [])

	const onAddToFavorite = async (obj) => {
		if (favorites.find((favObj) => favObj.id === obj.id)) {
			axios.delete(
				`https://6398565dfe03352a94cd1afc.mockapi.io/favorites/${obj.id}`,
			)
			setFavorites((prev) => prev.filter((item) => item.id !== obj.id))
		} else {
			const { data } = await axios.post(
				'https://6398565dfe03352a94cd1afc.mockapi.io/favorites',
				obj,
			)

			setFavorites((prev) => [...prev, data])
		}
	}
	const onAddToCart = (obj) => {
		axios.post('https://6398565dfe03352a94cd1afc.mockapi.io/cart', obj)
		setCartItems((prev) => [...prev, obj])
		// getCartItems([...cartItems, obj])
	}

	return (
		<div>
			<h2>Мои закладки</h2>
			<div className={styles.cards}>
				{favorites.length > 0
					? favorites.map((el, index) => (
							<Card
								key={index}
								// id={el.id}
								// {...el}
								// title={el.title}
								// price={el.price}
								// img={el.img}
								onPlus={onAddToCart}
								onFavorite={onAddToFavorite}
								favorited={favorited}
								{...el}
							/>
					  ))
					: 'Закладок НЕТ('}
				{}
			</div>
		</div>
	)
}

export default Favorite
