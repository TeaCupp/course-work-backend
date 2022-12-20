package com.example.codeengine.expense.repository;

import com.example.codeengine.expense.model.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacultyRepository extends JpaRepository<Faculty, Long> {
    Faculty findByName(String name);
}
