package com.example.codeengine.expense.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name="schedule")
public class Schedule {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    private String name;

    private int teacher_id;

    private int discipline_id;

    private Instant time;

    private String classrom;


}
