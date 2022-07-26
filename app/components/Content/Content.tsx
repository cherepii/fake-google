import { ILink } from '../../shared/link.interface'
import Pagination from '../Paginaion/Pagination'
import SimilarQuery from '../SimilarQuery/SimilarQuery'
import dynamic from 'next/dynamic'
import { FC } from 'react'

import styles from './Content.module.scss'

interface IProps {
	links: ILink[]
}

const DynamicLinkItem = dynamic(() => import('./LinkItem'), { ssr: false })

const Content: FC<IProps> = ({ links }) => {
	const shuffle = (array: Array<ILink>) => {
		console.log(array)
		return array.sort(() => Math.random() - 0.5)
	}

	return (
		<div className={styles.container}>
			<span>Результатов: примерно 1 127 000 (0,51 сек.)</span>

			<ul className={styles.links}>
				{shuffle(links).map((link, idx) => {
					idx < 4 ? (link.isOffer = true) : (link.isOffer = false)
					return <DynamicLinkItem link={link} key={link._id} />
				})}
			</ul>
			<SimilarQuery />
			<Pagination />
		</div>
	)
}
export default Content
