import { useState } from 'react'
import styles from './Experience.module.scss'
import ExperienceContent from './ExperienceContent/ExperienceContent'

export type ExperienceData = {
    name: string,
    link?: string,
    title: string
    period: string
    tasks: string[]
}

interface Props {

}


const experiences: ExperienceData[] = [{
    name: 'Johnson&Johnson (1)',
    title: 'Solution Architect',
    period: 'October 2020 until now',
    tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat soluta repellendus, quas neque error ipsum harum delectus facilis accusantium?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellat odit recusandae. Ea quod quia excepturi provident ipsam esse praesentium!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero nostrum officiis tenetur consectetur temporibus, ipsam expedita? Tenetur, aliquid exercitationem.'
    ]
},
{
    name: 'Johnson&Johnson (2)',
    title: 'Technical Product Owner',
    period: 'December 2014 - September 2020',
    tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat soluta repellendus, quas neque error ipsum harum delectus facilis accusantium?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellat odit recusandae. Ea quod quia excepturi provident ipsam esse praesentium!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero nostrum officiis tenetur consectetur temporibus, ipsam expedita? Tenetur, aliquid exercitationem.'
    ]
},
{
    name: 'BigSist',
    title: 'Senior Developer',
    period: 'September 2007 - December 2014',
    tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat soluta repellendus, quas neque error ipsum harum delectus facilis accusantium?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellat odit recusandae. Ea quod quia excepturi provident ipsam esse praesentium!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero nostrum officiis tenetur consectetur temporibus, ipsam expedita? Tenetur, aliquid exercitationem.'
    ]
}, {
    name: 'SyncCell',
    title: 'Senior Developer',
    period: 'September 2007 - December 2014',
    tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat soluta repellendus, quas neque error ipsum harum delectus facilis accusantium?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellat odit recusandae. Ea quod quia excepturi provident ipsam esse praesentium!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero nostrum officiis tenetur consectetur temporibus, ipsam expedita? Tenetur, aliquid exercitationem.']
}, {
    name: 'Engenap',
    title: 'Developer',
    period: 'June 2002 - August 2007',
    tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat soluta repellendus, quas neque error ipsum harum delectus facilis accusantium?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellat odit recusandae. Ea quod quia excepturi provident ipsam esse praesentium!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero nostrum officiis tenetur consectetur temporibus, ipsam expedita? Tenetur, aliquid exercitationem.']
},
{
    name: 'FitSoft (Self-Employee)',
    title: 'Owner',
    period: 'September 2007 - December 2014',
    tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat soluta repellendus, quas neque error ipsum harum delectus facilis accusantium?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat soluta repellendus, quas neque error ipsum harum delectus facilis accusantium?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat soluta repellendus, quas neque error ipsum harum delectus facilis accusantium?']
}]

export const Experience = (props: Props) => {
    const [itemActive, setItemActive] = useState(0)

    return (

        <section id="experience" className={styles.experience}>

            <div className={styles.title}>
                <h3>
                    <span>02.</span>
                    Where I've Worked
                </h3>
            </div>

            <div className={styles.content}>

                <div id="left" className={styles.left}>
                    <ul>


                        {experiences && experiences.map((exp, index) => (
                            <li key={index} onClick={() => setItemActive(index)} className={(itemActive == index ? styles.active : "")}><a href={exp.link}>{exp.name}</a></li>
                        )
                        )}



                    </ul>
                </div >

                <div id="right" className={styles.right}>
                    {
                        experiences.filter((item, index) => index === itemActive).map(exp => (
                            <ExperienceContent key={itemActive} data={exp} />
                        ))
                    }

                </div>


            </div>


        </section>
    )
}

