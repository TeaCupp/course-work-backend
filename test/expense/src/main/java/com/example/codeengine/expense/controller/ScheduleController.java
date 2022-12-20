package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.repository.ScheduleRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ScheduleController {
    private ScheduleRepository scheduleRepository;

    public ScheduleController(ScheduleRepository scheduleRepository) {
        super();
        this.scheduleRepository = scheduleRepository;
    }
}
