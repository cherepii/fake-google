import { ILink } from '../../shared/link.interface'
import dynamic from 'next/dynamic'
import { FC } from 'react'

import styles from './AdminPanel.module.scss'

interface IProps {
	links: ILink[]
}

const DynamicLinkItem = dynamic(() => import('./LinkItem'), { ssr: false })

const AdminPanel: FC<IProps> = ({ links }) => {
	return (
		<div className={styles.wrapper}>
			<h1>Welcome to admin panel</h1>

			<ul className={styles.links}>
				{links.map((link, idx) => {
					idx < 4 ? (link.isOffer = true) : (link.isOffer = false)
					return <DynamicLinkItem link={link} key={link._id} />
				})}
			</ul>
		</div>
	)
}
export default AdminPanel
