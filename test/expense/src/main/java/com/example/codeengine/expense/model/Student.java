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
@Table(name="student")
public class Student {

    @Id
    @GeneratedValue
    private Long id;

    private int group_id;

    @NotNull
    private String name;

    private String email;

    private String phone;

    @ManyToOne
    private Group group;

}
