import styles from './Button.module.scss'
interface Props {

    children: JSX.Element | string
}

const Button = ({ children }: Props) => {
    return (
        <a className={styles.button}>
            {children}

        </a>
    )
}

export default Button
