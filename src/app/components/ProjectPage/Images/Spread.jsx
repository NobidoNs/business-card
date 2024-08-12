'use client'

import React, { useState } from 'react'
import Image from 'next/image'

function handleClick() {
	if (document.getElementById('SpreadDiv').style.opacity == 0.15) {
		document.getElementById('SpreadDiv').style.opacity = 0
		document.getElementById('SpreadInfo').style.opacity = 0
	} else {
		document.getElementById('SpreadDiv').style.opacity = 0.15
		document.getElementById('SpreadInfo').style.opacity = 0.15
	}
	if (document.getElementById('TanksDiv').style.opacity == 0.15) {
		document.getElementById('TanksDiv').style.opacity = 0
		document.getElementById('TanksInfo').style.opacity = 0
	}
	if (document.getElementById('MapDiv').style.opacity == 0.15) {
		document.getElementById('MapDiv').style.opacity = 0
		document.getElementById('MapInfo').style.opacity = 0
	}
}

export function SpreadImage() {
	const [style, setStyle] = useState({ transform: '' })
	const [style2, setStyle2] = useState({ transform: '' })

	const handleMouseMove = e => {
		const rect = e.target.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top
		const rotateX = (y - rect.height / 2) / 25
		const rotateY = -(x - rect.width / 2) / 25
		const w = rect.bottom - rect.top
		const opac = 0.001 * (w - y)
		setStyle({
			transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
		})
		setStyle2({
			transform: `rotate(${rotateY * 20}deg) translate(-50%, -50%)`,
			opacity: opac,
		})
	}

	const handleMouseLeave = e => {
		setStyle({
			transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
		})
		setStyle2({
			transform: `rotate(180deg)`,
			opacity: 0,
		})
	}

	return (
		<div className='w-full h-64 relative'>
			<div
				className='w-full h-64 absolute z-30 rounded-3xl'
				style={{
					...style,
					transition: 'transform 0.1s',
					overflow: 'hidden',
					pointerEvents: 'none',
				}}
			>
				<div
					className='absolute opacity-0'
					style={{
						...style2,
						top: '70%',
						left: '70%',
						pointerEvents: 'none',
						backgroundImage:
							'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)',
						width: '880px',
						height: '880px',
						transformOrigin: '0% 0%',
					}}
				/>
			</div>
			<Image
				className='object-fill hover:drop-shadow-[0_0_0.5rem_#60a5fa] rounded-3xl z-20 border-2 border-zinc-500 cursor-pointer'
				src='/Spread/1.png'
				alt='Spread'
				fill={true}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{ ...style, transition: 'transform 0.1s' }}
				onClick={() => handleClick()}
			/>
		</div>
	)
}
