import styles from './Contact.module.scss'
import Button from '../Button/Button'
interface Props {

}

export const Contact = (props: Props) => {
    return (

        <section className={styles.about}>
            <div>
                <h3>
                    <span>04.</span>
                    What's Next
                </h3>
            </div>

            <h2>Get In Touch</h2>
            <p>
                Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
            </p>
            <Button>Say Hello</Button>

        </section>
    )
}

