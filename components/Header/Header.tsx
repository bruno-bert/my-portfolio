import { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import styles from './Header.module.scss'

interface Props {

}

export const Header = (props: Props) => {
    const [lastScroll, setLastScroll] = useState(0);
    const [headerStyle, setHeaderStyle] = useState<string>('scroll-down');


    const handleScroll = () => {
        let currentScroll = window.pageYOffset

        setLastScroll((prevValue) => {

            if (currentScroll <= 0) {
                setHeaderStyle(styles.scrollDown)
            }

            if (currentScroll > prevValue) {
                setHeaderStyle(styles.scrollDown)
            }

            if (currentScroll < prevValue) {
                setHeaderStyle(styles.scrollUp)
            }

            return currentScroll
        })
    }





    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <header className={`${styles.header} ${headerStyle}`}>
            <nav className={styles.nav}>
                <Logo />
                <Menu />
            </nav>
        </header>
    )
}
