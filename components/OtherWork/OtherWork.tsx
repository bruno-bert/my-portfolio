import styles from './OtherWork.module.scss'
import OtherProject from '../OtherProject/OtherProject'
import Link from 'next/link'
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
        title: 'Concur x SAP Business One Integration',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio.",
        stack: ['C#', 'AWS', 'DynamoDB', 'Lambda'],
        url: "https://medium.com/@bruno.bert.jj",
        git: "https://github.com/bruno-bert",
        category: 'other'
    },
    {
        title: 'Python Sales Commissions Calculation',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio.",
        stack: ['Python', 'Pandas', 'MongoDB'],
        url: "https://medium.com/@bruno.bert.jj",
        git: "https://github.com/bruno-bert",
        category: 'other'
    },
    {
        title: 'JazzETL',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio.",
        stack: ['NodeJS', 'ETL'],
        url: "https://jazzetl.netlify.app/",
        git: "https://github.com/bruno-bert/jazz-etl",
        category: 'other'
    }


]


export const OtherWork = (props: Props) => {
    return (

        <section className={styles.otherwork}>
            <div>
                <h3>
                    Other Noteworthy Projects!
                </h3>
                <h4><Link href="/archive">View the archive</Link></h4>
            </div>



            {projects.map((item, index) =>
            (
                <OtherProject key={index} data={item} />
            )
            )}

        </section>
    )
}


