package com.example.codeengine.expense.repository;

import com.example.codeengine.expense.model.Group;

public interface GroupRepository {
    Group findByName(String name);
}
