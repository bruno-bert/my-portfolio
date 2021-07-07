import { useState } from 'react'
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
    const [fallbackSrc, setFallbackSrc] = useState<string>('')

    return (

        <div className={`${styles.project} ${reverse}`}>


            <div id="image" className={styles.image}>
                {
                    data.image &&
                    <Image src={fallbackSrc !== '' ? fallbackSrc : data.image} width={500} height={350} onError={() => setFallbackSrc('/placeholder.png')} />
                }

                {!data.image &&
                    <Image src="/placeholder.png" width={500} height={350} />
                }
            </div>


            <div id="content" className={styles.content}>

                <p className={styles.featured}>Featured Project</p>
                <h3 className={styles.title}>{data.title}</h3>
                <div className={styles.description}>{data.description}</div>

                {
                    data.stack &&
                    <ul className={styles.stack}>
                        {data.stack.map((stack: string) => (<li>{stack}</li>))}
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
