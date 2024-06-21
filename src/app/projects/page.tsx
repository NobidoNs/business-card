'use client'

import Image from 'next/image'
import ImageSwiper from '../components/ProjectPage/Swiper'
import TableProjects from '../components/ProjectPage/Table'
import Navigation from '../components/ProjectPage/navigation'

export default function Page() {
	return (
		<main style={{ overflowY: 'hidden' }}>
			<div style={{ overflowY: 'hidden' }}>
				<Navigation />
				<TableProjects />
				{/* <ImageSwiper /> */}
			</div>
		</main>
	)
}
