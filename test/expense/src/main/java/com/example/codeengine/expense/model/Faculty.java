package com.example.codeengine.expense.model;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumns({
            @JoinColumn(name="faculty_id", referencedColumnName="id")
    })
    private Department department;

}
