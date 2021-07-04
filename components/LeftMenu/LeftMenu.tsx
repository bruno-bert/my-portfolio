import styles from './LeftMenu.module.scss'

interface Props {

}

export const LeftMenu = (props: Props) => {
    return (
        <div className={styles.leftMenu}>
            <ul>
                <i>github</i>
                <i>linkedin</i>
                <i>gitlab</i>
            </ul>
        </div>
    )
}

