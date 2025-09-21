"use client"

import { use, useState } from "react";
import TaskCard from "./components/TaskCard"

export default function Home() {

  const [inputTask, setInputTask] = useState("");
  const [inputData, setInputData] = useState("");
  const [inputEmoji, setInputEmoji] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const newTask = async (e) => {
    
    e.preventDefault();

    const task = inputTask.trim();
    const data = inputData.trim();
    const emoji = inputEmoji.trim();

    if (task === "" || data === "" || emoji === "") {
      setErrorMessage("Campos não podem ficar vazios");
      return;
    }

    let response = await createTask({task, data, emoji})

    if (response.ok) {
      setInputTask("");
      setInputData("");
      setInputEmoji("");
    } else {
      setErrorMessage(response.message);
    }

  }

  return (
    <>
      <h1>Gerenciador de tarefas</h1>
      <form className="formulario">
        <input type="text" placeholder="Sua tarefa" className="myTask-campo" value={inputTask} onChange={(e) => setInputTask(e.target.value)}></input>
        <input type="date" placeholder="Data e hora" className="data-campo" value={inputData} onChange={(e) => setInputData(e.target.value)}></input>
        <select placeholder="Sua tarefa" className="emoji-campo"  value={inputEmoji} onChange={(e) => setInputEmoji(e.target.value)}>
            <option value="" disabled selected hidden>Emoji</option>
            <option value="planta">Planta</option>
            <option value="estudos">Estudos</option>
            <option value="trabalho">Trabalho</option>
            <option value="limpeza">Limpeza</option>
        </select>
        <button className="create-button">Criar</button>
      </form>
      <container class="espacoCard">
        <TaskCard />
      </container>
    </>
  );

  
}
