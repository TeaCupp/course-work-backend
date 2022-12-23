package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.model.Group;
import com.example.codeengine.expense.model.Schedule;
import com.example.codeengine.expense.repository.ScheduleRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ScheduleController {
    private ScheduleRepository scheduleRepository;

    public ScheduleController(ScheduleRepository scheduleRepository) {
        super();
        this.scheduleRepository = scheduleRepository;
    }


    @GetMapping("/schedules")
    Collection<Schedule> schedules(){
        return scheduleRepository.findAll();
    }

    @GetMapping("schedule/{id}")
    ResponseEntity<?> getSchedule(@PathVariable Long id){
        Optional<Schedule> schedule = scheduleRepository.findById(id);
        return schedule.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @PostMapping("/schedule")
    ResponseEntity<Schedule> createSchedule(@Valid @RequestBody Schedule schedule) throws URISyntaxException {
        Schedule result = scheduleRepository.save(schedule);
        return ResponseEntity.created(new URI("/api/schedule" + result.getId())).body(result);
    }


    @PutMapping("/schedule/{id}")
    ResponseEntity<Schedule> updateSchedule(@Valid @RequestBody Schedule schedule){
        Schedule result = scheduleRepository.save(schedule);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/schedule/{id}")
    ResponseEntity<?> deleteSchedule(@PathVariable Long id){
        scheduleRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
