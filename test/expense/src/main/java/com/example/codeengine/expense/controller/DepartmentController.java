package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.model.Category;
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


    @PostMapping("/category")
    ResponseEntity<Category> createCategory(@Valid @RequestBody Category category) throws URISyntaxException {
        Category result = categoryRepository.save(category);
        return ResponseEntity.created(new URI("/api/category" + result.getId())).body(result);
    }


    @PutMapping("/category/{id}")
    ResponseEntity<Category> updateCategory(@Valid @RequestBody Category category){
        Category result = categoryRepository.save(category);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/category/{id}")
    ResponseEntity<?> deleteCategory(@PathVariable Long id){
        categoryRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
