package com.example.codeengine.expense.repository;

import com.example.codeengine.expense.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    Schedule findByName(String name);
}
