package br.mackenzie.webapp.tarefa;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
class TarefaController {

    @Autowired
    private TarefaRepo tarefaRepo;

    public TarefaController() {

    }

    @GetMapping("/api/tarefas")
    Iterable<Tarefa> getTarefas(@RequestParam Optional<Long> faculdadeId) {

        return tarefaRepo.findAll();

    }

    @GetMapping("/api/tarefas/{id}")
    Optional<Tarefa> getTarefa(@PathVariable long id) {
        return tarefaRepo.findById(id);
    }

    @PostMapping("/api/tarefas")
    Tarefa createTarefa(@RequestBody Tarefa t) {
        Tarefa createdTarefa = tarefaRepo.save(t);
        return createdTarefa;
    }

    @PutMapping("/api/tarefas/{tarefaId}")
    Optional<Tarefa> updateTarefa(@RequestBody Tarefa tarefaRequest, @PathVariable long tarefaId) {
        Optional<Tarefa> opt = tarefaRepo.findById(tarefaId);
        if (opt.isPresent()) {
            if (tarefaRequest.getId() == tarefaId) {
                tarefaRepo.save(tarefaRequest);
                return opt;
            }
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                "Erro ao alterar dados da tarefa com id " + tarefaId);
    }

    @DeleteMapping(value = "/api/tarefas/{id}")
    void deleteTarefa(@PathVariable long id) {
        tarefaRepo.deleteById(id);
    }
}