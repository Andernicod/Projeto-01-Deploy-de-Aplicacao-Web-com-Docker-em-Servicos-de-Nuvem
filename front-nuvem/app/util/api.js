export async function getTasks() {
  const res = await fetch("/api/tarefas");
  return await res.json();
}

export async function createTask(task) {
  const res = await fetch("/api/tarefas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return await res.json();
}

export async function deleteTask(id_task) {
  await fetch(`/api/tarefas/${id_task}`, { method: "DELETE" });
}