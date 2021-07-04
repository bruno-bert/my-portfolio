import styles from './AboutMe.module.scss'
interface Props {

}

export const AboutMe = (props: Props) => {
    return (

        <section className={styles.about}>


            <div className="title">
                <h3>
                    <span>01.</span>
                    About Me
                </h3>
            </div>

            <div className="content">
                <div id="left">


                    <p>
                        Hello! My name is Bruno and I enjoy creating things that live on the internet. My interest in development started back in 2006
                        when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML and CSS!

                        Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

                        Here are a few technologies I've been working with recently:

                    </p>
                    <ul>
                        <li>HTML, Css, Javascript (Es6 +)</li>
                        <li>React, Next, Gatsby</li>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>C-Sharp</li>
                        <li>DynamoDB, SQL Server, MongoDB</li>
                        <li>Others: AWS Lambda, RestAPI </li>
                    </ul>


                </div>
            </div>

            <div id="right">
                <img src="" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, fuga.</p>
            </div>



        </section >
    )
}

