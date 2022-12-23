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
@Table(name="classroom")

public class Classroom {

        @Id
        @GeneratedValue
        private Long id;

        private String name;

        @ManyToOne
        @OnDelete(action = OnDeleteAction.CASCADE)
        @JoinColumns({
                @JoinColumn(name="classroom_id", referencedColumnName="id")
        })
        private Schedule schedule;
}
