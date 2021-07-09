import styles from './HamburguerMenu.module.scss'

interface Props {


}

const HamburguerMenu = (props: Props) => {
    return (
        <div className={styles.hamburguer}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default HamburguerMenu
