package com.example.codeengine.expense.repository;

import com.example.codeengine.expense.model.Category;
import com.example.codeengine.expense.model.Option;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OptionRepository extends JpaRepository<Option, Long> {

    Category findByName(String name);
}