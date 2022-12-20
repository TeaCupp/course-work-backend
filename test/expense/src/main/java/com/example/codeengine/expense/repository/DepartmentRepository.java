package com.example.codeengine.expense.repository;
import com.example.codeengine.expense.model.Department;

public interface DepartmentRepository {

    Department findByName(String name);
}
