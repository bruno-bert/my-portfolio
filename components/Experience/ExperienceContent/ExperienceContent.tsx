import { ExperienceData } from '../Experience'
import styles from './ExperienceContent.module.scss'

interface Props {
    data: ExperienceData
}



const ExperienceContent = (props: Props) => {
    const { data } = props
    const { title, period, tasks } = data
    return (

        <div className={styles.content}>

            <h2 className={styles.title}>
                {title}
            </h2>


            <p id="period" className={styles.period}>{period}</p>

            <ul id="tasks" className={styles.tasks}>
                {tasks.map(task => (
                    <li>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceContent
