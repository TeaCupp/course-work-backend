package com.example.codeengine.expense.model;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name="faculty")
public class Faculty {

    @Id
    private Long id;

    @NotNull
    private String name;

    private String short_name;

}
