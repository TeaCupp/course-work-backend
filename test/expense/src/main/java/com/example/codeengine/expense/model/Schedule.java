package com.example.codeengine.expense.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name="schedule")
public class Schedule {

    private Long id;

    private String name;

    private int teacher_id;

    private int discipline_id;

    private Instant time;

    private String classrom;


}
