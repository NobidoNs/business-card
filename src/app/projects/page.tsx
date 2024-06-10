'use client'

import Image from 'next/image'
import ImageSwiper from '../components/ProjectPage/Swiper'
import { FaHome } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import TableProjects from '../components/ProjectPage/Table'
export default function Page() {
	const LinkIcon = FaHome
	const b = ['/header.png', '/header.png']
	// let hovered = false
	return (
		<main className='min-h-9 flex-col justify-between bg-local select-none'>
			<nav className='text-center mx-20'>
				<div className='grid grid-flow-col grid-rows-1 text-center p-5'>
					{/* <div>01</div>
					<div>02</div>
					<div>03</div> */}
					<h1 className='logo size-min pl-6'>
						<a
							href='/'
							className='mx-auto '
							// onMouseEnter={e => {
							// 	e.target.style.backgroundColor = '#f0f0f0'
							// }}
							// onMouseLeave={e => {
							// 	e.target.style.backgroundColor = 'transparent'
							// }}
						>
							<div style={{ color: 'rgb(0, 255, 255)' }}>
								<LinkIcon size='2em' />
							</div>
						</a>
					</h1>
					<ul className='size-min'>
						<a href='/'>
							<div>
								<p className='text-lg text-center'>Projects</p>
							</div>
						</a>
					</ul>
				</div>
			</nav>
			<TableProjects></TableProjects>
			{/* <ImageSwiper /> */}
		</main>
	)
}
