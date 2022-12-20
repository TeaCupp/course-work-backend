package com.example.codeengine.expense.repository;

import com.example.codeengine.expense.model.Student;

public interface StudentRepository {
    Student findByName(String name);
}
