import styles from './Experience.module.scss'
interface Props {

}

export const Experience = (props: Props) => {
    return (

        <section id="experience" className={styles.experience}>

            <div className={styles.title}>
                <h3>
                    <span>02.</span>
                    Where I've Worked
                </h3>
            </div>

            <div className={styles.content}>

                <div id="left">
                    <ul>
                        <li><a href="#jnj">Johnson&amp;Johnson</a></li>
                        <li><a href="#bg">BigSist</a></li>
                        <li><a href="#sc">SyncCell</a></li>
                        <li><a href="#fit">FitSoft</a></li>
                    </ul>
                </div >

                <div id="right">
                    <h2>
                        Lorem, ipsum dolor.
                        <span>Highlighted</span>
                    </h2>
                    <p id="period">December 2014 until today</p>
                    <ul id="tasks">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur quo labore illo? Sapiente hic necessitatibus nam pariatur quis perferendis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur quo labore illo? Sapiente hic necessitatibus nam pariatur quis perferendis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur quo labore illo? Sapiente hic necessitatibus nam pariatur quis perferendis?</li>
                    </ul>
                </div>


            </div>


        </section>
    )
}

