import { ProjectData } from "../Work/Work"
import styles from './OtherProject.module.scss'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
interface Props {
    data: ProjectData
}

const OtherProject = (props: Props) => {
    const { data } = props
    return (

        <div className={styles.otherproject}>

            <a className={styles.wrapper} target="_blank" href={data.url}>

                {(data.url || data.git) &&
                    <ul className={styles.links}>
                        {data.url && <li><a target="_blank" href={data.url}><FaExternalLinkAlt /></a></li>}
                        {data.git && <li><a target="_blank" href={data.git} ><FaGithub /></a></li>}
                    </ul>
                }


                <h3 className={styles.title}>{data.title}</h3>
                <p className={styles.description}>{data.description}</p>

                {
                    data.stack &&
                    <ul className={styles.stack}>
                        {data.stack.map((stack: string, index: number) => (<li key={index}>{stack}</li>)
                        )}
                    </ul>
                }

            </a>


        </div>

    )
}

export default OtherProject
