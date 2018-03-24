package io.developerbhuwan.backend.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author Bhuwan Prasad Upadhyay
 */
@SpringBootApplication
@EnableServiceEndpoints
public class DemoBackend {

    public static void main(String[] args) {
        SpringApplication.run(DemoBackend.class, args);
    }


}
