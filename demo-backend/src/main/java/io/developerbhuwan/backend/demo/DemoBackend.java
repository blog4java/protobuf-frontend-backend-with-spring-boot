package io.developerbhuwan.backend.demo;

import io.developerbuwan.demo.model.DemoProtos.PersonRequest;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import static java.util.stream.Collectors.toList;

/**
 * @author Bhuwan Prasad Upadhyay
 */
@SpringBootApplication
@EnableServiceEndpoints
public class DemoBackend {

    private static final String APPLICATION_X_PROTOBUF_VALUE = "application/x-protobuf";

    public static void main(String[] args) {
        SpringApplication.run(DemoBackend.class, args);
    }


    @RestController
    @RequestMapping(
            path = "/api/persons",
            produces = {APPLICATION_X_PROTOBUF_VALUE},
            consumes = {APPLICATION_X_PROTOBUF_VALUE}
    )
    static class RestDemoEndPoints {

        private Map<String, PersonRequest> persons = new LinkedHashMap<>();

        @PostMapping
        public String addPerson(@RequestBody PersonRequest request) {
            persons.put(UUID.randomUUID().toString(), request);
            return "Ok";
        }

        @GetMapping
        public List<String> findAllPersonNames(PersonRequest request) {
            return persons.entrySet().stream()
                    .map(Map.Entry::getValue)
                    .map(PersonRequest::getFirstName).collect(toList());
        }
    }

}
