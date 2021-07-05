import styles from './Hero.module.scss'
import Button from '../Button/Button'
interface Props {

}

export const Hero = (props: Props) => {
    return (

        <section id="hero" className={styles.hero}>

            <p className={styles.p1}>Hi, my name is</p>

            <h1 className={styles.name}>Bruno Bertoni.</h1>

            <h2 className={styles.subtitle}>I build applications and websites.</h2>

            <p className={styles.description}>
                I'm a Brazil-based software engineer who specializes in building exceptional digital experiences.
                Currently, I'm an solution engineer at Johnson's focused on digital and automation products.
            </p>

            <div className={styles.cta}>
                <Button large={true}>Get In Touch</Button>
            </div>

        </section>
    )
}

