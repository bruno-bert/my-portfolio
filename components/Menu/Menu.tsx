import Button from '../Button/Button'
import HamburguerMenu from '../Header/HamburguerMenu/HamburguerMenu'

import styles from './Menu.module.scss'
interface Props {

}

const Menu = (props: Props) => {
    return (
        <>


            <ul className={styles.menu}>
                <li>
                    <span>01.</span>
                    <span>About</span>
                </li>
                <li>
                    <span>02.</span>
                    <span>Experience</span>
                </li>
                <li>
                    <span>03.</span>
                    <span>Work</span>
                </li>
                <li>
                    <span>04.</span>
                    <span>Contact</span>
                </li>
                <li>
                    <span>05.</span>
                    <span>Blog</span>
                </li>
                <li>
                    <Button>Resume</Button>
                </li>
            </ul>


            <HamburguerMenu />
        </>
    )
}

export default Menu
