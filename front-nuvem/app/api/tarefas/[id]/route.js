app/api/tarefas/[id]/route.js
export async function DELETE(_, { params }) {
  const { id } = params;
  try {
    await fetch(`http://internal-alb-interno-80591396.us-east-1.elb.amazonaws.com/tarefas/${id}`, {
      method: "DELETE",
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Erro ao deletar tarefa" }), { status: 500 });
  }
}