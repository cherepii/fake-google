import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './Pagination.module.scss'

const Pagination: FC = () => {
	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

	return (
		<div className={styles.wrapper}>
			<img
				src="https://zaim-24.kz/google/img/foot_google-min.png"
				width={300}
				height={40}
			/>

			<div className={styles.numbers}>
				<div>
					{numbers.map((num) => (
						<Link href="/" key={num}>
							<a className={styles.link}>{num}</a>
						</Link>
					))}
					<Link href="/">
						<a className={styles.next}>Следующая</a>
					</Link>
				</div>
			</div>
		</div>
	)
}
export default Pagination
