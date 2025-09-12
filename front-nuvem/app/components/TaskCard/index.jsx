"use client"

import styles from "./taskCard.module.css"

const TaskCard = () => {
    return (
        <section className={styles.sectionCard}>
            <h3>Texto da tarefa vai aqui</h3>
            <h4>Status: Concluída</h4>
        </section>
    );
}

export default TaskCard;