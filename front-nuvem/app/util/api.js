export async function getTasks() {
    try {
        let data = await fetch("http://54.84.12.29:25000/tarefas");
        let tasks = await data.json();
        return tasks;
    } catch (error) {
        console.error(error);
    }
}

export async function createTask(task) {
    try {
        const response = await fetch("http://54.84.12.29:25000/tarefas", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "descricao": task.descricao,
                "data": task.data,
                "emoji": task.emoji,
                "status": task.status
            }),
        })
        console.log((response).status)
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function deleteTask(id_task) {
    try {
        fetch(`http://54.84.12.29:25000/tarefas/${id_task}`, {
            method : "DELETE"
        })
    } catch (error) {
        console.error("Erro ao tentar realizar deleção", error);
    }
}