import { instance } from '../../api/instance'
import { ILink } from '../../shared/link.interface'
import dynamic from 'next/dynamic'
import { FC, useEffect, useState } from 'react'

import styles from './AdminPanel.module.scss'

const DynamicLinkItem = dynamic(() => import('./LinkItem'), { ssr: false })

const AdminPanel: FC = () => {
	const [links, setLinks] = useState([])

	useEffect(() => {
		const res = instance.get<ILink[]>('/links')

		res.then((data) => setLinks(data.data))
	}, [])

	return (
		<div className={styles.wrapper}>
			<h1>Welcome to admin panel</h1>

			<ul className={styles.links}>
				{links.map((link) => {
					return <DynamicLinkItem link={link} key={link._id} />
				})}
			</ul>
		</div>
	)
}
export default AdminPanel
