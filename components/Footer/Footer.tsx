import styles from './Footer.module.scss'
interface Props {

}

export const Footer = (props: Props) => {
    return (
        <footer>
            <p><a target="_blank" href="https://github.com/bruno-bert">Built by Bruno Bertoni</a></p>
            <p>2021</p>
        </footer>
    )
}
