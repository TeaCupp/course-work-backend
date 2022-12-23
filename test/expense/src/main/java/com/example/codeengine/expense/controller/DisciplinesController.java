package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.model.Department;
import com.example.codeengine.expense.model.Discipline;
import com.example.codeengine.expense.repository.DisciplineRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class DisciplinesController {
    private DisciplineRepository disciplineRepository;

    public DisciplinesController(DisciplineRepository disciplineRepository) {
        super();
        this.disciplineRepository = disciplineRepository;
    }

    @GetMapping("/disciplines")
    Collection<Discipline> disciplines(){
        return disciplineRepository.findAll();
    }

    @GetMapping("discipline/{id}")
    ResponseEntity<?> getDiscipline(@PathVariable Long id){
        Optional<Discipline> discipline = disciplineRepository.findById(id);
        return discipline.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));


    }


    @PostMapping("/discipline")
    ResponseEntity<Discipline> createDiscipline(@Valid @RequestBody Discipline discipline) throws URISyntaxException {
        Discipline result = disciplineRepository.save(discipline);
        return ResponseEntity.created(new URI("/api/discipline" + result.getId())).body(result);
    }


    @PutMapping("/discipline/{id}")
    ResponseEntity<Discipline> updateDiscipline(@Valid @RequestBody Discipline discipline){
        Discipline result = disciplineRepository.save(discipline);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/discipline/{id}")
    ResponseEntity<?> deleteDiscipline(@PathVariable Long id){
        disciplineRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }


}
