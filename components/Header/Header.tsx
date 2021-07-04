import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import styles from './Header.module.scss'

interface Props {

}

export const Header = (props: Props) => {
    return (
        <header>
            <nav className={styles.header}>
                <Logo />
                <Menu />
            </nav>


        </header>
    )
}
