package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.model.Category;
import com.example.codeengine.expense.model.Course;
import com.example.codeengine.expense.repository.CategoryRepository;
import com.example.codeengine.expense.repository.CourseRepository;
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
public class CourseController {

    private CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        super();
        this.courseRepository = courseRepository;
    }

    @GetMapping("courses")
    Collection<Course> courses(){
        return courseRepository.findAll();
    }

    @GetMapping("course/{id}")
    ResponseEntity<?> getCourse(@PathVariable Long id){
        Optional<Course> course = courseRepository.findById(id);
        return course.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));


    }


    @PostMapping("/courses")
    ResponseEntity<Course> createCourse(@Valid @RequestBody Course course) throws URISyntaxException {
        Course result = courseRepository.save(course);
        return ResponseEntity.created(new URI("/api/course" + result.getId())).body(result);
    }


    @PutMapping("/course/{id}")
    ResponseEntity<Course> updateCourse(@Valid @RequestBody Course course){
        Course result = courseRepository.save(course);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/course/{id}")
    ResponseEntity<?> deleteCourse(@PathVariable Long id){
        courseRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
