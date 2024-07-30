export default function SpreadInfo() {
	return (
		<div className='px-5 rounded-l table-cell'>
			<div className='justify-top items-top pt-4 select-auto'>
				<p className='flex w-full'>
					Spread - игра на клеточном поле. Оно делится на квадраты 3х3, при
					заполнении такого квадрата, он вновь становится пустым, но захватывает
					соседние. Цель игры захвотить все поля соперника.
				</p>
			</div>
		</div>
	)
}
