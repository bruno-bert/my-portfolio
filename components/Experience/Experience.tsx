import { useState, useEffect } from 'react'
import styles from './Experience.module.scss'
interface Props {

}

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
                        <li onClick={() => setItemActive(0)} className={(itemActive == 0 ? styles.active : "")}><a href="#jnj">Johnson&amp;Johnson</a></li>
                        <li onClick={() => setItemActive(1)} className={(itemActive == 1 ? styles.active : "")}><a href="#bg">BigSist</a></li>
                        <li onClick={() => setItemActive(2)} className={(itemActive == 2 ? styles.active : "")}><a href="#sc">SyncCell</a></li>
                        <li onClick={() => setItemActive(3)} className={(itemActive == 3 ? styles.active : "")}><a href="#fit">FitSoft</a></li>
                    </ul>
                </div >

                <div id="right" className={styles.right}>
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

