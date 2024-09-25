'use client'
import React from 'react'
import { TanksImage } from '../../components/ProjectPage/Images/Tanks'
import { MapImage } from '../../components/ProjectPage/Images/Map'
import { SpreadImage } from '../../components/ProjectPage/Images/Spread'
import TanksInfo from './TableData/Tanks'
import MapInfo from './TableData/Map'
import SpreadInfo from './TableData/Spread'
import TanksBG from './ImagesBG/Tanks'
import MapBG from './ImagesBG/Map'
import SpreadBG from './ImagesBG/Spread'

export default function TableProjects() {
	const [t_visible, setT_visible] = React.useState(false)
	const [m_visible, setM_visible] = React.useState(false)
	const [s_visible, setS_visible] = React.useState(false)

	const changeT_visible = () => {
		setT_visible(!t_visible)
		setM_visible(false)
		setS_visible(false)
	}

	const changeM_visible = () => {
		setT_visible(false)
		setM_visible(!m_visible)
		setS_visible(false)
	}

	const changeS_visible = () => {
		setT_visible(false)
		setM_visible(false)
		setS_visible(!s_visible)
	}

	return (
		<>
			<div className='flex flex-row w-full z-10 leading-6'>
				<div className='basis-1/3 select-none p-5 rounded-l relative'>
					<TanksImage onChange={changeT_visible} />
					<TanksBG vis={t_visible} />
				</div>
				<div className='basis-1/3 select-none p-5 rounded-l relative'>
					<MapImage onChange={() => changeM_visible(!m_visible)} />
					<MapBG vis={m_visible} />
				</div>
				<div className='basis-1/3 select-none p-5 rounded-l relative'>
					<SpreadImage onChange={() => changeS_visible(!s_visible)} />
					<SpreadBG vis={s_visible} />
				</div>
			</div>

			<div className='px-2 min-h-max relative pb-5'>
				<TanksInfo vis={t_visible} />
				<MapInfo vis={m_visible} />
				<SpreadInfo vis={s_visible} />
			</div>

			<div className='w-full static z-10 md:hidden'>
				<div className='select-none p-5 rounded-l'>
					<TanksImage onChange={changeT_visible} />
					<TanksBG vis={t_visible} />
					<TanksInfo vis={t_visible} />
				</div>
				<div className='select-none p-5 rounded-l'>
					<MapImage onChange={() => changeM_visible(!m_visible)} />
					<MapBG vis={m_visible} />
					<MapInfo vis={m_visible} />
				</div>
				<div className='select-none p-5 py-5 rounded-l'>
					<SpreadImage onChange={() => changeS_visible(!s_visible)} />
					<SpreadBG vis={s_visible} />
					<SpreadInfo vis={s_visible} />
				</div>
			</div>
			<div
				className="select-none z-[0] absolute md:hidden
					h-64 w-full bg-black
				blur-2xl content-[''] opacity-100
				"
			/>
			{(t_visible || s_visible || m_visible) && (
				<div
					className="select-none z-[-1] absolute md:hidden
					h-full w-full bg-gradient-to-b
				blur-2xl content-[''] from-LB to-violet-500 opacity-50
				right-0 -bottom-[2500px]"
				/>
			)}
			{(t_visible || s_visible || m_visible) && (
				<div
					className="select-none z-[-1] absolute md:hidden
					h-full w-full bg-gradient-to-b
				blur-2xl content-[''] from-LB to-violet-500 opacity-50
				right-0 -bottom-[2000px]"
				/>
			)}
			{(t_visible || s_visible || m_visible) && (
				<div
					className="select-none z-[-1] absolute md:hidden
					h-1/2 w-full bg-gradient-to-b
				blur-2xl content-[''] from-LB to-violet-500 opacity-30
				right-0 -bottom-[1700px]"
				/>
			)}
		</>
	)
}
