import styles from './Hero.module.scss'
interface Props {

}

export const Hero = (props: Props) => {
    return (

        <section id="hero" className={styles.hero}>
            <p>Hi, my name is</p>
            <h1>Bruno Bertoni</h1>
            <h2>I build applications and websites</h2>
            <p>
                I'm a Brazil-based software engineer who specializes in building exceptional digital experiences.
                Currently, I'm an solution engineer at Johnson's focused on digital and automation products.
            </p>
            <button>Get In Touch</button>

        </section>
    )
}

