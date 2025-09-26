import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("http://internal-alb-interno-80591396.us-east-1.elb.amazonaws.com/tarefas");
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Erro ao buscar tarefas" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const response = await fetch("http://internal-alb-interno-80591396.us-east-1.elb.amazonaws.com/tarefas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Erro ao criar tarefa" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}