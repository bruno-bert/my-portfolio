import { useState } from 'react'
import styles from './HamburguerMenu.module.scss'

interface Props {


}

const HamburguerMenu = (props: Props) => {

    const [show, setShow] = useState(false)
    const opened = show ? styles.opened : ''

    return (
        <div onClick={() => setShow((previousValue) => !previousValue)} className={`${styles.hamburguer} ${opened}`}>
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
        </div>
    )
}

export default HamburguerMenu
