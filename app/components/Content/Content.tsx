import { ILink } from '../../shared/link.interface'
import LinkItem from './LinkItem'
import { FC } from 'react'

import styles from './Content.module.scss'

interface IProps {
	links: ILink[]
}

const Content: FC<IProps> = ({ links }) => {
	return (
		<div className={styles.container}>
			<span>Результатов: примерно 1 127 000 (0,51 сек.)</span>

			<ul className={styles.links}>
				{links.map((link) => (
					<LinkItem link={link} key={link._id} />
				))}
			</ul>
		</div>
	)
}
export default Content
