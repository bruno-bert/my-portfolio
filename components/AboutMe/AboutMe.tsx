import styles from './AboutMe.module.scss'
import Image from 'next/image'
interface Props {

}

export const AboutMe = (props: Props) => {
    return (

        <section id="aboutme" className={styles.about}>




            <div className={styles.content}>
                <div id="left" className={styles.left}>

                    <div className={styles.title}>
                        <h3>
                            <span>01.</span>
                            About Me
                        </h3>
                    </div>


                    <p className={styles.description}>
                        Hello! My name is Bruno and I enjoy creating things that live on the internet. My interest in development started back in 2006
                        when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML and CSS!
                        <br /><br />
                        Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                        <br /><br />
                        Here are a few technologies I've been working with recently:

                    </p>
                    <ul className={styles.skills}>
                        <li>HTML, Css, Javascript (Es6 +)</li>
                        <li>React, Next, Gatsby</li>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>C-Sharp</li>
                        <li>DynamoDB, SQL Server, MongoDB</li>
                        <li>Others: AWS Lambda, RestAPI </li>
                    </ul>


                </div>


                <div id="right" className={styles.right}>
                    <Image src="/me.jpg" alt="my picture" width={267} height={363} />
                </div>
            </div>





        </section >
    )
}

