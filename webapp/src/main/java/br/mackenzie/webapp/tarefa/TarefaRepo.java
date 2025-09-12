package br.mackenzie.webapp.tarefa;

import org.springframework.data.repository.CrudRepository;

public interface TarefaRepo extends CrudRepository<Tarefa, Long> {
}