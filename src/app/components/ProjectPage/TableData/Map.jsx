export default function MapInfo() {
	return (
		<div
			className='relative -top-[296px] border-2 rounded-lg pl-2 h-full bg-blue opacity-0 z-10'
			style={{
				backgroundImage: 'linear-gradient(0deg, #e97084,#d2b1a1)',
			}}
			id='MapInfo'
		>
			Проект на базе яндекс карт, который определяет местоположение
			пользователя, позволяет выделять территорию и прокладывать маршрут в
			случайное место. Задумывалось использовать, чтобы прогулки стали
			инререснее.
		</div>
	)
}
