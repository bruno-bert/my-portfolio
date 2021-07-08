import styles from './Contact.module.scss'
import Button from '../Button/Button'
interface Props {

}

export const Contact = (props: Props) => {
    return (

        <section id="contact" className={styles.contact}>
            <div>
                <h3 className={styles.subtitle}>
                    04. What's Next
                </h3>
            </div>

            <h2 className={styles.title}>Get In Touch</h2>
            <p className={styles.description}>
                Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
            </p>

            <div className={styles.button}>
                <Button large>
                    <a target="_blank" href="https://wa.me/5512991229818?text=Hello!">
                        Say Hello
                    </a>
                </Button>
            </div>

        </section>
    )
}

