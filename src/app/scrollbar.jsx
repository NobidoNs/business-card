import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { TanksImage } from '../app/components/ProjectPage/Images/Tanks'
import { MapImage } from '../app/components/ProjectPage/Images/Map'
import { SpreadImage } from '../app/components/ProjectPage/Images/Spread'

import 'swiper/css'

export default function ImageSwiper({ onChange }) {
	// const images = ['/header.png', '/header.png', '/header.png']

	return (
		<Swiper
			// modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={1.2}
			// navigation
			// pagination={{ clickable: true }}
			// scrollbar={{ draggable: true }}
		>
			<SwiperSlide>
				<TanksImage />
			</SwiperSlide>
			<SwiperSlide>
				<MapImage />
			</SwiperSlide>
			<SwiperSlide>
				<SpreadImage />
			</SwiperSlide>
		</Swiper>
	)
}
