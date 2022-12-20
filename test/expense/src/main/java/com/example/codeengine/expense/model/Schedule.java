package com.example.codeengine.expense.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
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

    private String classroom;


    @ManyToOne
    private Teacher teacher ;

    @ManyToOne
    private Discipline disciplines;

    @ManyToOne
    private Group group;

}
