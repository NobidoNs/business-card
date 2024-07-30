import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'

export default function ImageSwiper() {
	const params = {
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	}

	const images = ['/header.png', '/header.png', '/header.png']

	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={3}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={swiper => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			<SwiperSlide>
				<Image
					className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
					src='/Tanks/Tanks.png'
					alt='Next.js Logo'
					width={300}
					height={40}
					priority
				/>
			</SwiperSlide>
			<SwiperSlide>Slide 22</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
		</Swiper>
	)
}
