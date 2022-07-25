import Link from 'next/link'
import { FC } from 'react'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<div className={styles.logo}>
			<Link href="/">
				<a>
					<img src="https://zaim-24.kz/google/img/googlelogo.png" alt="logo" />
				</a>
			</Link>
		</div>
	)
}
export default Logo
