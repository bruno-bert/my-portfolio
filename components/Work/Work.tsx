import styles from './Work.module.scss'
import Project from '../Project/Project'
interface Props {

}

export type ProjectData = {
    title: string
    description: string
    image?: string
    stack: string[]
    url?: string
    git?: string,
    category: string,
    imagePosition?: string

}

const projects: ProjectData[] = [
    {
        title: 'Nota Amiga',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio.",
        image: "/project1.jpg",
        stack: ['Python', 'Sqlite', 'Selenium'],
        url: "https://notaamiga.netlify.app",
        git: "https://github.com/bruno-bert/notaamiga",
        imagePosition: 'left',
        category: 'main'
    },
    {
        title: 'LuckyinLive',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio.",
        image: "/project2.jpg",
        stack: ['NextJs', 'Vercel', 'Selenium'],
        url: "https://luckyinlive.com",
        git: "https://github.com/bruno-bert/luckyinlive",
        imagePosition: 'right',
        category: 'main'

    },
    {
        title: 'MakeUp Website',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio.",
        image: "/project3.jpg",
        stack: ['Gatsby', 'GraphQL', 'HTML', 'Css', 'Es6'],
        url: "https://giselebertoni.netlify.app",
        git: "https://github.com/bruno-bert/giselemakeup",
        category: 'main',
        imagePosition: 'left'

    },




]


export const Work = (props: Props) => {
    return (

        <section className={styles.about}>
            <div>
                <h3>
                    <span>03.</span>
                    Some Things I've Built!
                </h3>
            </div>



            {projects.map((item, index) =>
            (
                <Project key={index} data={item} />
            )
            )}

        </section>
    )
}


