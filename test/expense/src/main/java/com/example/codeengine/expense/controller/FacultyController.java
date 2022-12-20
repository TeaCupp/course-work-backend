package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.repository.FacultyRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class FacultyController {
    private FacultyRepository facultyRepository;

    public FacultyController(FacultyRepository facultyRepository) {
        super();
        this.facultyRepository = facultyRepository;
    }
}
