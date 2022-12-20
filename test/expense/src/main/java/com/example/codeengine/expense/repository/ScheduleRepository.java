package com.example.codeengine.expense.repository;

import com.example.codeengine.expense.model.Schedule;

public interface ScheduleRepository {
    Schedule findByName(String name);
}
