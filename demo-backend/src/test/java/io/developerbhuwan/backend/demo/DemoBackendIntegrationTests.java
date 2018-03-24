package io.developerbhuwan.backend.demo;

import io.developerbuwan.demo.model.DemoProtos.PersonRequest;
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

import static java.net.URI.create;
import static org.junit.jupiter.api.Assertions.assertEquals;
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

    @Test
    void person_Add_ThenReturnStatus() {
        String baseUri = "http://localhost:" + serverPort;
        HttpHeaders headers = new HttpHeaders();
        PersonRequest request = PersonRequest
                .newBuilder().setFirstName("BHUWAN").setMiddleName("PRASAD").setLastName("UPADHYAY")
                .build();
        RequestEntity<PersonRequest> requestEntity =
                new RequestEntity<>(request, headers, POST, create(baseUri + "/api/persons"));
        ResponseEntity<String> response = rest.exchange(requestEntity, String.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}