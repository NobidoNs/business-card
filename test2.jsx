import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const ImageSwiper = ({ images }) => {
	const params = {
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	}

	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={3}
			onSlideChange={() => console.log('slide change')}
			onSwiper={swiper => console.log(swiper)}
		>
			<SwiperSlide>Slide 1</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
		</Swiper>
		// <Swiper {...params}>
		// 	{images.map((image, index) => (
		// 		<div key={index}>
		// 			<img src={image} alt={`Slide ${index}`} />
		// 		</div>
		// 	))}
		// </Swiper>
	)
}

export default ImageSwiper
