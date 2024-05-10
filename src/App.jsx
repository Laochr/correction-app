import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Content from './Content'
import SidebarPage from './Layout/SideBar'
import './fonts.css'
import SidebarPageGrade from './component/Grade/SidebarGrade'
const App = () => {
	return (
		// for deploy
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/correction-app' element={<Content />} />
					<Route path='/correction-app/correction' element={<SidebarPage />} />
					<Route path='/correction-app/grade' element={<SidebarPageGrade />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
