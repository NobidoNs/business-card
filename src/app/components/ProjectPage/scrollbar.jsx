import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { TanksImage } from './Images/Tanks'
import { MapImage } from './Images/Map'
import { SpreadImage } from './Images/Spread'

import 'swiper/css'

export default function ImageSwiper({ TChange, MChange, SChange }) {
	return (
		<Swiper
			spaceBetween={20}
			slidesPerView={1.2}
			centeredSlides={true}
			loop={true}
		>
			<SwiperSlide>
				<TanksImage onChange={TChange} />
			</SwiperSlide>
			<SwiperSlide>
				<MapImage onChange={MChange} />
			</SwiperSlide>
			<SwiperSlide>
				<SpreadImage onChange={SChange} />
			</SwiperSlide>
		</Swiper>
	)
}
