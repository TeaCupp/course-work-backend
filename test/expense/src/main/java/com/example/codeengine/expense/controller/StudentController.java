package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.model.Schedule;
import com.example.codeengine.expense.model.Student;
import com.example.codeengine.expense.repository.StudentRepository;
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
public class StudentController {
    private StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        super();
        this.studentRepository = studentRepository;
    }

    @GetMapping("/students")
    Collection<Student> students(){
        return studentRepository.findAll();
    }

    @GetMapping("student/{id}")
    ResponseEntity<?> getStudent(@PathVariable Long id){
        Optional<Student> student = studentRepository.findById(id);
        return student.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @PostMapping("/student")
    ResponseEntity<Student> createStudent(@Valid @RequestBody Student student) throws URISyntaxException {
        Student result = studentRepository.save(student);
        return ResponseEntity.created(new URI("/api/student" + result.getId())).body(result);
    }


    @PutMapping("/student/{id}")
    ResponseEntity<Student> updateStudent(@Valid @RequestBody Student student){
        Student result = studentRepository.save(student);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/student/{id}")
    ResponseEntity<?> deleteStudent(@PathVariable Long id){
        studentRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
