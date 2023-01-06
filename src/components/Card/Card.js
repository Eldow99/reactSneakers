import React, { useState } from 'react'
import styles from './Card.module.css'

function Card(props) {
	const [isAdded, setIsAdded] = useState(false)
	const [isFavorite, setIsFavorite] = useState(props.favorited)

	const onClickPlus = (event) => {
		props.onPlus({ title: props.title, price: props.price, img: props.img })
		setIsAdded((prev) => !prev)
	}
	const onClickFavorite = () => {
		setIsFavorite(!isFavorite)
		// console.log(id);
		props.onFavorite({
			id: props.id,
			title: props.title,
			price: props.price,
			img: props.img,
		})
	}

	return (
		<div className={styles.card}>
			<button onClick={onClickFavorite} className={styles.favorite}>
				<img src={isFavorite ? '/img/like.svg' : '/img/unlike.svg'} />
			</button>

			<img alt='sneakers' className={styles.sneakers} src={props.img} />
			<h5>{props.title}</h5>
			<div className={styles.cardBottom}>
				<div className={styles.cardBottom_price}>
					<span>Цена:</span>
					<b>{props.price} сом</b>
				</div>
				<img
					onClick={onClickPlus}
					className={styles.plus}
					alt='+'
					src={isAdded ? '/img/v.svg' : '/img/+.svg'}
				/>
			</div>
		</div>
	)
}

export default Card
