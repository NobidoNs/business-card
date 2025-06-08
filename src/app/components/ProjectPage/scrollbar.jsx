import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { TanksImage } from './Images/Tanks'
import { MapImage } from './Images/Map'
import { ContentionImage } from './Images/Contention'

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
				<ContentionImage onChange={SChange} />
			</SwiperSlide>
			<SwiperSlide>
				<MapImage onChange={MChange} />
			</SwiperSlide>
		</Swiper>
	)
}
