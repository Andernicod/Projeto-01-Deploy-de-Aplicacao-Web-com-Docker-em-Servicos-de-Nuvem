"use client"

import styles from "./taskCard.module.css"

const TaskCard = () => {
    return (
        <section className={styles.containerCard}>
            <img src="https://symbl-cdn.com/i/webp/d9/473ff79758f677cb8879408da5fc79.webp" className={styles.emoji}></img>
            <h3 className={styles.taskTitle}>Regar as suculentas da varanda do quarto de hóspedes</h3>
            <section className={styles.infoPlace}>
                <p className={styles.text}>Hoje 15h</p>
                <button className={styles.taskButton}>Feito</button>
            </section>
            <bottom className={styles.taskColor}></bottom>
        </section>
    );
}

export default TaskCard;