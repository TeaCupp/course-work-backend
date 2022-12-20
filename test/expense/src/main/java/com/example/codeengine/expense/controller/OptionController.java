package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.model.Category;
import com.example.codeengine.expense.model.Option;
import com.example.codeengine.expense.repository.OptionRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class OptionController {
    private OptionRepository optionRepository;

    public OptionController(OptionRepository optionRepository) {
        super();
        this.optionRepository = optionRepository;
    }

    @GetMapping("/options")
    Collection<Option> options(){
        return optionRepository.findAll();
    }

    @GetMapping("option/{id}")
    ResponseEntity<?> getOption(@PathVariable Long id){
        Optional<Option> option = optionRepository.findById(id);
        return option.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));


    }


    @PostMapping("/option")
    ResponseEntity<Option> createOption(@Valid @RequestBody Option option) throws URISyntaxException{
        Option result = optionRepository.save(option);
        return ResponseEntity.created(new URI("/api/option" + result.getId())).body(result);
    }


    @PutMapping("/option/{id}")
    ResponseEntity<Option> updateOption(@Valid @RequestBody Option option){
        Option result = optionRepository.save(option);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/option/{id}")
    ResponseEntity<?> deleteOption(@PathVariable Long id){
        optionRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }


}
