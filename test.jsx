'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export function Button3D() {
	const [style, setStyle] = useState({ transform: '' })

	const handleMouseMove = e => {
		const rect = e.target.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top
		const rotateX = y - rect.height / 2
		const rotateY = -(x - rect.width / 2)
		setStyle({
			transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
		})
	}

	return (
		// <button
		// 	className='mb-3 text-2xl text-center font-semibold bg-gradient-to-r from-violet-400 to-fuchsia-500'
		// 	onMouseMove={handleMouseMove}
		// 	style={{ ...style, transition: 'transform 0.1s' }}
		// >
		// 	Click Me
		// </button>
		<Image
			className='object-fill hover:drop-shadow-[0_0_0.5rem_#60a5fa]'
			src='/github-2.png'
			alt='Next.js Logo'
			onMouseMove={handleMouseMove}
			style={{ ...style, transition: 'transform 0.1s' }}
			width={128}
			height={128}
			priority
		/>
	)
}

// export default Button3D
