package com.example.codeengine.expense.repository;

import com.example.codeengine.expense.model.Disciplines;

public interface DisciplinesRepository {

    Disciplines findByName(String name);
}
