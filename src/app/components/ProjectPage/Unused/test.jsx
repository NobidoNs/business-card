'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export function TanksImage() {
	const [style, setStyle] = useState({ transform: '' })

	const handleMouseMove = e => {
		const rect = e.target.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top
		const rotateX = (y - rect.height / 2) / 10
		const rotateY = -(x - rect.width / 2) / 13
		setStyle({
			transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
		})
	}

	const handleMouseLeave = e => {
		setStyle({
			transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
		})
	}

	return (
		<Image
			className='object-fill hover:drop-shadow-[0_0_0.5rem_#60a5fa] rounded-3xl'
			src='/Tanks/icon.png'
			alt='Next.js Logo'
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ ...style, transition: 'transform 0.1s' }}
			width={600}
			height={80}
			priority
		/>
	)
}
