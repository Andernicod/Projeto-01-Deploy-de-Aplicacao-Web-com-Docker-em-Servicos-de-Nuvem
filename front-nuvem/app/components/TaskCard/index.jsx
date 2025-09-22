"use client"

import { deleteTask } from "@/app/util/api";
import styles from "./taskCard.module.css"
import { use, useEffect } from "react";

const TaskCard = ({ tasks, onDelete }) => {

    let dataFormat = tasks.data;
    dataFormat = dataFormat.split("-")
    let day = dataFormat[2]
    let month = dataFormat[1]
    let year = dataFormat[0]

    const meses = [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];

    let nomeMes = meses[parseInt(month) - 1];

    dataFormat = day + " " + nomeMes + " de " + year

    const endTask = async (e) => {

        e.preventDefault();
        await deleteTask(tasks.id)
        onDelete()

    }


    return (
        <section className={styles.containerCard}>
            <img src={"/images/" + tasks.emoji + ".png"} className={styles.emoji}></img>
            <h3 className={styles.taskTitle}>{tasks.descricao}</h3>
            <section className={styles.infoPlace}>
                <p className={styles.text}>{dataFormat}</p>
                <button className={styles.taskButton} onClick={endTask}>Feito</button>
            </section>
            <div className={styles.taskColor}></div>
        </section>
    );
}

export default TaskCard;