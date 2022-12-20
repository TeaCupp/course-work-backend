package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.model.Discipline;
import com.example.codeengine.expense.model.Faculty;
import com.example.codeengine.expense.repository.FacultyRepository;
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
public class FacultyController {
    private FacultyRepository facultyRepository;

    public FacultyController(FacultyRepository facultyRepository) {
        super();
        this.facultyRepository = facultyRepository;
    }


    @GetMapping("/faculties")
    Collection<Faculty> faculties(){
        return facultyRepository.findAll();
    }

    @GetMapping("faculty/{id}")
    ResponseEntity<?> getFaculty(@PathVariable Long id){
        Optional<Faculty> faculty = facultyRepository.findById(id);
        return faculty.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));


    }


    @PostMapping("/faculty")
    ResponseEntity<Faculty> createFaculty(@Valid @RequestBody Faculty faculty) throws URISyntaxException {
        Faculty result = facultyRepository.save(faculty);
        return ResponseEntity.created(new URI("/api/faculty" + result.getId())).body(result);
    }


    @PutMapping("/faculty/{id}")
    ResponseEntity<Faculty> updateFaculty(@Valid @RequestBody Faculty faculty){
        Faculty result = facultyRepository.save(faculty);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/faculty/{id}")
    ResponseEntity<?> deleteFaculty(@PathVariable Long id){
        facultyRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
