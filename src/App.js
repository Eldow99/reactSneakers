import Header from './components/header/Header'
import './App.css'
import Content from './components/content/Content'
import Drawer from './components/drawer/Drawer'
import { Routes, Route } from 'react-router-dom'
import Favorite from './components/favoirte/Favorite'
import { useState } from 'react'
function App() {
	const [showDrawer, setShowDrawer] = useState(false)

	return (
		<div className='App'>
			<div className='wrapper'>
				{showDrawer && (
					<Drawer
						onCloseCart={() => {
							setShowDrawer(false)
						}}
					/>
				)}
				<Header
					onClickCart={() => {
						setShowDrawer(true)
					}}
				/>
				<Routes>
					<Route path='/favorites' element={<Favorite />} />
				</Routes>
				<Routes>
					<Route path='/' element={<Content />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
