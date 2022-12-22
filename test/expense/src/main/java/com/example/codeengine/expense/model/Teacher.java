package com.example.codeengine.expense.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name="teacher")
public class Teacher {

    @Id
    private Long id;


    @NotNull
    private String name;

    private String surname;

    private String email;

    private String phone;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name="teacher_id", referencedColumnName="id")
    })
    private Schedule schedule;

}
