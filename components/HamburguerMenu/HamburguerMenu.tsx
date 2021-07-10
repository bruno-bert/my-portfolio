import { Dispatch, SetStateAction, useState } from 'react'
import styles from './HamburguerMenu.module.scss'

interface Props {
    menuState: string
    setMenuState: Dispatch<SetStateAction<string>>
}

const HamburguerMenu = (props: Props) => {

    const { menuState, setMenuState } = props
    const opened = menuState === 'show' ? styles.opened : ''

    return (
        <div onClick={
            () => setMenuState((previousValue: string) => previousValue === 'show' ? 'hide' : 'show')}
            className={`${styles.hamburguer} ${opened}`}>
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
        </div>
    )
}

export default HamburguerMenu
