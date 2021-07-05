import { ProjectData } from "../Work/Work"
import styles from './Project.module.scss'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'
interface Props {
    data: ProjectData
}

const Project = (props: Props) => {
    const { data } = props
    const reverse = data.imagePosition == 'left' ? '' : styles.reverse

    return (

        <div className={`${styles.project} ${reverse}`}>


            <div id="image">
                {
                    data.image &&
                    <Image src={data.image} width={500} height={350} />
                }

                {!data.image &&
                    <Image src="/placeholder.png" width={500} height={350} />
                }
            </div>


            <div id="content">

                <p>Featured Project</p>
                <h3>{data.title}</h3>
                <p>{data.description}</p>

                {
                    data.stack &&
                    <ul >
                        {data.stack.map((stack: string) => {
                            <li>{stack}</li>
                        })}
                    </ul>
                }


                {(data.url || data.git) &&
                    <ul className={styles.links}>
                        {data.url && <li><a target="_blank" href={data.url}><FaExternalLinkAlt /></a></li>}
                        {data.git && <li><a target="_blank" href={data.git} ><FaGithub /></a></li>}
                    </ul>
                }

            </div>

        </div>


    )
}

export default Project
