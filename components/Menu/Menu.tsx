import { useState } from 'react'
import Button from '../Button/Button'
import HamburguerMenu from '../HamburguerMenu/HamburguerMenu'
import Link from 'next/link'
import styles from './Menu.module.scss'
interface Props {

}

const Menu = (props: Props) => {

    const [menuState, setMenuState] = useState('hide')
    const opened = menuState === 'show' ? styles.opened : ''

    return (
        <>


            <ul className={`${styles.menu} ${opened}`} >
                <li>
                    <span>01.</span>
                    <span><Link href="#aboutme">About Me</Link></span>

                </li>
                <li>
                    <span>02.</span>
                    <span><Link href="#experience">Experience</Link></span>

                </li>
                <li>
                    <span>03.</span>
                    <span><Link href="#work">Work</Link></span>
                </li>
                <li>
                    <span>04.</span>
                    <span><Link href="#contact">Contact</Link></span>
                </li>
                <li>
                    <span>05.</span>
                    <span><Link href="/blog">Blog</Link></span>
                </li>
                <li>
                    <Button>Resume</Button>
                </li>
            </ul>


            <HamburguerMenu menuState={menuState} setMenuState={setMenuState} />

        </>
    )
}

export default Menu
