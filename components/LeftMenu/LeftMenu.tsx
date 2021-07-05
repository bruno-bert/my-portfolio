import styles from './LeftMenu.module.scss'
import { FaGithub, FaLinkedin, FaGitlab } from 'react-icons/fa'

interface Props {

}

export const LeftMenu = (props: Props) => {
    return (
        <div className={styles.leftMenu}>
            <ul>
                <li><a href="https://github.com/bruno-bert"><FaGithub /></a></li>
                <li><a href="https://linkedin.com/bdepaula"><FaLinkedin /></a></li>
                <li><a href="https://gitlab.com/bruno-bert"><FaGitlab /></a></li>

            </ul>
        </div>
    )
}

