package com.example.codeengine.expense.controller;

import com.example.codeengine.expense.model.Faculty;
import com.example.codeengine.expense.model.Group;
import com.example.codeengine.expense.repository.GroupRepository;
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
public class GroupController {
    private GroupRepository groupRepository;

    public GroupController(GroupRepository groupRepository) {
        super();
        this.groupRepository = groupRepository;
    }


    @GetMapping("/groups")
    Collection<Group> groups(){
        return groupRepository.findAll();
    }

    @GetMapping("group/{id}")
    ResponseEntity<?> getGroup(@PathVariable Long id){
        Optional<Group> group = groupRepository.findById(id);
        return group.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @PostMapping("/group")
    ResponseEntity<Group> createGroup(@Valid @RequestBody Group group) throws URISyntaxException {
        Group result = groupRepository.save(group);
        return ResponseEntity.created(new URI("/api/group" + result.getId())).body(result);
    }


    @PutMapping("/group/{id}")
    ResponseEntity<Group> updateGroup(@Valid @RequestBody Group group){
        Group result = groupRepository.save(group);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/group/{id}")
    ResponseEntity<?> deleteGroup(@PathVariable Long id){
        groupRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
