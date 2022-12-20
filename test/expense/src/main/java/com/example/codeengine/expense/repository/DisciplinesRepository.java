package com.example.codeengine.expense.repository;

import com.example.codeengine.expense.model.Disciplines;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DisciplinesRepository extends JpaRepository<Disciplines, Long> {

    Disciplines findByName(String name);
}
