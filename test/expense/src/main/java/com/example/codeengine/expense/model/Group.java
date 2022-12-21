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
@Table(name="groups")
public class Group {

    @Id
    private Long id;


    @NotNull
    private String name;

    private int course;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name="department_id", referencedColumnName="id")
    })
    private Department department;

}
