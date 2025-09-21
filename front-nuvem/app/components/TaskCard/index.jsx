"use client"

import styles from "./taskCard.module.css"

const TaskCard = ({tasks}) => {
    return (
        <section className={styles.containerCard}>
            <img src={tasks.emoji + ".png"} className={styles.emoji}></img>
            <h3 className={styles.taskTitle}>{tasks.descricao}</h3>
            <section className={styles.infoPlace}>
                <p className={styles.text}>{tasks.data}</p>
                <button className={styles.taskButton}>Feito</button>
            </section>
            <div className={styles.taskColor}></div>
        </section>
    );
}

export default TaskCard;