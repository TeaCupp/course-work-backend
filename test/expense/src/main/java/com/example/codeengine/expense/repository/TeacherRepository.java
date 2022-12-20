package com.example.codeengine.expense.repository;

import com.example.codeengine.expense.model.Teacher;

public interface TeacherRepository {

    Teacher findByName(String name);
}
