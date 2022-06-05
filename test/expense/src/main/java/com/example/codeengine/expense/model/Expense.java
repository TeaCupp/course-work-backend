package com.example.codeengine.expense.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="expense")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Instant expensedate;

    private String description;

    private String location;

    @ManyToOne
    private Option option;

    @ManyToOne
    private Category category;

    @JsonIgnore
    @ManyToOne
    private User user;

    private Double sum;

}
