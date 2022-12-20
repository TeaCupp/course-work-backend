package com.example.codeengine.expense.repository;

import com.example.codeengine.expense.model.Discipline;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DisciplineRepository extends JpaRepository<Discipline, Long> {

    Discipline findByName(String name);
}
