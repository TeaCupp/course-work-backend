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
@Table(name="department")
public class Department {

    @Id
    private Long id;

    private int faculty_id;

    @NotNull
    private String name;

    private String short_name;



}
