package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.model.Student;
import com.example.codeengine.expense.model.Teacher;
import com.example.codeengine.expense.repository.TeacherRepository;
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
public class TeacherController {
    private TeacherRepository teacherRepository;

    public TeacherController(TeacherRepository teacherRepository) {
        super();
        this.teacherRepository = teacherRepository;
    }

    @GetMapping("/teachers")
    Collection<Teacher> teachers(){
        return teacherRepository.findAll();
    }

    @GetMapping("teacher/{id}")
    ResponseEntity<?> getTeacher(@PathVariable Long id){
        Optional<Teacher> teacher = teacherRepository.findById(id);
        return teacher.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @PostMapping("/teacher")
    ResponseEntity<Teacher> createTeacher(@Valid @RequestBody Teacher teacher) throws URISyntaxException {
        Teacher result = teacherRepository.save(teacher);
        return ResponseEntity.created(new URI("/api/student" + result.getId())).body(result);
    }


    @PutMapping("/teacher/{id}")
    ResponseEntity<Teacher> updateTeacher(@Valid @RequestBody Teacher teacher){
        Teacher result = teacherRepository.save(teacher);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/teacher/{id}")
    ResponseEntity<?> deleteTeacher(@PathVariable Long id){
        teacherRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
