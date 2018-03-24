package io.developerbhuwan.backend.demo;

import io.developerbuwan.demo.model.DemoProtos.People;
import io.developerbuwan.demo.model.DemoProtos.Person;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;

import static java.util.stream.Collectors.toList;
import static org.springframework.boot.SpringApplication.run;

/**
 * @author Bhuwan Prasad Upadhyay
 */
@SpringBootApplication
@EnableServiceEndpoints
public class DemoBackend {

    private static final String APPLICATION_X_PROTOBUF_VALUE = "application/x-protobuf";

    public static void main(String[] args) {
        run(DemoBackend.class, args);
    }


    @RestController
    @RequestMapping(
            path = "/api/persons",
            produces = {APPLICATION_X_PROTOBUF_VALUE},
            consumes = {APPLICATION_X_PROTOBUF_VALUE}
    )
    static class RestDemoEndPoints {

        private Map<String, Person> persons = new LinkedHashMap<>();

        @PostMapping
        public void addPerson(@RequestBody Person person) {
            persons.put(UUID.randomUUID().toString(), person);
        }

        @GetMapping
        public People findAllPersonNames() {
            return People.newBuilder()
                    .addAllPerson(persons.entrySet().stream().map(Map.Entry::getValue).collect(toList()))
                    .build();
        }
    }

}
