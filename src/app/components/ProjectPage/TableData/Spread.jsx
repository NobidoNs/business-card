export default function SpreadInfo() {
	return (
		<div
			className='relative -top-[592px] border-2 rounded-tr-none rounded-lg pl-2 h-full bg-blue opacity-0 z-10 text-black'
			style={{
				backgroundImage:
					'linear-gradient(0deg, #025fa7,#1682d4,#00b0d0,#09d3f6,#42e3ff)',
			}}
			id='SpreadInfo'
		>
			Spread - игра на клеточном поле. Оно делится на квадраты 3х3, при
			заполнении такого квадрата, он вновь становится пустым, но захватывает
			соседние. Цель игры захвотить все поля соперника. z`
		</div>
	)
}
