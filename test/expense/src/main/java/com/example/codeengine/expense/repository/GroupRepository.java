package com.example.codeengine.expense.repository;

import com.example.codeengine.expense.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group, Long> {
    Group findByName(String name);
}
