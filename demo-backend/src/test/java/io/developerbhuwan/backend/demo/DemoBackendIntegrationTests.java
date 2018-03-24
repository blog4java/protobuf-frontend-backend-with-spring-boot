package io.developerbhuwan.backend.demo;

import io.developerbuwan.demo.model.DemoProtos.PersonRequest;
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
import org.springframework.http.converter.protobuf.ProtobufHttpMessageConverter;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Objects;
import java.util.stream.Stream;

import static java.net.URI.create;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;

/**
 * @author Bhuwan Prasad Upadhyay
 */
@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
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
        ResponseEntity<String> response = addPerson("BHUWAN");
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }


    @Test
    void findAllPersonNames_ThenReturnOkStatus() {
        String givenFirstName = "GANESH";
        addPerson(givenFirstName);
        ResponseEntity<String> names = findPersons();
        assertTrue(Stream.of(names.getBody()).anyMatch(n -> Objects.equals(n, givenFirstName)));
    }


    private ResponseEntity<String> findPersons() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(ProtobufHttpMessageConverter.PROTOBUF);
        RequestEntity<PersonRequest> requestEntity =
                new RequestEntity<>(headers, GET, create(baseUri + "/api/persons"));
        return rest.exchange(requestEntity, String.class);
    }

    private ResponseEntity<String> addPerson(String firstName) {
        HttpHeaders headers = new HttpHeaders();
        PersonRequest request = PersonRequest
                .newBuilder().setFirstName(firstName).setMiddleName("PRASAD").setLastName("UPADHYAY")
                .build();
        RequestEntity<PersonRequest> requestEntity =
                new RequestEntity<>(request, headers, POST, create(baseUri + "/api/persons"));
        return rest.exchange(requestEntity, String.class);
    }
}