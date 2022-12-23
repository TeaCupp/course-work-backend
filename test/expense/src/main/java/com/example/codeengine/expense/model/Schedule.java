package com.example.codeengine.expense.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name="schedule")
public class Schedule {

    @Id
    private Long id;

    private int teacher_id;

    private int discipline_id;

    private int groups_id;

    @NotNull
    private String name;

    private Instant time;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumns({
            @JoinColumn(name="classroom_id", referencedColumnName="id")
    })
    private Classroom classroom;
}
