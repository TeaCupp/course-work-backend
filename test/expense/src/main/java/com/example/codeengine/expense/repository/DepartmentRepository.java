package com.example.codeengine.expense.repository;
import com.example.codeengine.expense.model.Category;
import com.example.codeengine.expense.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {

    Department findByName(String name);
}
