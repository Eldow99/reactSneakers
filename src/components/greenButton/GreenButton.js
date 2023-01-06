import React from 'react'
import './GreenButton.css'
function GreenButton(props) {
	return (
		<button className='greenButton'>
			{props.name}
			{props.children}
		</button>
	)
}

export default GreenButton
