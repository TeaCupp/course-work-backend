package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.model.Department;
import com.example.codeengine.expense.repository.DepartmentRepository;
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
public class DepartmentController {
    private DepartmentRepository departmentRepository;

    public DepartmentController(DepartmentRepository departmentRepository) {
        super();
        this.departmentRepository = departmentRepository;
    }

    @GetMapping("/departments")
    Collection<Department> departments(){
        return departmentRepository.findAll();
    }

    @GetMapping("department/{id}")
    ResponseEntity<?> getDepartment(@PathVariable Long id){
        Optional<Department> department = departmentRepository.findById(id);
        return department.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));


    }


    @PostMapping("/department")
    ResponseEntity<Department> createDepartment(@Valid @RequestBody Department department) throws URISyntaxException {
        Department result = departmentRepository.save(department);
        return ResponseEntity.created(new URI("/api/department" + result.getId())).body(result);
    }


    @PutMapping("/department/{id}")
    ResponseEntity<Department> updateDepartment(@Valid @RequestBody Department department){
        Department result = departmentRepository.save(department);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/department/{id}")
    ResponseEntity<?> deleteDepartment(@PathVariable Long id){
        departmentRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
