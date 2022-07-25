import { ILink } from '../../shared/link.interface'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Content.module.scss'

interface IProps {
	link: ILink
}

const LinkItem: FC<IProps> = ({ link }) => {
	const { title, url, isOffer, domain, subTitle } = link

	return (
		<li className={styles.item}>
			<Link href={url}>
				<a className={styles.domain} target="_blank">
					{isOffer && (
						<span>
							<b>Реклама</b>
							<span className={styles.dot}></span>
						</span>
					)}

					{domain}
				</a>
			</Link>
			<Link href={url}>
				<a target="_blank" className={styles.body}>
					{title}
				</a>
			</Link>
			<p>{subTitle}</p>
		</li>
	)
}
export default LinkItem
