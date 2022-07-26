import { queriesData } from './queries.data'
import Link from 'next/link'
import { FC } from 'react'

import styles from './SimilarQuery.module.scss'

const SimilarQuery: FC = () => {
	return (
		<div className={styles.wrapper}>
			<h3>Похожие запросы</h3>

			<ul>
				{queriesData.map((link) => {
					return (
						<li key={link.text}>
							<Link href={`/?title=${link.text}`}>
								<a>{link.text}</a>
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default SimilarQuery
