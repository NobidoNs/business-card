'use client'

import React from 'react'
import Image from 'next/image'
import { TanksImage } from '../../components/ProjectPage/Images/Tanks'
import { MapImage } from '../../components/ProjectPage/Images/Map'
import { SpreadImage } from '../../components/ProjectPage/Images/Spread'

export default function TableProjects() {
	return (
		<div className='table size-full table-fixed'>
			<div className='table-row-group'>
				<div className='table-row'>
					<div className='select-none p-5 rounded-l table-cell'>
						<TanksImage />
					</div>
					<div className='select-none p-5 rounded-l table-cell'>
						<MapImage />
					</div>
					<div className='select-none p-5 rounded-l table-cell'>
						<SpreadImage />
					</div>
				</div>
				<div className='table-row'>
					<div className='px-5 rounded-l table-cell'>
						<div className='justify-top items-top pt-4 select-auto'>
							<p className='flex w-full'>
								Это - монгопользовательская игра. Суть игры - уклоняться от
								снарядов, накапливать энергию, улучшить танк и победить
								соперников в честной борьбе.
							</p>
						</div>
					</div>
					<div className='px-5 rounded-l table-cell'>
						<div className='justify-top items-top pt-4 select-auto'>
							<p className='flex w-full'>
								Проект на базе яндекс карт, который определяет местоположение
								пользователя, позволяет выделять территорию и прокладывать
								маршрут в случайное место. Задумывалось использовать, чтобы
								прогулки стали инререснее.
							</p>
						</div>
					</div>
					<div className='px-5 rounded-l table-cell'>
						<div className='justify-top items-top pt-4 select-auto'>
							<p className='flex w-full'>
								Spread - игра на клеточном поле. Оно делится на квадраты 3х3,
								при заполнении такого квадрата, он вновь становится пустым, но
								захватывает соседние. Цель игры захвотить все поля соперника.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
