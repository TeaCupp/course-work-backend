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
    private Long id;

    @NotNull
    private String name;

    private Instant time;

    private String classroom;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name="teacher_id", referencedColumnName="id")
    })
    private Teacher teacher ;



    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name="discipline_id", referencedColumnName="id")
    })
    private Discipline disciplines;



    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name="group_id", referencedColumnName="id")
    })
    private Group group;

}
