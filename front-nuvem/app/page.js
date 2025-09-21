"use client"

import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard"
import { createTask, getTasks } from "@/app/util/api"
export default function Home() {

  const [inputTask, setInputTask] = useState("");
  const [inputData, setInputData] = useState("");
  const [inputEmoji, setInputEmoji] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [dados, setDados] = useState([])

  const newTask = async (e) => {

    e.preventDefault();

    const descricao = inputTask.trim();
    const data = inputData.trim();
    const emoji = inputEmoji.trim();
    const status = false;

    if (descricao === "" || data === "" || emoji === "") {
      setErrorMessage("Campos não podem ficar vazios");
      return;
    }

    let response = await createTask({ descricao, data, emoji, status })

    if (response.ok) {
      setInputTask("");
      setInputData("");
      setInputEmoji("");
    } else {
      setErrorMessage(response.message);
    }

  }

  const fetchTasks = async () => {
    try {
      let tasks = await getTasks()
      setDados(tasks);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);


  return (
    <>
      <h1>Gerenciador de tarefas</h1>
      <form className="formulario" onSubmit={newTask}>
        <input type="text" placeholder="Sua tarefa" className="myTask-campo" value={inputTask} onChange={(e) => setInputTask(e.target.value)}></input>
        <input type="date" placeholder="Data e hora" className="data-campo" value={inputData} onChange={(e) => setInputData(e.target.value)}></input>
        <select placeholder="Sua tarefa" className="emoji-campo" value={inputEmoji} onChange={(e) => setInputEmoji(e.target.value)}>
          <option value="" disabled hidden>Emoji</option>
          <option value="planta">Planta</option>
          <option value="estudos">Estudos</option>
          <option value="trabalho">Trabalho</option>
          <option value="limpeza">Limpeza</option>
        </select>
        <button type="submit" className="create-button">Criar</button>
      </form>
      <div class="espacoCard">
        {dados.map((tasks, index) => { <TaskCard {...tasks} key={index} /> })}
      </div>
    </>
  );


}
