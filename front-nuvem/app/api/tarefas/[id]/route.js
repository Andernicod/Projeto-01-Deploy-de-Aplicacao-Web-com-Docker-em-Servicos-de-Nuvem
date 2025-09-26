import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await fetch(`http://internal-alb-interno-80591396.us-east-1.elb.amazonaws.com/tarefas/${id}`, {
      method: "DELETE",
    });

    return NextResponse.json(
      { message: "Tarefa deletada com sucesso" },
      { status: 204 }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({ error: "Erro ao deletar tarefa" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}