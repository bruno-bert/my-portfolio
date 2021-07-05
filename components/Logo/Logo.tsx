import styles from './Logo.module.scss'
import Link from 'next/link'
interface Props {

}

const Logo = (props: Props) => {
    return (
        <div className={styles.logoWrapper}>
            <Link href="#hero">
                B
            </Link>

        </div>

    )
}

export default Logo