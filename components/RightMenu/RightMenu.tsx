import styles from './RightMenu.module.scss'

interface Props {

}

export const RightMenu = (props: Props) => {
    return (
        <div className={styles.rightMenu} >
            <div>
                <span><a href="mailto:bruno.bert.jj@gmail.com">bruno.bert.jj@gmail.com</a></span>
            </div>
        </div>
    )
}

