package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.model.Category;
import com.example.codeengine.expense.model.Expense;
import com.example.codeengine.expense.repository.CategoryRepository;
import com.example.codeengine.expense.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;

@RestController
@RequestMapping("/api")
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/expenses")
    List<Expense> getExpenses(){
        return expenseRepository.findAll();
    }

    @GetMapping("/expensesSummary")
    Map<String, Double> getExpensesSummary(){
        List<Expense> allExpenses = new ArrayList<>(expenseRepository.findAll());
        List<Category> allCategories = new ArrayList<>(categoryRepository.findAll());
        Map<String, Double> sumOfEveryCategory = new HashMap<>();
        for (Category category: allCategories) {
            sumOfEveryCategory.put(category.getName(), 0.0);
        }

        for(Expense expense: allExpenses){
            for (Category category: allCategories) {
                if(Objects.equals(expense.getCategory().getName(), category.getName())) {
                    sumOfEveryCategory.put(category.getName(), sumOfEveryCategory.get(category.getName()) + expense.getSum());
                    break;
                }
            }
        }
        return sumOfEveryCategory;
    }

    @DeleteMapping("/expenses/{id}")
    ResponseEntity<?> deleteExpense(@PathVariable Long id){
        expenseRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }


    @PostMapping("/expenses")
    ResponseEntity<Expense> createExpense(@Valid @RequestBody Expense expense) throws URISyntaxException{
        Expense result = expenseRepository.save(expense);
        return ResponseEntity.created(new URI("/api/expenses" + result.getId())).body(result);
    }

    @PutMapping("/expenses/{id}")
    public ResponseEntity<Expense> updateCustomer(@RequestBody Expense expense) {

        try {
            return new ResponseEntity<Expense>(expenseRepository.save(expense), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
