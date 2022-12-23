package com.example.codeengine.expense.controller;


import com.example.codeengine.expense.model.Category;
import com.example.codeengine.expense.model.Classroom;
import com.example.codeengine.expense.repository.CategoryRepository;
import com.example.codeengine.expense.repository.ClassroomRepository;
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
public class ClassroomController {

    private ClassroomRepository classroomRepository;

    public ClassroomController(ClassroomRepository classroomRepository) {
        super();
        this.classroomRepository = classroomRepository;
    }

    @GetMapping("/classrooms")
    Collection<Classroom> classrooms(){
        return classroomRepository.findAll();
    }

    @GetMapping("classroom/{id}")
    ResponseEntity<?> getClassroom(@PathVariable Long id){
        Optional<Classroom> classroom = classroomRepository.findById(id);
        return classroom.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));


    }


    @PostMapping("classroom")
    ResponseEntity<Classroom> createClassroom(@Valid @RequestBody Classroom classroom) throws URISyntaxException {
        Classroom result = classroomRepository.save(classroom);
        return ResponseEntity.created(new URI("/api/classroom" + result.getId())).body(result);
    }


    @PutMapping("/classroom/{id}")
    ResponseEntity<Classroom> updateClassroom(@Valid @RequestBody Classroom classroom){
        Classroom result = classroomRepository.save(classroom);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/classroom/{id}")
    ResponseEntity<?> deleteClassroom(@PathVariable Long id){
        classroomRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
