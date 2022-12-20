package com.example.codeengine.expense.repository;

import com.example.codeengine.expense.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findByName(String name);
}
