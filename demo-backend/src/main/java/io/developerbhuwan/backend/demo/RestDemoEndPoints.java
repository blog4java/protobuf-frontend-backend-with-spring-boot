package io.developerbhuwan.backend.demo;

import io.developerbuwan.demo.model.DemoProtos;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;

import static io.developerbhuwan.backend.demo.RestDemoEndPoints.APPLICATION_X_PROTOBUF_VALUE;
import static java.util.stream.Collectors.toList;

@RestController
@RequestMapping(
        path = "/api/persons",
        produces = {APPLICATION_X_PROTOBUF_VALUE},
        consumes = {APPLICATION_X_PROTOBUF_VALUE}
)
class RestDemoEndPoints {
    static final String APPLICATION_X_PROTOBUF_VALUE = "application/x-protobuf";
    private Map<String, DemoProtos.Person> persons = new LinkedHashMap<>();

    public RestDemoEndPoints() {
        persons.put(UUID.randomUUID().toString(), DemoProtos.Person.newBuilder()
                .setFirstName("DEMO")
                .setMiddleName("DEMO")
                .setLastName("DEMO")
                .build());
    }

    @PostMapping
    public DemoProtos.Person addPerson(@RequestBody DemoProtos.Person person) {
        persons.put(UUID.randomUUID().toString(), person);
        return person;
    }

    @GetMapping
    public DemoProtos.People findAllPersonNames() {
        return DemoProtos.People.newBuilder()
                .addAllPerson(persons.entrySet().stream().map(Map.Entry::getValue).collect(toList()))
                .build();
    }
}