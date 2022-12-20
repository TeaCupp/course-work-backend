package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.repository.GroupRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GroupController {
    private GroupRepository groupRepository;

    public GroupController(GroupRepository groupRepository) {
        super();
        this.groupRepository = groupRepository;
    }
}
