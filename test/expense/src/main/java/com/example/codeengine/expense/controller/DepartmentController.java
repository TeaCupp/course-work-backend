package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.repository.DepartmentRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DepartmentController {
    private DepartmentRepository departmentRepository;

    public DepartmentController(DepartmentRepository departmentRepository) {
        super();
        this.departmentRepository = departmentRepository;
    }

    
}
