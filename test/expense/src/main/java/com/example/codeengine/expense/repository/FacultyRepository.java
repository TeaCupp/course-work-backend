package com.example.codeengine.expense.repository;

import com.example.codeengine.expense.model.Faculty;

public interface FacultyRepository {
    Faculty findByName(String name);
}
