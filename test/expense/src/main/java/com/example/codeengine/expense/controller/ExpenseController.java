package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.model.Category;
import com.example.codeengine.expense.model.Expense;
import com.example.codeengine.expense.model.Option;
import com.example.codeengine.expense.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;

    @GetMapping("/expenses")
    List<Expense> getExpenses(){
        return expenseRepository.findAll();
    }

    @DeleteMapping("/expenses/{id}")
    ResponseEntity<?> deleteExpense(@PathVariable Long id){
        expenseRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/expenses/{id}/{desctiption}")
    public ResponseEntity<Expense> updateDescription(@PathVariable Long id, @PathVariable String description) {
        try {
            Expense expense = expenseRepository.findById(id).get();
            expense.setDescription(description);;
            return new ResponseEntity<Expense>(expenseRepository.save(expense), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/expenses/{id}/{location}")
    public ResponseEntity<Expense> updateLocation(@PathVariable Long id, @PathVariable String location) {
        try {
            Expense expense = expenseRepository.findById(id).get();
            expense.setLocation(location);;
            return new ResponseEntity<Expense>(expenseRepository.save(expense), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/expenses/{id}/{option}")
    public ResponseEntity<Expense> updateOption(@PathVariable Long id, @PathVariable Option option) {
        try {
            Expense expense = expenseRepository.findById(id).get();
            expense.setOption(option);;
            return new ResponseEntity<Expense>(expenseRepository.save(expense), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/expenses/{id}/{category}")
    public ResponseEntity<Expense> updateCategory(@PathVariable Long id, @PathVariable Category category) {
        try {
            Expense expense = expenseRepository.findById(id).get();
            expense.setCategory(category);;
            return new ResponseEntity<Expense>(expenseRepository.save(expense), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/expenses/{id}/{sum}")
    public ResponseEntity<Expense> updateSum(@PathVariable Long id, @PathVariable String sum) {
        try {
            Expense expense = expenseRepository.findById(id).get();
            expense.setDescription(sum);;
            return new ResponseEntity<Expense>(expenseRepository.save(expense), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/expenses")
    ResponseEntity<Expense> createExpense(@Valid @RequestBody Expense expense) throws URISyntaxException{
        Expense result = expenseRepository.save(expense);
        return ResponseEntity.created(new URI("/api/expenses" + result.getId())).body(result);
    }
}
