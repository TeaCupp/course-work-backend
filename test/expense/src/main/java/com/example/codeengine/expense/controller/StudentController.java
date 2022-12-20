package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.repository.StudentRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class StudentController {
    private StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        super();
        this.studentRepository = studentRepository;
    }


}
