import styles from './LeftMenu.module.scss'
import { FiGithub, FiLinkedin, FiGitlab } from 'react-icons/fi'

interface Props {

}

export const LeftMenu = (props: Props) => {
    return (
        <div className={styles.leftMenu}>
            <ul>
                <li><a href="https://github.com/bruno-bert"><FiGithub /></a></li>
                <li><a href="https://linkedin.com/bdepaula"><FiLinkedin /></a></li>
                <li><a href="https://gitlab.com/bruno-bert"><FiGitlab /></a></li>

            </ul>
        </div>
    )
}

