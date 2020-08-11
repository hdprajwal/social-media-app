import React, { Component } from 'react'
import './assets/main.css'

const App = ()=>{ 
		return (
			<div className="h-screen w-screen bg-gray-900 text-white">
				<div className="px-4 py-3 flex justify-evenly">
					<img className="h-10 w-10" src={require('./assets/logo.svg')}  alt="Logo"/>
					<button className="appearance-none bg-gray-800 rounded-lg px-2 py-1 h-10" onClick={console.log("Clicked")}>
						<div className="h-8 flex justify-center items-center">
						<div className="inline-block bg-white rounded-full w-8 h-8"></div>
							<span className="px-2 text-lg">
								User Name
							</span>
						</div>
					</button>
					<input className="h-10 w-2/5 rounded-md bg-gray-800 text-center" placeholder="Search" />
					<div className="w-1/12 flex justify-around">
					<button className="inline-block bg-white rounded-full w-8 h-8"></button>
					<button className="inline-block bg-white rounded-full w-8 h-8"></button>
					<button className="inline-block bg-white rounded-full w-8 h-8"></button>
					<button className="inline-block bg-white rounded-full w-8 h-8"></button>
					</div>
				</div>
			</div>
		)
	}

export default App