import Link from 'next/link'

import styles from './button.module.scss'

export default function Button({ label, path }) {

	return (
		<Link href={path}>
			<a className={styles.btn}>
				{label}
			</a>
		</Link>
	)
}
