import styles from './Button.module.scss'
interface Props {
    large?: Boolean,
    children: JSX.Element | string
}

const Button = ({ children, large }: Props) => {
    let modifier = ''

    modifier = large ? styles.large : modifier

    return (
        <a className={`${styles.button} + ${modifier}`}>
            {children}
        </a>
    )
}

export default Button
