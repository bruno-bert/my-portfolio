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

            {(data.url || data.git) &&
                <ul className={styles.links}>
                    {data.url && <li><a target="_blank" href={data.url}><FaExternalLinkAlt /></a></li>}
                    {data.git && <li><a target="_blank" href={data.git} ><FaGithub /></a></li>}
                </ul>
            }


            <h3>{data.title}</h3>
            <p>{data.description}</p>

            {
                data.stack &&
                <ul>
                    {data.stack.map((stack: string) => {
                        <li>{stack}</li>
                    })}
                </ul>
            }




        </div>

    )
}

export default OtherProject
