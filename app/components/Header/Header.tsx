import Logo from '../Logo/Logo'
import SearchPanel from '../SearchPanel/SearchPanel'
import { links } from '../SearchPanel/searchPanel.data'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import styles from './Header.module.scss'

const Header: FC = () => {
	const { query } = useRouter()

	const [value, setValue] = useState(query.title ? query.title : 'турбомани')

	useEffect(() => {
		setValue(query.title)
	}, [query.title])

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<Logo />
				<SearchPanel
					value={value}
					handleChange={(e) => setValue(e.target.value)}
					handleClear={() => setValue('')}
				/>
				<div className={styles.account}>
					<svg focusable="false" viewBox="0 0 24 24">
						<path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
					</svg>
					<button>Войти</button>
				</div>
			</div>
			<ul className={styles.links}>
				{links.map((link) => {
					return (
						<li
							key={link.name}
							className={`${styles.link} ${link.isActive ? styles.active : ''}`}
						>
							<span dangerouslySetInnerHTML={{ __html: link.icon }} />
							<p>{link.name}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default Header
