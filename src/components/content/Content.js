import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import styles from './Content.module.css'

function Content({ getCartItems }) {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [favorites, setFavorites] = useState([])

	useEffect(() => {
		// fetch('https://6398565dfe03352a94cd1afc.mockapi.io/items') //'fetch request'
		// 	.then((res) => {
		// 		return res.json()
		// 	})
		// 	.then((json) => setItems(json))

		//axios

		axios
			.get('https://6398565dfe03352a94cd1afc.mockapi.io/items')
			.then((res) => setItems(res.data))
	}, [])
	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value)
	}
	const onAddToCart = (obj) => {
		axios.post('https://6398565dfe03352a94cd1afc.mockapi.io/cart', obj)
		setCartItems((prev) => [...prev, obj])
		// getCartItems([...cartItems, obj])
	}
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

	return (
		<div className={styles.content}>
			<div className={styles.contentHeader}>
				<h1>
					{searchValue
						? `Поиск по запросу: "${searchValue}"`
						: 'Все кроссовки'}
				</h1>
				<div className={styles.searchBlock}>
					<img src='/img/search.svg' alt='search' />
					{searchValue && (
						<img
							onClick={() => setSearchValue('')}
							className={styles.clear}
							src='/img/x.svg'
						/>
					)}
					<input
						value={searchValue}
						onChange={onChangeSearchInput}
						placeholder='ПОИСК...'
					/>
				</div>
			</div>

			<div className={styles.cards}>
				{items
					.filter((el) =>
						el.title
							.toLowerCase()
							.includes(searchValue.toLowerCase()),
					)
					.map((el, index) => {
						return (
							<Card
								onFavorite={onAddToFavorite}
								key={index}
								onPlus={onAddToCart}
								{...el}
							/>
						)
					})}
			</div>
		</div>
	)
}

export default Content
