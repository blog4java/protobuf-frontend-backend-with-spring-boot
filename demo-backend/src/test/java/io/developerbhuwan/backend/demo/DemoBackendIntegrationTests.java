package io.developerbhuwan.backend.demo;

import io.developerbuwan.demo.model.DemoProtos.People;
import io.developerbuwan.demo.model.DemoProtos.Person;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Objects;

import static java.net.URI.create;
import static java.util.Collections.singletonList;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.converter.protobuf.ProtobufHttpMessageConverter.PROTOBUF;

/**
 * @author Bhuwan Prasad Upadhyay
 */
@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = DemoBackend.class, webEnvironment = WebEnvironment.RANDOM_PORT)
class DemoBackendIntegrationTests {

    @Autowired
    private TestRestTemplate rest;
    @LocalServerPort
    private int serverPort;
    private String baseUri;

    @BeforeEach
    void setUp() {
        baseUri = "http://localhost:" + serverPort;
    }

    @Test
    void person_Add_ThenReturnOkStatus() {
        ResponseEntity<Person> response = addPerson("BHUWAN");
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }


    @Test
    void findAllPersonNames_ThenReturnOkStatus() {
        String givenFirstName = "GANESH";
        addPerson(givenFirstName);
        ResponseEntity<People> names = findPersons();
        assertTrue(names.getBody().getPersonList().stream().anyMatch(n -> Objects.equals(n.getFirstName(), givenFirstName)));
    }


    private ResponseEntity<People> findPersons() {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(singletonList(PROTOBUF));
        headers.setContentType(PROTOBUF);
        RequestEntity<Person> requestEntity =
                new RequestEntity<>(headers, GET, create(baseUri + "/api/persons"));
        return rest.exchange(requestEntity, People.class);
    }

    private ResponseEntity<Person> addPerson(String firstName) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(PROTOBUF);
        headers.setAccept(singletonList(PROTOBUF));
        Person request = Person
                .newBuilder().setFirstName(firstName).setMiddleName("PRASAD").setLastName("UPADHYAY")
                .build();
        RequestEntity<Person> requestEntity =
                new RequestEntity<>(request, headers, POST, create(baseUri + "/api/persons"));
        return rest.exchange(requestEntity, Person.class);
    }
}