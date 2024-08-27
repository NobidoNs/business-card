'use client'
import React, { useState } from 'react'

const HideShowComponent = () => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		setIsVisible(!isVisible)
	}

	return (
		<div>
			<button onClick={toggleVisibility}>
				{isVisible ? 'Hide' : 'Show'} Element
			</button>
			{isVisible && <div>This is a toggleable element.</div>}
		</div>
	)
}

export default HideShowComponent
